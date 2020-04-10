const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userSchema = new Schema ({

    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    profilePic:{
        type:String
    },
    dateCreated:{
        type:Date,
        default:Date.now()
    },
    type:{
        type:String,
        default:"user"
    }

});

userSchema.pre("save",function(next)
{
    //salt random generated characters or strings
    bcrypt.genSalt(10)
    .then((salt)=>{

        bcrypt.hash(this.password,salt)
        .then((encryptPassword)=>{
            this.password = encryptPassword;
            next();
        })
        .catch(err=>console.log(`Error occured when use hash ${err}`));

    })
    .catch(err=>console.log(`Error occured when salting ${err}`));

})
const userModel = mongoose.model('user', userSchema);

module.exports = userModel;