const mysql = require("mysql2")
require("dotenv").config("../.env")

const db = mysql.createConnection({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

db.connect((err) =>{
    if(err) {
        console.log(err, "MYSQL FAILED TO CONNECT")
    } else {
        console.log("MYSQL CONNECTED !!!!")
    }
})

module.exports = db