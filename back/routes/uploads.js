const express = require("express")
const path = require("path")
const multer = require("multer")
const app = express.Router()

//const fileFilter = function(req, file, cb) {
//    const allowedTypes = ["image/jpeg", "image/png", "image/gif"]
//    file.size
//
//    if(!allowedTypes.includes(file.mimetype)) {
//        const error = new Error("Wrong file type")
//        error.code = "LIMIT_FILE_TYPES"
//        return cb(error, false)
//    }
//    cb(null, true)
//}

const db = require("../config/db")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./images")
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage})

app.post("/posts", (req, res) => {
    const { title, description, author, token } = req.body

    db.query(
        "INSERT INTO Uploads (title, description, author, token) VALUES (?, ?, ?, ?);",
        [title, description, author, token],
        (err, results) => {
            if(err) {
                res.status(400).json(err)
                console.log(err)
            }
            if(!author && !token) {
                console.log(err)
            }
            else {
                res.status(200).json(results)
                console.log("req.body", req.body)
            }
        }
    )
})

app.get("/posts", (req, res) => {
    db.query("SELECT * FROM Uploads;", (err, result) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).json(result)
        }
    })
})

//app.use(function(err, req, res, next) {
//    if(err.code === "LIMIT_FILE_TYPES") {
//        res.status(422).json({ error: "Only images are allowed"})
//    }
//})

module.exports = app