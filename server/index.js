const express = require("express")
require("./dbConfig.js");
require('dotenv').config()
// const cors = require("cors");




//routes
const UserRoutes = require("./routes/userRoutes.js")
const TheatreRoutes = require('./routes/theatreRoutes.js')
const movieRoutes = require('./routes/movieRoutes')
const showRoutes = require('./routes/showRoutes')



const app = express();
const port = 5000


// app.use(cors())

app.use(express.json())

app.use("/api/users", UserRoutes)
app.use("/api/theatres", TheatreRoutes)
app.use('/api/movies' , movieRoutes )
app.use('/api/shows' , showRoutes)





app.listen(port, ()=>{
    console.log("server is running")
})
