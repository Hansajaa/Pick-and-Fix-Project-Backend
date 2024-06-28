const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    userName:String,
    contactNumber:String,
    email:String,
    address:String,
    password:String
})

const User = mongoose.model('user',userSchema);

module.exports = User;