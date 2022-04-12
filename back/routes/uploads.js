const express = require("express")
const multer = require("multer")
const path = require("path")
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

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/webp': 'webp'
  };
  

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./images")
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(" ").join("_")
        const extension = MIME_TYPES[file.mimetype]
        callback(null, name + Date.now() + '.' + extension)
    }
})
//console.log(storage.getFilename)

const upload = multer({storage})
//console.log(upload)

app.post("/posts", upload.single("file"), function(req, res) {
    const { title, description, author, token, file } = req.body
    const filename = req.file.filename
    //console.log("filename :", filename.filename)
    console.log("filename", filename)

    db.query(
        `INSERT INTO Uploads (title, description, author, token, file) VALUES (?, ?, ?, ?, '${filename}');`,
        [title, description, author, token, file],
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

app.post("/comments", (req, res) => {
    const author = req.body.author
    //const id = req.body.id
    const comment = req.body.comment
    const token = req.body.token

    //db.query(
    //    "SELECT idUploads FROM Uploads;",
    //    (err, result) => {
    //        if(err) {
    //            res.status(400).json(err)
    //        } else {
    //            res.status(200)
    //        }
    //    }
    //)
    db.query(
        "INSERT INTO Comments (author, comment, token) VALUES (?, ?, ?);",
        [author, comment, token],
        (err, result) => {
            if(err) {
                res.status(400).json(err)
            } else {
                res.status(200).json(result)
                console.log(req.body)
            }
        }
    )
})

app.get("/comments", (req, res) => {
    db.query("SELECT * FROM Comments;", (err, result) => {
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