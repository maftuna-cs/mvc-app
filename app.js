const express = require("express");//import the express package (installed)
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fileupload = require('express-fileupload');
const session = require('express-session');

//load the environment variable file
require('dotenv').config({path:"./config/keys.env"});

const infoModel = require("./models/featured-room");

const app = express(); //express app object

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false })); //parse app

app.engine('handlebars', exphbs());   //middleware
app.set('view engine', 'handlebars');

//load controllers
// const generalController = require("./controllers/general");
const roomsController = require("./controllers/room");
const userRoutes = require("./controllers/user");

app.use(fileupload());

app.use(session({
  secret: `${process.env.SECRET_KEY}`,
  resave: false,
  saveUninitialized: true
}))

app.use((req,res,next)=>{

  res.locals.user= req.session.userData;

  next();
})

//map each controller to the app object 
app.use("/rooms",roomsController);

app.use("/user-reg",userRoutes);




app.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
    headingInfo: "Home",
    randomContent: "Home",
    featuredRoom: infoModel.getallFeaturedRooms()
  });

});

app.get("/user-dashboard", (req,res) => {

  res.render("user-dashboard", {
      title:"Dashboard",
      headingInfo: "Dashboard",
      randomContent: "Dashboard"
     
  });

});

app.get("/user-registration", (req, res) => {

  res.render("user-registration", {
    title: "User Registration",
    headingInfo: "User Registration Page"
  });

});

app.get("/sign-in", (req, res) => {

  res.render("sign-in");

});

app.get("/sign-up", (req, res) => {

  res.render("sign-up");

});

app.post("/sign-up", (req, res) => {



  const errors = {};

  if (req.body.firstName == "") {
    console.log('has error')
    errors.firstName = "Sorry, you must enter first name";

  }

  if (req.body.lastName == "") {
    errors.lastName = "Sorry, you must enter last name";

  }

  if (req.body.birthDate == "") {
    errors.birthDate = "Sorry, you must enter date of birth";

  }

  if (req.body.email == "") {
    errors.email = "Sorry, you must enter email address";

  }

  if (req.body.password == "*") {
    errors.password = "Do not enter symbols";

  }

  if (req.body.password.length < "8") {
    errors.password = "Please, enter al least 10 characters";

  }

  if (req.body.password == "") {
    errors.password = "Sorry, you must enter password";

  }


  if (errors.firstName || errors.lastName || errors.birthDate || errors.email || errors.password) {
    res.render("sign-up", {
      inputs: errors
    })
  }

  else
    {

        // const {firstName,lastName,email} = req.body;
        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey(process.env.SEND_GRID_API_KEY);
        const accountSid = 'ACe443f135d14d2cef886b2094dd793c40';
        const authToken = 'bd9005811c66cf751c0dce39c3818650';
        const client = require('twilio')(accountSid, authToken);
        const msg = {
        to: 'kh.maftu@gmail.com',
        from: `${req.body.email}`,
        subject: 'SendGrid',
        text: 'Welcome',
        html:
         `Visitor's Full Name ${req.body.firstName} ${req.body.lastName} <br>
         `,
        };
        sgMail.send(msg)
        .then(message => {
          console.log(message.sid);
          res.redirect("user-dashboard");
        })
        .catch((err)=>{
            console.log(`Error ${err}`);
        }),

      
      client.messages
        .create({
           body: `${req.body.firstName} ${req.body.lastName} Message :${req.body.birthDate}`,
           from: '+14147518445',
           to: `${req.body.phoneNo}`
         })
        .then(message => {
          console.log(message.sid);
          res.render("user-dashboard");
        })
        .catch((err)=>{
            console.log(`Error ${err}`);
        })
  }             
  
});

// app.post("/sign-in", (req, res) => {

//   const errors = {};

//   if (req.body.eMail == "") {
//     console.log('has error')
//     errors.eMail = "Please, enter email address";

//   }

//   if (req.body.passw == "") {
//     errors.passw = "Please, enter password";

//   }


//   if (errors.eMail || errors.passw) {
//     res.render("sign-in", {
//       signin: errors
//     })
//   }
  
//   });
  
//   app.post("/sign-in", (req, res) => {
  
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


// });







mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
  console.log(`Connected to MongoDB DataBase`);

})
.catch(err=>console.log(`Error occured when connecting to database ${err}`));


const PORT = process.env.PORT;
app.listen(PORT , ()=>{

    console.log(`Web Server is up and running`);
})