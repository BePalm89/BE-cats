require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Connection to the DB was successfully")
    } catch (error) {
        console.log("Error during conneciton to the DB");
    }
}

module.exports = { connectDB };