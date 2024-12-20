const express = require('express');
const router = express.Router();

router.get('/articles', function (req, res ){
    res.send('aricles')
})

// using id for new pages
router.get('/articles/:id', function (req, res ){
    res.send('show aricles' + req.params.id) ;
})

router.post('/articles', function (req, res ){
    console.log(req.params.body) ;
    res.send('Create Aricles') ;
})
router.put('/articles', function (req, res ){
    console.log(req.params.body) ;
    res.send('Update Aricles') ;
})
router.delete('/articles', function (req, res ){
    console.log(req.params.body) ;
    res.send('Delete Aricles') ;
})
module.exports = router;