const dashboardLoader = (req,res)=>{

    if(req.session.userData.type=="Admin") {

        res.render("roomz/adminDashboard");
    }

    else {
        res.render("user-reg/userDashboard")
    }

}

module.exports =dashboardLoader;