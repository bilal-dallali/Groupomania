const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")
const port = 3001
const app = express()

app.use(cors())
app.use(express.json())
// Routes
app.post("/api/auth/signup", (req, res) => {
    console.log("signup request: ", req.body)
    res.send("signup")
})

app.get("/", (req, res) => res.send("Hello world !"))
app.listen(port, () => console.log("listening on port " + port))