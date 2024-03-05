const express = require('express');

const app = express();

app.get('/',(req,res) => {
    res.sendFile('index.html' , {root: __dirname });
});

app.get('/user',(req,res) => res.json([
    {id:1 , name: 'wessam' , email:'wessam@javascript.com'},
    {id:2 , name: 'bat' , email:'bat@javascript.com'},
    {id:3 , name: 'silver' , email:'silver@javascript.com'},
]));
app.get('/testing',(req,res) => res.json([
    {help:'me',noIDea:'what is this',orHow:'it workd'},
]));

app.listen(3000,()=>console.log('server listen is 3000'));