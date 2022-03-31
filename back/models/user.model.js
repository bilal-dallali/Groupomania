const mysql = require("mysql2")
//const isEmail = require("validator")

const userSChema = {
    username: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
        unique: true,
        trimp: true
    },
    email: {
        type: String,
        required: true,
        validate: true,
        lowercase: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        max: 255,
        minLength: 8
    },
}