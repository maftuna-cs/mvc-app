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
    }

});

userSchema.pre("save",function()
{

})
const userModel = mongoose.model('user', userSchema);

module.exports = userModel;