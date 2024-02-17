const express = require('express');

const Cat = require('../models/Cat');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const cats = await Cat.find();
        return res.status(200).json(cats);
    } catch (error) {
        return next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const cat = await Cat.findById(id);
        return res.status(200).json(cat);    
    } catch (error) {
        return next(error)
    }
})

router.post('/create', async (req, res, next) => {
    try {
        const newCat = new Cat({
            name: req.body.name,
            canBeAdoptedAlone: req.body.canBeAdoptedAlone,
            genre: req.body.genre,
            color: req.body.color,
            description: req.body.description,
            race: req.body.race,
            dateOfBirth: req.body.dateOfBirth
        });

        const createdCat = await newCat.save();
        return res.status(201).json(createdCat);

    } catch (error) {
        return next(error);
    }
});

router.put('/:id', async ( req, res, next ) => {
    try {
        const { id } = req.params;
        const catModify = new Cat(req.body);
        catModify._id = id;
        const catUpdated = await Cat.findByIdAndUpdate(id, catModify, { new: true });
        return res.status(200).json(catUpdated);
    } catch (error) {
        return next(error);
    }
});

router.delete('/:id', async ( req, res, next ) => {
    try {
        const { id } = req.params;
        await Cat.findByIdAndDelete(id);
        return res.status(200).json('Cat deleted');
    }  catch (error) {
        return next(error);
    }
})

module.exports = router;