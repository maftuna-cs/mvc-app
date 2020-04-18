const mongoose = require('mongoose');
const Schem = mongoose.Schema;

//This indicates the shape of the documents that will be entering the database
  const roomSchema = new Schem({
   
    titl:
    {
      type:String,
      required:true
    },

    prc: 
    {
        type:String,
        required:true
    },
    descr:
    {
        type:String,
        required:true
    },
    loc:
    {
        type:String,
        required:true
    },
    roomFeatured:
    {
        type:String,
        default:"Available"
    },
    // roomType:
    // {
    //   type:String,
    //   required:true
    // },
    roomPhoto:
    {
        type:String

    }
  });

  /*
    For every Schema you create(Create a schema per collection), you must also create a model object. 
    The model will allow you to perform CRUD operations on a given collection!!! 
  */

 const roomModel = mongoose.model('created room', roomSchema);

 module.exports = roomModel;