const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
const expiresIn = process.env.JWT_expiresIn;

exports.sign = (payload) => {
    return jwt.sign(payload, secret, { expiresIn })
}

exports.verify = (token) => {
    try {
        return jwt.verify(token, secret)
    } catch (err) {
        return false
    }
}