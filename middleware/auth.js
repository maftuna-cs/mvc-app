const loggedIn = (req,res,next)=>{

    if(req.session.userData) {

        next();
    }

    else {
        res.redirect("/user-reg/login")
    }

}

module.exports =loggedIn;