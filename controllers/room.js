const express = require('express')
const router = express.Router();

//load productModele1
const productModel = require("../models/room-listing");

//show all rooms
router.get("/list",(req, res) => {
    
    res.render("rooms/room-listing", {
      title: "Room Listing",
      description: "Room Listing Page",
      products: productModel.getallRooms()
  
    });
 });

 //show add roomlist form
  router.get("/add",(req,res)=>{
  
    res.render("rooms/room-listingAdd", {
        title: "Room Listing Add Form",
        description: "Room Listing Add Form"
    });
});

//When the form is submitted 
router.post("/add",(req,res)=>{
  
      //res.render();
});

module.exports = router;