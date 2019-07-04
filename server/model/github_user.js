const mongoose = require('mongoose')
const Schema = mongoose.Schema
const db = require('../js/init.js')
const GithubUserSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true
    },
    avatar: {
        type: String,
        default: ''
    }
})


module.exports = db.model('githubUser', GithubUserSchema)