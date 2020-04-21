const express = require('express')
const router = express.Router();

const roomModel = require("../models/admin");
const path = require("path");
const isAuthenticated = require("../middleware/auth");
const dashBoardLoader = require("../middleware/authorization");


router.get("/add-room",isAuthenticated,(req,res)=>
{
    res.render("roomz/createRoom");
});


router.post("/add-room",isAuthenticated,(req,res)=>
{
        const newRoom = {
            titl : req.body.titl,
            prc : req.body.prc,
            descr : req.body.descr,
            loc : req.body.loc,
            roomFeatured : req.body.roomFeatured
            
        }

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

                res.redirect(`/roomz/roomsList`)
 
            })

         
     })

    })
     .catch(err=>console.log(`Error:${err}`));
});


router.get("/roomsList",isAuthenticated,(req,res)=>
{
    //pull from the database , get the results that was returned and then inject that results into
    //the roomDashboard

    roomModel.find()
    .then((rooms)=>{

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



        res.render("roomz/roomDashb",{
           data : filteredRoom
        });

    })
    .catch(err=>console.log(`Error happened when pulling from the database :${err}`));

    
  
});

router.get("/edit/:id",(req,res)=>{

    roomModel.findById(req.params.id)
    .then((room)=>{

        const {_id,titl,prc,descr,loc} = room;
        res.render("roomz/editRoom",{
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
        roomFeatured : req.body.roomFeatured,
       
    }

    roomModel.updateOne({_id:req.params.id},room)
    .then(()=>{
        res.redirect("/roomz/roomsList");
    })
    .catch(err=>console.log(`Error happened when updating data from the database :${err}`));


});

router.delete("/delete/:id",(req,res)=>{
    
    taskModel.deleteOne({_id:req.params.id})
    .then(()=>{
        res.redirect("/roomz/roomsList");
    })
    .catch(err=>console.log(`Error happened when updating data from the database :${err}`));

});





router.get("/allRooms",(req,res)=>{

    roomModel.find()
    .then((rooms)=>{

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

        res.render("roomz/allRooms",{
            title: "Room Listing",
            description : "Room Listing Page",
            data : filteredRoom
        });

    })
    .catch(err=>console.log(`Error :${err}`));

    
});



router.post("/search",(req,res)=>
{
    roomModel.find({loc : req.body.location})
    .then((rooms)=>{

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

        res.render("roomz/allRooms",{
            title: "Search the Rooms",
            description : "Room Listing Page",
            data : filteredRoom
        });

    })
    .catch(err=>console.log(`Error :${err}`));
    
});

// router.post("/add-room",(req,res)=>
// {
// allRoomModel.find({featuredRoom : })
//     .then((rooms)=>{
//         const filteredRoom = rooms.map((room)=>{
//             return {
//                 id: room._id,
//                 titl:room.titl,
//                 prc:room.prc,
//                 descr:room.descr,
//                 loc:room.loc,
//                 roomFeatured:room.roomFeatured,
//                 roomPhoto: room.roomPhoto
//             }
//         })
//         res.render("index",{
//             title: "Home",
//             headingInfo : "Home Page",
//             featured: filteredRoom
//         });

//     });
module.exports = router;