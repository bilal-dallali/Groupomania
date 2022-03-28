
const express = require("express")
const router = express.Router()
const cors = require("cors")
const db = require("../config/db")
const { application } = require("express")

router.post("/register", (req, res) => {
    //const username = req.body.username
    //const password = req.body.password
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    db.query(
        "INSERT INTO Users (username, email, password) VALUES ('bonjour', 'dallali-bilal@hotmail.fr', 'password');",
        [username, email, password],
        (err, results) => {
            console.log(err)
            res.send(results)
        }
    )
})

module.exports = router
