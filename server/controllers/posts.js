
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

export const fetchListing = async (req, res)=>{
    const {type} =req.params
   
    try{
        console.log(type)
 const findUserdata = await PostInfo.find({faculty:type})
 console.log(findUserdata)
return res.status(201).json({data:findUserdata})
    }catch(err){
        return res.status(403).json({message:err.message})
    }
}