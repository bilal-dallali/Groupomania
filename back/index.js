const express = require("express")
const db = require("./config/db")
//const mysql = require("mysql2")
//const user = require("./controllers/users.js")
const cors = require("cors")
const port = 3001
const bcrypt = require("bcrypt")
const { response } = require("express")
const saltRounds = 10
const app = express()

app.use(cors())
app.use(express.json())
// Routes
app.post("/api/auth/signup", (req, res) => {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err)
        }
        db.query(
            "INSERT INTO Users (username, email, password) VALUES ('Florian', 'florian@gmail.com', 'samsung');",
            [username, email, hash],
            (err, results) => {
                console.log(err)
                //res.send(results)
                //res.send("signup")
                console.log("signup request: ", req.body)
            }
        )
    })
    
})

app.post("/login", (req, res) => {
    const email = req.body.email
    const password = req.body.password

    db.query(
        "SELECT * FROM Users WHERE email = ?;",
        email,
        (err, result) => {
            if (err) {
                res.send({ err: err })
            }
            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if (response) {
                        res.send(result)
                    } else {
                        res.send({ message: "Invalid email or password"})
                    }
                })
            } else {
                res.send({ message: "This user does not exist"})
            }
        }
    )
})

app.listen(port, () => console.log("server running on port " + port))