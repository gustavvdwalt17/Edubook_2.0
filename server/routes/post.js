import express from 'express'
const router=express.Router()
// import { upload } from '../index.js'
import  {createPost}  from '../controllers/posts.js'


// router.post('/create',upload.single('img'),createPost)


export default router