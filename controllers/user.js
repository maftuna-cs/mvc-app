const express = require('express')
const router = express.Router();
const userModel = require("../models/user");
const bcrypt = require("bcryptjs");
const isAuthenticated = require("../middleware/auth");
const dashBoardLoader = require("../middleware/authorization");
const roomModel  = require("../models/admin");
const path = require("path");



//Route to direct use to Registration form
router.get("/register",(req,res)=>
{
    res.render("user-reg/register");
});

//Route to process user's request and data when user submits registration form
router.post("/register",(req,res)=>
{ 
    const newUser = {
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password
    }

    const user = new userModel(newUser);
    user.save()
    .then(()=>{
        res.redirect("/user-reg/login")
    })
    .catch(err=>console.log(`Error while inserting into data ${err}`));

 
});

//Route to direct user to the login form
router.get("/login",(req,res)=>
{
    res.render("user-reg/login");
});

//Route to process user's request and data when user submits login form
router.post("/login",(req,res)=>
{

    userModel.findOne({email:req.body.email})
    .then(user=>{

        const errors= [];

        if(user==null) {

            errors.push("Sorry, your email and/or password incorrect")
            res.render("user-reg/login",{
                errors
            })

        }

        else {

            bcrypt.compare(req.body.password, user.password)
            .then(isMatched=>{
                
                if(isMatched){
                    
                    req.session.userData = user;
                    res.redirect("/user-reg/profile");
                }

                else {

                    errors.push("Sorry, your email and/or password incorrect")
                    res.render("user-reg/login",{
                        errors
                    })
                }
            })
            .catch(err=>console.log(`Error ${err}`));

        }
    })
    .catch(err=>console.log(`Error ${err}`));

    
});








router.get("/add-room",isAuthenticated,(req,res)=>
{
    res.render("user-reg/createRoom");
});

//Route to process user's request and data when the user submits the add task form
router.post("/add-room",isAuthenticated,(req,res)=>
{
        const newRoom = {
            titl : req.body.titl,
            prc : req.body.prc,
            descr : req.body.descr,
            loc : req.body.loc,
            roomFeatured : req.body.roomFeatured
            
        }

             /*
        Rules for inserting into a MongoDB database USING MONGOOSE is to do the following :
        1. YOu have to create an instance of the model, you must pass data that you want inserted
         in the form of an object(object literal)
        2. From the instance, you call the save method
     */

     const room =  new roomModel(newRoom);
     room.save()
     .then((room)=>{

        req.files.roomPhoto.name = `roomPhoto_${room._id}${path.parse(req.files.roomPhoto.name).ext}`;

        req.files.roomPhoto.mv(`public/uploads/${req.files.roomPhoto.name}`)
        .then(()=>{

            roomModel.updateOne({_id:room._id},{
                roomPhoto: req.files.roomPhoto.name
            })
            .then(()=>{

                res.redirect(`/user-reg/roomsList`)
 
            })

         
     })

    })
     .catch(err=>console.log(`Error:${err}`));
});


router.get("/roomsList",isAuthenticated,(req,res)=>
{
    //pull from the database , get the results that was returned and then inject that results into
    //the taskDashboard

    roomModel.find()
    .then((rooms)=>{


        //Filter out the information that you want from the array of documents that was returned into
        //a new array

        //Array 300 documents meaning that the array has 300 elements 

  
        const filteredRoom =   rooms.map(room=>{

                return {

                    id: room._id,
                    titl:room.titl,
                    prc:room.prc,
                    descr:room.descr,
                    loc:room.loc,
                    roomFeatured:room.roomFeatured,
                    roomPhoto: room.roomPhoto
                }
        });



        res.render("rooms/room-listing",{
           data : filteredRoom
        });

    })
    .catch(err=>console.log(`Error happened when pulling from the database :${err}`));

    
  
});

router.get("/edit/:id",(req,res)=>{

    roomModel.findById(req.params.id)
    .then((room)=>{

        const {_id,titl,prc,descr,loc} = room;
        res.render("user-reg/editRoom",{
            _id,
            titl,
            prc,
            descr,
            loc 
        })

    })
    .catch(err=>console.log(`Error happened when pulling from the database :${err}`));


})

router.put("/update/:id",(req,res)=>{

    const room =
    {
        titl : req.body.titl,
        prc : req.body.prc,
        descr : req.body.descr,
        loc : req.body.loc,
        roomFeatured : req.body.roomFeatured
    }

    roomModel.updateOne({_id:req.params.id},room)
    .then(()=>{
        res.redirect("/user-reg/roomsList");
    })
    .catch(err=>console.log(`Error happened when updating data from the database :${err}`));


});



// router.get("/profile",(req,res)=>{

//     userModel.find()
//     .then((userData)=>{

//         const filteredUser = userData.map(result=>{

//             return {

//                 firstName: result.firstName,
//                 lastName: result.lastName

//             }
            
//         });


//         res.render("user-reg/userDashboard",{

//             data: filteredUser
           
//         });
    
// })
//     .catch(err=>console.log(`Error happened when pulling from the database: ${err}`));


    
// });

// router.get("/profile",isAuthenticated,(req,res)=> {

//     res.render("user-reg/userDashboard");
    
// })


// router.get("/profile",isAuthenticated,(req,res)=> {

//     res.render("user-reg/adminDashboard");
    
// })

router.get("/profile",isAuthenticated,dashBoardLoader);







router.get("/logout",(req,res)=>{
    req.session.destroy();
    res.redirect("/user-reg/login")

})


module.exports=router;