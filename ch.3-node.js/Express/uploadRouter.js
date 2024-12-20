const express = require('express');
const router = express.Router();
// thid middleware
const multer = require('multer');

// getting ext 
const path = require('path');

// custom storage using multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        const name = Date.now();
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + name + ext);
    }
})

const upload = multer({
    // where file saved
    // dest: 'uploads/',

    // or use custom storage
    storage: storage,

    // And we can filter the Require data
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        if (ext != '.jpg'){
            return cb(new Error('Invalid file type'))
        }
        cb(null, true);
    },

    // file size
    limits: {
        fileSize: 1024 * 1024 * 5 //5m
    },

});


router.post("/upload/photo", upload.single('photo'), async (req, res, next) => {
    res.status(200).json({
        success: true
    });
});

module.exports = router;