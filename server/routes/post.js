import express from 'express'
const router=express.Router()
// import { upload } from '../index.js'
import  {createPost}  from '../controllers/posts.js'
import  {fetchListing}  from '../controllers/posts.js'

import auth from '../middleware/verify.js'
// router.post('/create',upload.single('img'),createPost)
// router.get('/:type',fetchListing)
router.get('/:type',auth,fetchListing)


export default router