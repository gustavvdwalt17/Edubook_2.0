
import PostInfo from "../Models/postInfo.js"
export const createPost = async (req,res)=>{
const {number,title,faculty,campus,img,price,id} = req.body
try{
   
const newPost = new PostInfo({number,
    title,faculty,campus,price,img,id
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
    
 
 const findUserdata = await PostInfo.find({faculty:type})

return res.status(201).json({data:findUserdata})
    }catch(err){
        return res.status(403).json({message:err.message})
    }
}

export const deletePost = async (req,res)=>{
    const { id }=req.params
   try{
    const deleted = await PostInfo.deleteOne({_id:id})
return res.status(201).json({data:deleted})  
}catch(err){
    return res.status(403).json({message:err.message})
}
}
export const updatePost = async (req,res)=>{
    const { id }=req.params
    const { number,title,faculty,campus,img,price }=req.body
   try{
    const updatedPost= {number,title,faculty,campus,img,price,_id:id}
    await PostInfo.findByIdAndUpdate(id,updatedPost,{new:true})
 return res.status(201).json({updatePost})  

}catch(err){
    return res.status(403).json({message:err.message})
}
}

export const getListingbySearch = async (req,res)=>{

    const { searching } = req.params

    try{
const title = new RegExp(searching,"i")
const info= await PostInfo.find({title:title})
// console.log(data)  
return res.status(201).json({data:info})

    }catch(err){
        return res.status(403).json({message:err.message})
    }
}