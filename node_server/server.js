const express = require('express');

const app = express();

app.get('/',(req,res) => {
    res.sendFile('index.html' , {root: __dirname });
});

app.get('/user',(req,res) => res.json([
    {id:1 , name: 'wessam' , email:'wessam@javascript.com'},
    {id:1 , name: 'bat' , email:'bat@javascript.com'},
    {id:1 , name: 'silver' , email:'silver@javascript.com'},
]))

app.listen(3000,()=>console.log('server listen is 3000'));