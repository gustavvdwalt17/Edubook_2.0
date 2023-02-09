import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import authRoutes from './routes/auth.js'
import postRoutes from './routes/post.js'
import multer from 'multer'
import { Server } from 'socket.io'
import { createPost } from './controllers/posts.js'
import http from 'http'

// import postInfo from './Models/postInfo'
//Storage
// import index from './images/index.js'
const app = express()
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
   
    console.log(data)
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});
// const server='http://localhost:5000'
// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//   },
// });

// io.on("connection",(socket)=>{
//     console.log(`User connected ${socket.id}`)
// })
// socket.on("disconnect",()=>{
//     console.log("User disconnected",socket.id)
// })

// //server maak n id dan as persoon op message click dan vat jy daai id en join room,sit id op listing en gebruik dit om room te join, send messgae na id van user en server stuur data terug na user met die id
//   socket.on("join_room", (data) => {
//     socket.join(data);
//     console.log(`User with ID: ${socket.id} joined room: ${data}`);
//   });
//   //   socket.on("send_message", (data) => {
//   //   socket.to(data.room).emit("receive_message", data);
//   // });
const Storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./images')
    },
    filename:(req,file,cb)=>{
      console.log('doing uplaod')
        cb(null,Date.now()+path.extname(file.originalname))
    }
})
const upload = multer({
   
    storage:Storage
})



import path from 'path'



app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())
// app.post('/post/create',upload.single('img'),createPost)
app.use('/auth',authRoutes)
app.use('/post',postRoutes)






const DB_CONNECTION = 'mongodb+srv://gustav123:gustav123@cluster0.ieonjgh.mongodb.net/?retryWrites=true&w=majority'
const PORT= 5000
mongoose.connect(DB_CONNECTION,{useNewUrlParser : true,useUnifiedTopology:true})
.then(()=>app.listen(5000,()=>console.log(`Listening on port ${PORT}`))).catch((err)=>console.error(err))

server.listen(3001, () => {
  console.log("SERVER RUNNING");
});