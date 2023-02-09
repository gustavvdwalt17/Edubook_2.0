import express from 'express'
const router=express.Router()
// import { upload } from '../index.js'
import  {createPost}  from '../controllers/posts.js'
import  {fetchListing}  from '../controllers/posts.js'
import { deletePost } from '../controllers/posts.js'
import auth from '../middleware/verify.js'
router.post('/create',auth,createPost)
router.delete('/delete/:id',auth,deletePost)
// router.get('/:type',fetchListing)
router.get('/:type',fetchListing)


export default router