
import PostInfo from "../Models/postInfo.js"
export const createPost = async (req,res)=>{
const {number,title,faculty,campus,img,price} = req.body
try{
const newPost = new PostInfo({number,title,faculty,campus,price
// img:{
//  data:req.file.filename,
//  contentType:'image/png',   
// }
})



newPost.save()

return res.status(201).json(newPost)

}catch(err){
    return res.status(403).json({message:err.message})
}

}