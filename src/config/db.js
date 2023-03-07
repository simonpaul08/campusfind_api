const mongoose = require('mongoose')
require('dotenv').config()
const MongoURI = process.env.MONGO_URI

const connectToMongo = async () => {
    try {
        const connect = await mongoose.connect(MongoURI)
        console.log(connect.connection.host)
    }catch(e){
        console.log(e)
    }
}

module.exports = connectToMongo