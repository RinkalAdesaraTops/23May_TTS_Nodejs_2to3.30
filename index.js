const http = require('http')
const {add,minus} = require('./calc.js')
const express = require('express')
const jwt = require('jsonwebtoken');
const app = express()
const path = require('path')
const authRoutes = require('./routes/auth.js')

app.set('view engine','ejs')
app.use(express.static(path.join(__dirname)));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/',authRoutes)
// app.get('/',(req,res)=>{
//     res.sendFile(__dirname+'/home.html')
    
// })
function verifyToken(req, res, next) {
    const token = req.header('Authorization');
    console.log(token);
    let t = token.split(" ")
    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
     const decoded = jwt.verify(t[1], 'abc@123');
     req.userId = decoded.userId;
     res.status(200).json({ msg: 'verified token' });

     next();
     } catch (error) {
     res.status(401).json({ error: 'Invalid token' });
     }
};
app.get('/login',(req,res)=>{
    res.render('login')    
})
app.get('/register',(req,res)=>{
    res.render('register')    
})
app.get('/home',verifyToken,(req,res)=>{
    console.log('home page calling');
    console.log(__dirname);
    res.sendFile(__dirname+'/home.html')
})
app.get('/about',verifyToken,(req,res)=>{
    res.sendFile(__dirname+'/about.html')
})
app.listen(5000,()=>{
    console.log('Listening on 5000 port');
})
// console.log(process.argv.length);
// let data1 = process.argv
// for(let i=2;i<process.argv.length;i++){
//      console.log("You entered data -- "+process.argv[i]);
// }
// const array = [11,22,33,44,55]
// let finalResult = array.filter((i)=>{
//     return i%2!=0
// })
// console.log(finalResult);
// // data1.map((i)=>{
// //     console.log("You entered data -- "+i);
// // })

// http.createServer((req,res)=>{
//     res.write("Hi")
//     res.write("Addition is "+add(5,7))
//     res.write("Minus is "+minus(30,20))
//     res.end("Hello")
// }).listen(5000,()=>{
//     console.log('Listening on 5000 port');
// })
