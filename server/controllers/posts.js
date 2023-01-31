
import postInfo from "../Models/postInfo"
export const createPost = async (req,res)=>{
const {number,title,faculty,campus,img,price} = req.body

const newPost = new postInfo({number,title,faculty,campus,img,price})
}