const express = require("express")
const app = express()

const db = require("./config/db.js")

const userRoute = require("./routes/Users")
app.use("/user", userRoute)

app.listen(3001, (req, res) => {
    console.log("Server running...")
})