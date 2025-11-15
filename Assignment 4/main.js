const express = require("express")
const mongoose = require("mongoose")
const PORT = 8500
const app = express()
const UserApiRouter= require("./routes/userRoutes")
app.use(express.json())
const cors = require("cors")
app.use(cors())


mongoose
.connect("mongodb://localhost:27017/Users")
.then(()=>console.log("Connected to mongoDB"))
.catch((err)=>console.error("There's an problem to connect MongoDB",err))


app.use("/user",UserApiRouter)

app.listen(PORT,()=>{
    console.log("Whoo! Server is Running")
})