const express = require('express');
require('dotenv').config();
const routes = require('./routes');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./models/database');
const models = require('./models')

const port = process.env.PORT || 5000;
const app = express();

app.use(morgan('dev')); // use morgan only for development mode
app.use(cors()); // use cors to make requests not dungeons

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse JSON requests

app.use('/', routes)

// page not found error
app.use((req, res, next) => {
    const err = new Error('notfound');
    err.status = 404;
    next(err);
})
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message
        }
    })
})

db.sync().then(()=>{
    app.listen(port, () => {
        console.log('listening on port ' + port);
    })
})