import express from 'express'
const router=express.Router()

import  {createPost}  from '../controllers/posts.js'


router.post('/create',createPost)


export default router