const mongoose = require('mongoose');
const MONGODB_URL = process.env.MONGODB_URL


const dbConnection = () => {
    mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('Mongodb connect!');
    }).catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
}
module.exports = dbConnection;