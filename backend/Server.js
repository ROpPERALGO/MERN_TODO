const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
require('dotenv').config()
const app=express()
const PORT=process.env.port || 5001
app.use(express.json())
app.use(cors())
// if password contain @ then chnage to %40 in {.env } file
// below process after creating mongodb cluster
const route=require('./routes/Todo_routes')
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Connect to MongoDB")
})
.catch((err)=>{
    console.log("Fail to Connect to MongoDB"+err)
})
app.listen(PORT,()=>{
    console.log("listening on "+PORT)
})
app.use(route)