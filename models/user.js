// Include libraries
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// profile_pic => String => urlof that
// Instead of timestamps
// createdAt:{
//     type:String,
//     default:moment().format("DD/MM/YYYY") + moment().format("hh:mm:ss")
// }

const userSchema = new Schema({
    userName:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true
    },
    userPassword:{
        type:String,
        required:true
    },
    profile_pic:{
        type:String,
        default:"empty-avatar.jpg"
    }
}, {
        timestamps : true
    }
);

// Create User Model
mongoose.model("userSchema",userSchema);

// export mongoose model
module.exports = mongoose.model("userSchema") 