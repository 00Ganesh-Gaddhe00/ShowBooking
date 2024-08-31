const express = require("express")
require("./dbConfig.js");
require('dotenv').config()
var cors = require('cors')



//routes
const UserRoutes = require("./routes/userRoutes.js")
const TheatreRoutes = require('./routes/theatreRoutes.js')
const movieRoutes = require('./routes/movieRoutes')
const showRoutes = require('./routes/showRoutes')
const bookingRoutes = require('./routes/bookingRoute.js')


const app = express();
const port = process.env.PORT || 5000


// app.use(cors())
app.use(cors())
app.use(express.json())
app.use(express.static('../client/build'))
app.use("/api/users", UserRoutes)
app.use("/api/theatres", TheatreRoutes)
app.use('/api/movies' , movieRoutes )
app.use('/api/shows' , showRoutes)
app.use('/api/bookings' , bookingRoutes )





app.listen(port, ()=>{
    console.log("server is running")
})
