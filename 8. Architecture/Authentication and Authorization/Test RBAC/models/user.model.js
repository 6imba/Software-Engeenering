const mongoose = require('mongoose')
const bcrypt = require("bcrypt");

// Blueprint of Mongoose Schema:
const UserSChema =new mongoose.Schema({
    'email': {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    'password': {
        type: String,
        required: true
    }
})

UserSChema.pre('save', async function(next){
    try {
        if(this.isNew){
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(this.password, salt)
            this.password = hashedPassword;
        }
        next()
    } catch (error) {
        next(error)
    }
})

// Model Class using Mongoose Schema:
const User = mongoose.model('user', UserSChema)

// Export User model:
module.exports = User