import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import authRoutes from './routes/auth.js'
const app = express()
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())
app.use('/auth',authRoutes)
const DB_CONNECTION = 'mongodb+srv://gustav123:gustav123@cluster0.ieonjgh.mongodb.net/?retryWrites=true&w=majority'
const PORT= 5000
mongoose.connect(DB_CONNECTION,{useNewUrlParser : true,useUnifiedTopology:true})
.then(()=>app.listen(5000,()=>console.log(`Listening on port ${PORT}`))).catch((err)=>console.error(err))