
import UserInfo from "../Models/userInfo.js";
import bcrypt from 'bcrypt'
const secret='secret'
import jwt from "jsonwebtoken";
export const signUp = async (req,res)=>{
    const {email,password,confirmpass,number,name,id}=req.body
    try{
     
        console.log('backend')
        const existingUser=await UserInfo.findOne({email})
        
        if (existingUser) return res.status(400).json({message:'User already exists'})
        
        if (password!== confirmpass) return res.status(400).json({message:'Passwords do not match'})
        
        const hashedPass= await bcrypt.hash(password,12)
       
        const result = await UserInfo.create({email,password:hashedPass,number,name,id})
        const user = {email:result.email,id_auto:result._id,id}
        const token = jwt.sign(user, secret,{expiresIn:"1h"})
            const oldUser=result
        res.status(201).json({oldUser,token})
    }catch(err){
         res.status(500).json({ message: err.message });
    }

}

export const signIn = async (req, res) => {
    const {email,password} = req.body
  
       try{
        
    const oldUser = await UserInfo.findOne({email})
   
    if (!oldUser) return res.status(404).json({message:'User Doesnt exist'})
  
    const passWordmatch = await bcrypt.compare(password,oldUser.password)
    
    if (!passWordmatch) return res.status(404).json({message:'Password doesnt match'})
      
    const user = {email:oldUser.email,id:oldUser._id}
        const token = jwt.sign(user, secret,{expiresIn:"1h"})
       
        res.status(201).json({oldUser,token})
    }

   
   catch(error){
         res.status(500).json({ message: error.message }); 
    }
}