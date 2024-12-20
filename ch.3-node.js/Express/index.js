const express = require('express')
const mongoose = require('mongoose');
const authRouter = require('./router')
const articlesRouter = require('./articleRouter')
const uploadRouter = require('./uploadRouter')
const app = express()
const port = 3000

// middleware to parse JSON request bodies
app.use(express.json());

app.use((req, res, next) => {
    console.log(`Request made at ${new Date()}`)
    // return res.status(403).send('forbidden')
    next()
})


// using get for page
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// using get for new page
// Just in case you have a couple of pages only
// app.get('/newPage', (req, res) => {
//   res.send('New Page!')
// })

// routing pages
app.use('/api', authRouter)
app.use('/api', articlesRouter)
app.use('/api', uploadRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

mongoose.connect('mongodb://localhost:27017/express')