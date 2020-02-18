const express = require("express");
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');


const app = express();

//middleware
app.use(express.static('public'))

//bodyparser
app.use(bodyParser.urlencoded({ extended: false }))




//This tells Express to set or register Handlebars as its' Template/View Engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//set up routes
app.get("/",(req,res)=>{

    res.render("index",{
        title: "Home",
        headingInfo : "Home Page",
        randomContent: "BLAH BLAH BLHA"
    })
});

app.get("/contact-us",(req,res)=>{

    res.render("contactus",{
        title: "Contact Us",
        headingInfo : "Contact Us Page",

    });


});