const express = require("express")
const app = express()
/* STARTING THE SERVER */

app.use(express.json())
//Stiching the route
require("./routes/ideas.routes")(app)

app.listen(8000,()=>{
    console.log("Server Started on port no",8000)
})


