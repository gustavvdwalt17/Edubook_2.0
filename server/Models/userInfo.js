import mongoose from "mongoose";


const postSchema = mongoose.Schema({
    name:{type:String},
    email:{type:String,required:true},
    number:{type:String,required:true},
    password:{type:String,required:true},
    id:{type:String,required:true},

})

var UserInfo=mongoose.model("UserInfo",postSchema)
export default UserInfo