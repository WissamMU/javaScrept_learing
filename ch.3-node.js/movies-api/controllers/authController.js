const User = require('../models/user');
const jwtHelpers = require('../JWT/JWTHelpers');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
    // taking data from request body
    const { name, email, password } = req.body;
    // creating a new user
    const user = User({
        name,
        email,
        password: bcrypt.hashSync(password, 9)// password getting encrypted with bcrypt
    })
    try {
        // save
        await user.save();
        res.json({
            success: true,
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    // check if user password
    if (user && bcrypt.compareSync(password, user.password)) {
        res.json({
            success: true,
            data: {
                id: user.id,
                name: user.name,
                accesseToken: jwtHelpers.sign({ sub: user.id })
            }
        });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};

exports.me = async (req, res) => {
    const user = await User.findById(req.userId)
    res.json({
        success: true,
        data: {
            id: user.id,
            name: user.name,
            email: user.email
        }
    })
}