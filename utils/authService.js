const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtSecretKey = process.env.JWT_SECRET_KEY;

const generateToken = (user) => {
    try {
        const payload = {
            userId: user.id,
            email: user.email
        }
        const options = { expiresIn: '1d' };
        const token = jwt.sign(payload, jwtSecretKey, options);
        return token;
    } catch (error) {
        return `Error : ${error}`
    }
};

const verifyToken = (token) => {
    try {
        const verifiedToken = jwt.verify(token, jwtSecretKey);
        return verifiedToken
    } catch (error) {
        return null;
    }
}

module.exports = { generateToken, verifyToken }