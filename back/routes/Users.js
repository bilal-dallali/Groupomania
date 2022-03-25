const express = require("express")
const router = express.Router()

const db = require("../config/db")

router.get("/register", (req, res) => {
    db.query(
        "INSERT INTO Users (username, password) VALUES ('?', '?');",
    (err, results) => {
        console.log(err)
        res.send(results)
        }
    )
})

module.exports = router