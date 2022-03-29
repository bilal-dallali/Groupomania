const User = require("../config/db")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

async function createUser(req, res) {
    try {
        const { username, email, password } = req.body
        const hashedPassword = await hashPassword(password)
        const user = new User({ email, password: hashedPassword})
        await user.save()
        res.status(201).send({ message: "user registered"})
    } catch (err) {
        res.status(409).send({ message: "User unregistered"})
    }
}

function hashPassword(password) {
    const saltRounds = 10
    return bcrypt.hash(password, saltRounds)
}

async function logUser(req, res) {
    try {
        const username = req.body.username
        const email = req.body.email
        const password = req.body.password
        const user = await user.findOne({ email: email })
  
        const isPasswordOK = await bcrypt.compare(password, user.password)
        if (!isPasswordOK) {
            res.status(403).send({ message: "Mot de passe incorrect" })
        }
        const token = createToken(email)
        res.status(200).send({ userId: user?.id, token: token })
        } catch (err) {
            console.error(err)
            res.status(500).send({ message: "Erreur interne" })
        }
  }