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
            resource_description: req.body.resource_description
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

module.exports= router;