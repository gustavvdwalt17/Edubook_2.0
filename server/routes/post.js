import express from 'express'
const router=express.Router()
// import { upload } from '../index.js'
import  {createPost}  from '../controllers/posts.js'
import  {fetchListing}  from '../controllers/posts.js'
import { deletePost } from '../controllers/posts.js'
import { updatePost } from '../controllers/posts.js'
import { getListingbySearch } from '../controllers/posts.js'
import auth from '../middleware/verify.js'

router.post('/create',auth,createPost)
router.delete('/delete/:id',auth,deletePost)
// router.get('/:type',fetchListing)
router.get('/:type',fetchListing)
router.patch('/update/:id',updatePost)
router.get('/search/:searching',getListingbySearch)

export default router