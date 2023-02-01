import mongoose from "mongoose";


const postSchema = mongoose.Schema({
    title:String,
    img:{
        data:Buffer,
        contentType:String,
    },
    price:String,
    number:String,
    faculty:String,
    campus:String,

})

var PostInfo = mongoose.model('PostInfo',postSchema)
export default PostInfo