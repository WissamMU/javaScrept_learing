const express = require('express');
//we can also use 
//import express  from 'express';

const app = express();
app.use(express.json());

let hello = [] ;

// http methods
// GET - Retrive data
// app.get('Loction', arraw function)
app.get('/hello',(req,res) => {
    if(hello.length==0){
        res.status(404).send('no hello to you')
        return
    }
    res.status(200).send(hello);
});

// POST - crate data 
app.post('/hello',(req,res) => {
    //check if the id already exist
    const helloID = req.body;
    const findID = hello.find((x) => x.id === helloID.id)
    if (findID){
        res.status(400).send('already said hello')
        return
    }
    hello.push(helloID);
    res.status(201).send('post');
});




app.get('/',(req,res) => {
    res.sendFile('index.html' , {root: __dirname });
});

app.use('public' , express.static(__dirname + '/public'));

app.get('/user',(req,res) => res.json([
    {id:1 , name: 'wessam' , email:'wessam@javascript.com'},
    {id:2 , name: 'bat' , email:'bat@javascript.com'},
    {id:3 , name: 'silver' , email:'silver@javascript.com'},
]));
app.get('/testing',(req,res) => res.json([
    {help:'me',noIDea:'what is this',orHow:'it workd'},
]));

app.post('/user',(req,res) => {
    console.log(req.body);
    res.json({message:'user added successfully!'});
});

app.listen(3000,()=>console.log('server listen is 3000 linke in the next'+
' line\nhttp://localhost:3000/'));