const express= require('express');
const db= require('./projectDB.js');

const router= express.Router();

// GET projects
router.get('/', async (req, res, next) => {
    try {
        const pjs= await db.fetch();
        res.json(pjs);
    } catch (err) {
        console.log('Error getting pjs:', err);
        next(err);
    };
});

// CREATE project
router.post('/', async (req, res, next) => {
    try {
        const newProject= await db.create(req.body);
        res.status(201).json(newProject)
    } catch (err) {
        console.log('Error creating project:', err);
        next(err);
    };
});

// GET resources
router.get('/:id/resources', async (req, res, next) => {
    try {
        const pjResources= await db.getResources(req.params.id);
        res.json(pjResources);
    } catch (err) {
        console.log('Error getting resources:', err);
        next(err);
    };
});

// CREATE resource
router.post('/:id/resources', async (req, res, next) => {
    try {
        const payload= {
            name: req.body.name,
            resource_desc: req.body.resource_desc
        }

        const newResrc= await db.addResource(payload, req.params.id);

        if(req.params.id){
            console.log(newResrc);
            res.status(201).json(newResrc);
        } else{
            res.status(404).json({
                message: 'Invalid id or post does not exist'
            });
        }
    } catch (err) {
        console.log('Error creating resource:', err);
        next(err);
    };
});

// GET tasks
router.get('/:id/tasks', async (req, res, next) => {
    try {
        const tasks= await db.getTasks(req.params.id);
        res.json(tasks);
    } catch (err) {
        console.log('Error getting tasks:', err);
        next(err);
    }
})

// CREATE task
router.post('/:id/tasks', async (req, res, next) => {
    try {
        const payload= {
            task_desc: req.body.task_desc,
            notes: req.body.notes,
            pj_id: req.params.id // task.pj_id cannot be nullable (inquire how to change that)
        }

        const newTask= await db.addTask(payload, req.params.id);

        if(req.params.id){
            res.status(201).json(newTask);
        } else{
            res.status(404).json({
                message: 'Invalid id or post does not exist'
            });
        }
    } catch (err) {
        console.log('Error creating task:', err);
        next(err);
    }
})

module.exports= router;