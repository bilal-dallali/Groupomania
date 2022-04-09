const express = require("express")
require("dotenv").config("/.env")
const cors = require("cors")
const bodyparser = require("body-parser")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const port = process.env.PORT

const app = express()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT"],
    credentials: true
}))
app.use(cookieParser())
app.use(bodyparser.urlencoded({ extended: true }))

app.use(session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24,
    }
}))

const usersRoute = require("./routes/users.js")
app.use("/users", usersRoute)

const uploadsRoute = require("./routes/uploads")
app.use("/uploads", uploadsRoute)


app.listen(port, () => console.log("server running on port " + port))
