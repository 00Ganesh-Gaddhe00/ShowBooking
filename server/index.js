const express = require("express")
require("./dbConfig.js");
require('dotenv').config()



//routes
const UserRoutes = require("./routes/userRoutes.js")

const app = express();
const port = 5000

app.use(express.json())

app.use("/api/users", UserRoutes)





app.listen(port, ()=>{
    console.log("server is running")
})
