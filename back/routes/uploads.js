const express = require("express")
const multer = require("multer")
const path = require("path")
const app = express.Router()

const db = require("../config/db")

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/webp': 'webp'
  };
  

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./../front/images/wall")
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(" ").join("_")
        const extension = MIME_TYPES[file.mimetype]
        callback(null, name + Date.now() + '.' + extension)
    }
})

const upload = multer({storage})

app.post("/posts", upload.single("file"), function(req, res) {
    const { title, description, author, token, authorpicture } = req.body
    const file = "images/wall/" + req.file.filename

    db.query(
        `INSERT INTO Uploads (title, description, author, token, file, authorpicture) VALUES (?, ?, ?, ?, ?, ?);`,
        [title, description, author, token, file, authorpicture],
        (err, results) => {
            if(err) {
                res.status(400).json(err)
            }
            if(!author && !token) {
                res.status(400)
            }
            else {
                res.status(200).json(results)
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
    const comment = req.body.comment
    const token = req.body.token

    db.query(
        "INSERT INTO Comments (author, comment, token) VALUES (?, ?, ?);",
        [author, comment, token],
        (err, result) => {
            if(err) {
                res.status(400).json(err)
            } else {
                res.status(200).json(result)
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

module.exports = app