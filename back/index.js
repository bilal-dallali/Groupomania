// ON importe le paquet express
const express = require("express")

// ON crée une application express
const app = express()

const db = require("./config/db")

// routes utilisateur
const userRoute = require("./routes/User")
app.use("/api/user", userRoute)


// server
app.listen(3001, (req, res) => {
    console.log("Server running...")
})