const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: [true, "please enter a username"]
    },
    email : {
        type: String,
        required: [true, "please enter an email"],
        unique: [true, "email already exists"]
    },
    password: {
        type: String,
        required: [true, "please enter a password"]
    }
},{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)