import mongoose from "mongoose";


const postSchema = mongoose.Schema({
    title:String,
    img:String,
    price:String,
    number:String,
    faculty:String,
    campus:String,

})

var postInfo = mongoose.model('PostInfo',postSchema)
export default postInfo