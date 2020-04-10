const dashboardLoader = (req,res)=>{

    if(req.session.userData.type=="Admin") {

        res.render("user-reg/adminDashboard");
    }

    else {
        res.render("user-reg/profile")
    }

}

module.exports =dashboardLoader;