const express = require('express')
const router = express.Router();

// const infoModel = require("./models/featured-room");

//home route
// router.get("/", (req, res) => {

//     console.log(process.env.SEND_GRID_API_KEY);
//     res.render("general/index", {
//       title: "Home",
//       headingInfo: "Home",
//       randomContent: "Home"
//     //   featuredRoom: infoModel.getallFeaturedRooms()
//     });
  
// });

//contact-us route
router.get("/contact-us", (req, res) => {
    res.render("general/contact-us", {
      title: "Contact Us",
      headingInfo: "Contact Us",
      randomContent: "Contact Us Page"
    });
  
});

//process contact us form for when user submits form
// router.post("/contact-us",(req,res)=>{
    
//     const {firstName,lastName,email,message} = req.body;

    
//     const sgMail = require('@sendgrid/mail');
//     sgMail.setApiKey(process.env.SEND_GRID_API_KEY);
//     const msg = {
//         to: 'kh.maftu@gmail.com',
//         from: `${email}`,
//         subject: 'Conteact Us Form Submit',
//         html:
//          `Visitor's Full Name ${firstName} ${lastName} <br>
//          Visitor's Email Address ${email} <br>
//          Visitor's message : ${message} <br>
//          `,
//     };

//     // Asynchornous operation
//     // sgMail.send(msg)
//     // .then(()=>{
//     //     res.redirect("/");
//     // })
//     // .catch(err=>{
//     //     console.log(`Error ${err}`);
//     // });  

//       const accountSid = 'ACe443f135d14d2cef886b2094dd793c40';
//       const authToken = 'bd9005811c66cf751c0dce39c3818650';
//       const client = require('twilio')(accountSid, authToken);
      
//       client.messages
//         .create({
//            body: `${req.body.firstName} ${req.body.lastName} \nWelcome`,
//            from: '+14147518445',
//            to: `${req.body.phoneNo}`
//          })
//         .then(message => {
//           console.log(message.sid);
//           res.render("/");
//         })
//         .catch((err)=>{
//             console.log(`Error ${err}`);
//         })

    
// });





// router.get("/user-registration", (req, res) => {

//     res.render("general/user-registration", {
//       title: "User Registration",
//       headingInfo: "User Registration Page"
//     });
  
//   });
  
//   router.get("/sign-in", (req, res) => {
  
//     res.render("general/sign-in");
  
//   });
  
//   router.get("/sign-up", (req, res) => {
  
//     res.render("general/sign-up");
  
//   });
  
//   router.post("/sign-up", (req, res) => {
  
//     const errors = {};
  
//     if (req.body.firstName == "") {
//       console.log('has error')
//       errors.firstName = "Sorry, you must enter first name";
  
//     }
  
//     if (req.body.lastName == "") {
//       errors.lastName = "Sorry, you must enter last name";
  
//     }
  
//     // if (req.body.birthDate.value == undefined) {
//     //   errors.birthDate = "Sorry, you must enter date of birth";
  
//     // }
  
//     if (req.body.email == "") {
//       errors.email = "Sorry, you must enter email address";
  
//     }
  
//     if (req.body.phoneNo == "") {
//       errors.email = "Sorry, you must enter phone number";
  
//     }
  
//     if (req.body.password == "*") {
//       errors.password = "Do not enter symbols";
  
//     }
  
//     if (req.body.password.length < "8") {
//       errors.password = "Please, enter al least 10 characters";
  
//     }
  
//     if (req.body.password == "") {
//       errors.password = "Sorry, you must enter password";
  
//     }
  
  
//     if (errors.firstName || errors.lastName || errors.birthDate || errors.email || errors.phoneNo || errors.password) {
//       res.render("sign-up", {
//         inputs: errors
//       })
//     }
  
//     // else
//     // {

//     //     // const {firstName,lastName,email} = req.body;

    
//     //     // const sgMail = require('@sendgrid/mail');
//     //     // sgMail.setApiKey(process.env.SEND_GRID_API_KEY);
//     //     // const msg = {
//     //     // to: 'kh.maftu@gmail.com',
//     //     // from: `${req.body.email}`,
//     //     // subject: 'SendGrid',
//     //     // text: 'Welcome',
//     //     // html:
//     //     //  `Visitor's Full Name ${req.body.firstName} ${req.body.lastName} <br>
//     //     //   Visitor's Email Address ${req.body.email} <br>`,
//     //     // },
          
//     //   const accountSid = 'ACe443f135d14d2cef886b2094dd793c40';
//     //   const authToken = 'bd9005811c66cf751c0dce39c3818650';
//     //   const client = require('twilio')(accountSid, authToken);
      
//     //   client.messages
//     //     .create({
//     //        body: `${req.body.firstName} ${req.body.lastName} Message :${req.body.birthDate}`,
//     //        from: '+14147518445',
//     //        to: `${req.body.phoneNo}`
//     //      })
//     //     .then(message => {
//     //       console.log(message.sid);
//     //       res.render("/");
//     //     })
//     //     .catch((err)=>{
//     //         console.log(`Error ${err}`);
//     //     })
  
//     // }
  
//   });
  
//   router.post("/sign-in", (req, res) => {
  
//     const errors = {};
  
//     if (req.body.eMail == "") {
//       console.log('has error')
//       errors.eMail = "Please, enter email address";
  
//     }
  
//     if (req.body.passw == "") {
//       errors.passw = "Please, enter password";
  
//     }
  
  
//     if (errors.eMail || errors.passw) {
//       res.render("sign-in", {
//         signin: errors
//       })
//     }
//   });


module.exports = router;