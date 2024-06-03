const express = require('express')
const app = express()
const path = require('path')
console.log(path.join(__dirname, 'views'));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/contact',(req,res)=>{
    res.render('contact')
})


app.listen(4000,()=>{
    console.log("Listening on port 4000")
})