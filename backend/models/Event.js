const mongoose = require('mongoose');

// Define the Event Schema
const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  }
  ,festival:{
    type:String,enum:["festivaldecarthage","festivaldebizerte","festivaldehammamet"]
},
  date: {
    type:String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },


  price: {
    type: Number,
    required: true,
  },




 logo:{
  type:String
 }

});

// Create a model from the schema
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;

