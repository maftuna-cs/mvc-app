const mongoose = require('mongoose');
const Schem = mongoose.Schema;

//This indicates the shape of the documents that will be entering the database
  const roomSchema = new Schem({
   
    title:
    {
      type:String,
      required:true
    },

    price: 
    {
        type:String,
        required:true
    },
    description:
    {
        type:String,
        required:true
    },
    location:
    {
        type:String,
        required:true
    },
    roomFeatured:
    {
        type:String,
        default:"Open"
    },
    roomPhoto:
    {
        type:String

    }
  });

  /*
    For every Schema you create(Create a schema per collection), you must also create a model object. 
    The model will allow you to perform CRUD operations on a given collection!!! 
  */

 const addRoomModel = mongoose.model('created room', roomSchema);

 module.exports = addRoomModel;