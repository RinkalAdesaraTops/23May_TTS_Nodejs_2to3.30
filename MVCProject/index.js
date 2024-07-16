var express = require('express')
var app = express()
const UserRouter = require('./routes/UserRouter')
const EmpRouter = require('./routes/EmpRoutes')
const hbs = require('hbs')
const path = require('path')
// app.set('view engine','ejs')
app.set('view engine','hbs')
app.get('/',(req,res)=>{
    res.end("Hello")
})
app.use(express.urlencoded({ extended: true }));
app.use('/user',UserRouter)
app.use('/emp',EmpRouter)
hbs.registerPartials(path.join(__dirname, 'views/partials'));
const arr = [10,20,30,40,40]
const obj = {
    id:101,
    name:"jhfg",
    age:25,
    salary:24000
}
const arr_obj = [
    {
        id:101,
        name:"jhfg",
        age:25,
        salary:24000
    },
    {
        id:102,
        name:"test",
        age:25,
        salary:24500
    }
]
app.get("/testhbs",(req,res)=>{
    res.render("testexample",{
        myarray:arr,
        myobj:obj,
        arrobj:arr_obj
    })
})

app.listen(4000,()=>{
    console.log('Listening to 4000 port');
})