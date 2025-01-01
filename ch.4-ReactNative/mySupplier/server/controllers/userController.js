// npm i bcryptjs for password 
const bcryptjs = require('bcryptjs');
// importing modules to fill
const models = require('../models');
const jsonwebtoken = require('jsonwebtoken')

exports.register = async (req, res) => {
    // destructuring request body to get the required data
    const {name, email, password, userType, location, specialization, address, workingHours, phone} = req.body;

    // asynchronous expressions so we use try/catch
    try {
        // crypting password
        const hashPassword = await bcryptjs.hash(password, 10)
        // crating user 
        const user = await models.User.create({
            name,
            email,
            password: hashPassword,
            userType,
            latitude: location.latitude,
            longitude: location.longitude
        })
        // suppliers
        if (userType === 'Supplier') {
            const profile = await models.Profile.create({
                userId: user.id,
                specialization,
                address,
                workingHours,
                phone
            })
        }

        res.status(200).json({ message: 'تم انشاء الحساب' })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }


}

exports.login = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await models.User.findOne({where: {email}})

        if(!user) {
            return res.status(401).json({
                message: "البريد الإلكتروني أو كلمة المرور غير صحيحين"
            })
        }

        const authSuccess = await bcryptjs.compare(password, user.password)

        if(!authSuccess) { 
            return res.status(401).json({
                message: "البريد الإلكتروني أو كلمة المرور غير صحيحين"
            })
        }

        const token = jsonwebtoken.sign({id: user.id, name: user.name, email: user.email}, process.env.JWT_SECRET);

        res.status(200).json({accessToken:  token})
    } catch (e) {
        res.status(500).json({ message: "خطأ في الخادم" });
    }
}

exports.me = (req, res) => {
    const user = req.currentUser;
    res.json(user)
}

exports.getProfile = async (req, res) => {
    try {
        const result = await models.User.findOne({
            where: {id: req.currentUser.id},
            include: [{model: models.Profile, as: "profile"}],
            attributes: {exclude: ["password"]}
        })

        res.status(200).json(result)
    } catch (e) {
        res.status(500).json(e)
    }
}