const express = require('express')
const router = express.Router();



//home route
router.get("/", (req, res) => {

    console.log(process.env.SEND_GRID_API_KEY);
    res.render("general/index", {
      title: "Home",
      headingInfo: "Home",
      randomContent: "Home"
    });
  
});

//contact-us route
router.get("/contact-us", (req, res) => {
    res.render("general/contact-us", {
      title: "Contact Us",
      headingInfo: "Contact Us",
      randomContent: "Contact Us Page"
    });
  
});

//process contact us form for when user submits form
router.post("/contact-us",(req,res)=>{
    
    const {firstName,lastName,email,message} = req.body;

    
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SEND_GRID_API_KEY);
    const msg = {
        to: 'kh.maftu@gmail.com',
        from: `${email}`,
        subject: 'Conteact Us Form Submit',
        html:
         `Visitor's Full Name ${firstName} ${lastName} <br>
         Visitor's Email Address ${email} <br>
         Visitor's message : ${message} <br>
         `,
    };

    //Asynchornous operation
    sgMail.send(msg)
    .then(()=>{
        res.redirect("/");
    })
    .catch(err=>{
        console.log(`Error ${err}`);
    });  

    
});


module.exports = router;