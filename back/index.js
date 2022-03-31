const express = require("express")
const bodyParser = require("body-parser")
const userRoutes = require("./routes/user.routes")
require("dotenv").config({path: "./config/.env"})
require("./config/db")
const app = express()
const port = process.env.PORT

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Routes
app.use("/api/user", userRoutes)

// Server
app.listen(port, () => {
    console.log("server running on port " + port)
})