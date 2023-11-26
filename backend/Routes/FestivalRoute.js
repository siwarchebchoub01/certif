const express = require('express');
const router = express.Router();
const Festival = require('../models/Event'); // Assuming you have a Festival model
const upload=require('../utils/multer');
const Event = require('../models/Event');
// GET all festivals
router.get('/', async (req, res) => {
  try {
    const festivals = await Festival.find();
    res.send(festivals);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching festivals', error: err });
  }
});

// POST a new festival
router.post('/',upload("event").single("file"), async (req, res) => {

  try {
    const url =` ${req.protocol}://${req.get("host")}/${req.file.path}`
    
    const newFestival = new Event(req.body)
    newFestival.logo=url
    await newFestival.save();
    res.send(newFestival);
  } 
  catch (err) {
    res.status(400).json({ message: 'Error creating festival', error: err });
  }
});

// PUT (update) a festival by ID
router.put('/:id',upload("event").single("file"), async (req, res) => {

  try {    
    const updatedFestival = await Festival.findByIdAndUpdate(req.params.id, {...req.body});
    if (req.file){
     const url =` ${req.protocol}://${req.get("host")}/${req.file.path}`
     updatedFestival.logo=url
    }
    console.log(updatedFestival);
    res.send(updatedFestival);
  }  catch (err) {
    res.status(400).json({ message: 'Error updating festival', error: err });
  }
});

// DELETE a festival by ID
router.delete('/:id', async (req, res) => {
  try {
    await Festival.deleteOne({_id:req.params.id});
    res.json({ message: 'Festival deleted' });
  } catch (err) {
    res.status(400).json({ message: 'Error deleting festival', error: err });
  }
});

module.exports = router;
