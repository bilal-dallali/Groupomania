const express = require("express")
const path = require("path")
const mysql = require("mysql2")
const port = 3001
const app = express()
const dotenv = require("dotenv")

dotenv.config({path: "./.env"})

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

const publicDirectory = path.join(__dirname, "./public")
//console.log(__dirname)
app.use(express.static(publicDirectory))
app.set("view engine", "hbs")

db.connect((error) => {
    if (error) {
        console.log(error)
        console.log("MYSQL not connected !!!!!!!!!!!!!")
    } else {
        console.log("MYSQL connected...")
    }
})

app.get("/", (req, res) => {
    console.log("connected to the API")
})

app.listen(port, () => {
    console.log("server running on port " + port)
})