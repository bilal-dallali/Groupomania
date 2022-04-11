const express = require("express")
const app = express.Router()
const bcrypt = require("bcrypt")
const saltRounds = 10
const jwt = require("jsonwebtoken")

const db = require("../config/db.js")

app.post("/signup", (req, res) => {
    const { username, email, password } = req.body

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if(err) {
            console.log(err, "Something went wrong")
        } else {
            console.log("successfully registered")
        }
        db.query(
            "INSERT INTO Users (username, email, password, phone, job, website, github, linkedin) VALUES (?, ?, ?, '', '', '', '', '');",
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
    if (req.session.username) {
        res.send({ loggedIn: true, username: req.session.username })
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
                        req.session.username = result
                        res.json({ auth: true, token: token, email: email, result: result})
                        res.status(200)
                    } else {
                        res.json({ auth: false, message: "Email or password invalid" })
                        res.status(400)
                    }
                })
            }
            else {
                res.json({ auth: false, message: "this user does not exist" })
                res.status(400)
            }
        }
    )
})

app.get("/profile", (req, res) => {
    db.query("SELECT * FROM Users;", (err, result) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).json(result)
        }
    })
})

app.put("/edit-profile", (req, res) => {
    const {username, email, phone, job, website, github, linkedin, id } = req.body

    db.query(
        `UPDATE Users SET username = ?, email = ?, phone = ?, job = ?, website = ?, github = ?, linkedin = ? WHERE id = ${id};`,
        [username, email, phone, job, website, github, linkedin, id],
        (err, result) => {
            if(err) {
                res.status(400).json(err)
                console.log(err)
            } else {
                res.status(200).json({ result: result, username: username, email: email, phone: phone, job: job, website: website, github: github, linkedin: linkedin })
                console.log(req.body)
            }
        }
    )
})

app.delete("/:id", (req, res) => {})

module.exports = app