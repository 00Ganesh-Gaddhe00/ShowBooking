
const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://lakshmiganesh016:MviJx0geII3UYDi0@cluster0.9xyom7h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("MongoDB Connected")
})
.catch((err)=>{
    console.log(err)
})