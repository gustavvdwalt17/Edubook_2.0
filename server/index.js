import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import authRoutes from './routes/auth.js'
import postRoutes from './routes/post.js'
import multer from 'multer'
import { createPost } from './controllers/posts.js'
// import postInfo from './Models/postInfo'
//Storage
// import index from './images/index.js'
const Storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'images')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname))
    }
})
const upload = multer({
   
    storage:Storage
})


const app = express()
import path from 'path'



app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())
app.post('/post/create',upload.single('img'),createPost)
app.use('/auth',authRoutes)
// app.use('/post',postRoutes)






const DB_CONNECTION = 'mongodb+srv://gustav123:gustav123@cluster0.ieonjgh.mongodb.net/?retryWrites=true&w=majority'
const PORT= 5000
mongoose.connect(DB_CONNECTION,{useNewUrlParser : true,useUnifiedTopology:true})
.then(()=>app.listen(5000,()=>console.log(`Listening on port ${PORT}`))).catch((err)=>console.error(err))

