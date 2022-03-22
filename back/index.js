require("dotenv").config()

const express = require("express")
const port = process.env.PORT || 3000
const app = express()

// Middleware
app.use(express.json())

//app.use("/posts", require("./routes/postRoutes"))

app.listen(port, () => console.log(`Listening on port ${port}`))

console.log("port", port)

