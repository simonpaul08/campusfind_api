

const e = require('express')
const mongoose = require('mongoose')

const connectToMongo = async () => {
    await mongoose.connect('mongodb+srv://campusFind:pawan@cluster0.vg9d6d6.mongodb.net/?retryWrites=true&w=majority', () => {
        console.log('connected')
    })
}

module.exports = connectToMongo