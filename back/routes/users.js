const express = require("express")
const app = express.Router()
const bcrypt = require("bcrypt")
const saltRounds = 10
const jwt = require("jsonwebtoken")

const db = require("../config/db.js")

app.get("/login", (req, res) => {
    db.query("SELECT * FROM Users;", (err, result) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).json(result)
        }
    })
})

app.post("/signup", (req, res) => {
    const { username, email, password } = req.body

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if(err) {
            console.log(err, "Something went wrong")
        } else {
            console
        }
        db.query(
            "INSERT INTO Users (username, email, password) VALUES (?, ?, ?);",
            [username, email, hash],
            (err, result) => {
                if(err) {
                    res.status(400).json(err)
                    console.log(err)
                } else {
                    res.status(200).json(result)
                    console.log("req.body", req.body)
                }
            }
        )
    })
})

const verifyJWT = (req, res, next) => {
    const token = req.header("x-access-token")

    if(!token) {
        res.send("NEED A TOKEN !!!")
    } else {
        jwt.verify(token, "jwtSecret", (err, decoded) => {
            if(err) {
                res.json({ auth: false, message: "Authentification failed !!!"})
            } else {
                req.userId = decoded.id
                next()
            }
        })
    }
}

app.get("/userAuth", verifyJWT, (req, res) => {
    res.send("You are authentificated !!!!")
})

app.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user })
    } else {
        res.send({ loggedIn: false })
    }
})

app.post("/login", (req, res) => {
    const { email, password } = req.body

    db.query(
        "SELECT * FROM Users WHERE email = ?",
        email,
        (err, result) => {
            if(err) {
                res.send({ err: err })
            }
            if(result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if (response) {
                        const id = result[0].id
                        const token = jwt.sign({id}, "jwtSecret", {
                            expiresIn: 300,
                        })
                        req.session.user = result
                        res.json({ auth: true, token: token, result: result })
                    } else {
                        res.json({ auth: false, message: "Email or password invalid" })
                    }
                })
            }
            else {
                res.json({ auth: false, message: "this user does not exist" })
            }
        }
    )
})

app.put("/", (req, res) => {})

app.delete("/:id", (req, res) => {})

module.exports = app