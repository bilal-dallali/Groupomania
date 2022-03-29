const express = require("express")
const db = require("./config/db")
const mysql = require("mysql2")
const user = require("./controllers/users.js")
const cors = require("cors")
const port = 3001
const app = express()

app.use(cors())
app.use(express.json())
// Routes
app.get("/api/auth/signup", (req, res) => {
    db.query(
        "INSERT INTO Users (username, email, password) VALUES ('François', 'françois@gmail.com', 'password');",
        (err, results) => {
            console.log(err)
            res.send(results)
            //res.send("signup")
            //console.log("signup request: ", req.body)
        }
    )
})

//app.get("/", (req, res) => res.send("Hello world !"))
app.listen(port, () => console.log("listening on port " + port))