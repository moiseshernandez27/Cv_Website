const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index.html',{title:'Moises Hernandez'});
});

router.get('/contact',(req,res)=>{
    res.render('contact.html',{title:'Moises Hernandez'});
});

router.get('/about',(req,res)=>{
    res.render('about.html',{title:'Moises Hernandez'});
});

module.exports=router;