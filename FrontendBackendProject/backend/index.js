var express = require('express')
var app = express()
const catRoutes = require('./routes/catroutes')

app.set('view engine','ejs')
app.use(express.urlencoded({ extended: true }))

app.use(express.json())
app.use("/category",catRoutes)

app.get("/",(req,res)=>{
    res.send('Admin Panel')
})

app.listen(4000,()=>{
    console.log("Admin panel running on 4000 port");
    
})