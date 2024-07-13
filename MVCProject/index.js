var express = require('express')
var app = express()
const UserRouter = require('./routes/UserRouter')
const EmpRouter = require('./routes/EmpRoutes')
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.end("Hello")
})
app.use(express.urlencoded({ extended: true }));
app.use('/user',UserRouter)
app.use('/emp',EmpRouter)

app.listen(4000,()=>{
    console.log('Listening to 4000 port');
})