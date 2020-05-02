const express= require('express');
const db= require('./projectDB.js');

const router= express.Router();

router.get('/', async (req, res, next) => {
    try {
        const pjs= await db.fetch();
        res.json(pjs);
    } catch (err) {
        console.log('Error getting pjs:', err);
        next(err);
    };
});

router.post('/', async (req, res, next) => {
    try {
        const newProject= await db.create(req.body);
        res.status(201).json(newProject)
    } catch (err) {
        console.log('Error creating project:', err);
        next(err);
    };
});

router.get('/:id/resources', async (req, res, next) => {
    try {
        
    } catch (err) {
        console.log('Error getting resources:', err);
        next(err);
    };
});


module.exports= router;