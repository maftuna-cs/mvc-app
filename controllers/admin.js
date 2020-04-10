const express = require('express')
const router = express.Router();
const roomModel  = require("../models/admin");
const isAuthenticated = require("../middleware/auth");


//Route to direct use to Add Task form
router.get("/add-room",isAuthenticated,(req,res)=>
{
    res.render("admin/createRoom");
});

//Route to process user's request and data when the user submits the add task form
router.post("/add-room",isAuthenticated,(req,res)=>
{
        const newRoom = {
            title : req.body.titl,
            price : req.body.prc,
            description : req.body.descr,
            location : req.body.loc,
            roomFeatured : req.body.roomFeatured,
            
        }

             /*
        Rules for inserting into a MongoDB database USING MONGOOSE is to do the following :
        1. YOu have to create an instance of the model, you must pass data that you want inserted
         in the form of an object(object literal)
        2. From the instance, you call the save method
     */

     const room =  new roomModel(newRoom);
     room.save()
     .then(()=>{
         res.redirect("/admin/list")
     })
     .catch(err=>console.log(`Error:${err}`));
});

////Route to fetch all tasks
router.get("/list",isAuthenticated,(req,res)=>
{
    //pull from the database , get the results that was returned and then inject that results into
    //the taskDashboard

    taskModel.find()
    .then((tasks)=>{


        //Filter out the information that you want from the array of documents that was returned into
        //a new array

        //Array 300 documents meaning that the array has 300 elements 

  
        const filteredTask =   tasks.map(task=>{

                return {

                    id: task._id,
                    title:task.title,
                    description:task.description,
                    dueDate :task.dueDate,
                    status : task.status,
                    priority : task.priority
                }
        });



        res.render("Task/taskDashboard",{
           data : filteredTask
        });

    })
    .catch(err=>console.log(`Error happened when pulling from the database :${err}`));

    
  
});

//Route to direct user to the task profile page
router.get("/description",isAuthenticated,(req,res)=>{

    

})


router.get("/edit/:id",(req,res)=>{

    taskModel.findById(req.params.id)
    .then((task)=>{

        const {_id,title,description,dueDate,priority,status} = task;
        res.render("Task/taskEditForm",{
            _id,
            title,
            description,
            dueDate,
            priority,
            status  
        })

    })
    .catch(err=>console.log(`Error happened when pulling from the database :${err}`));


})



router.put("/update/:id",(req,res)=>{

    const task =
    {
        title:req.body.title,
        description:req.body.description,
        dueDate:req.body.dueDate,
        status:req.body.status,
        priority:req.body.priority
    }

    taskModel.updateOne({_id:req.params.id},task)
    .then(()=>{
        res.redirect("/task/list");
    })
    .catch(err=>console.log(`Error happened when updating data from the database :${err}`));


});


router.delete("/delete/:id",(req,res)=>{
    
    taskModel.deleteOne({_id:req.params.id})
    .then(()=>{
        res.redirect("/task/list");
    })
    .catch(err=>console.log(`Error happened when updating data from the database :${err}`));

});

