const express = require("express")
require("./dbConfig.js");
require('dotenv').config()
// const cors = require("cors");




//routes
const UserRoutes = require("./routes/userRoutes.js")
const TheatreRoutes = require('./routes/theatreRoutes.js')

const app = express();
const port = 5000


// app.use(cors())

app.use(express.json())

app.use("/api/users", UserRoutes)
app.use("/api/theatres", TheatreRoutes)






app.listen(port, ()=>{
    console.log("server is running")
})
