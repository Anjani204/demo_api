const express = require('express');
const { castObject } = require('../models/model');

const router = express.Router();
var mongoose = require('mongoose')

const Model = require('../models/model');

router.post('/post',async (req, res) => {
    const data = new Model({
        id: req.body.id,
        title: req.body.title,
        author: req.body.author,
        year:req.body.year
    })

    console.log('====================================');
    console.log(data);
    console.log('====================================');

    try {
        
        res.status(200).send(data)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Methodd

  router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


//Get by id Method
router.get('/getOne/',async (req, res) => {
    
    try{
        const num =new  mongoose.Types.ObjectId( req.body.id);
        const data = await Model.findById(num);
        res.send(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by id Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by id Method
router.delete('/delete/:id',async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.title} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
    
})

module.exports = router;