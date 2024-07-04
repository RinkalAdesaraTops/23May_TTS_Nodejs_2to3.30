var express = require('express')
var app = express()
const UserRouter = require('./routes/UserRouter')
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.end("Hello")
})
app.use(express.urlencoded({ extended: true }));
app.use('/user',UserRouter)

app.listen(4000,()=>{
    console.log('Listening to 4000 port');
})