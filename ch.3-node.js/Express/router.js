const express = require('express');
const router = express.Router();
const User = require("./models/user");
const authJWT = require('./utils/authJWT')

// router.get('/newPage', (req, res)=>{
//     res.send('new Pageee')
// })

// router.get('/login', (req, res)=>{
//     res.send('login get')
// })

// // you cant see post in browser i uesd postman for post request
// router.post('/login', (req, res)=>{
//     console.log(req.body) // to get body data in post request
//     res.send('login post')
// })



// jwt 
router.post("/login", async function (req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || user.password != password) {
        return res.status(401).json({
            massage: "Invalid",
        });
    }
    const accessToken = authJWT.sign({ sub: user.id })
    res.status(200).json({
        success: true,
        data: {
            id: user.id,
            name: user.name,
            accessToken
        },
    });
});

router.post('/register', async (req, res, next) => {
    const { name, email, password } = req.body;
    const user = User({
        name, email, password
    })
    try {
        await user.save();
    } catch (err) {
        return res.status(500).json({ message: 'something went worong' })
    }
    res.status(200).json({ success: true })
})

router.get("/user/info", authJWT.verify, async (req, res, next) => {
    const user = await User.findById(req.userId);
    res.status(200).json({
        message: "you can see information",
        data: {
            id: user.id,
            name: user.name,
            email: user.email,
        },
    });
});

module.exports = router;