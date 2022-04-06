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

app.post("/", (req, res) => {
    const { title, description } = req.body

    db.query(
        "INSERT INTO Uploads (title, description) VALUES (?, ?);",
        [title, description],
        (err, results) => {
            console.log(err)
            res.send(results)
        }
    )
})

//app.use(function(err, req, res, next) {
//    if(err.code === "LIMIT_FILE_TYPES") {
//        res.status(422).json({ error: "Only images are allowed"})
//    }
//})

module.exports = app