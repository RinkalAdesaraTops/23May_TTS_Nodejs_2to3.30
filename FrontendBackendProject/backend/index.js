var express = require('express')
var flash = require('express-flash')
var session = require('express-session')

var app = express()
const catRoutes = require('./routes/catroutes')
const subcatRoutes = require('./routes/subcatroutes')

app.set('view engine','ejs')
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
  }))
  app.use(flash())
app.use(express.urlencoded({ extended: true }))

var cors = require('cors')

app.use(cors())
app.use(express.json())
app.use("/category",catRoutes)
app.use("/subcategory",subcatRoutes)

app.get("/",(req,res)=>{
    res.send('Admin Panel')
})
app.listen(4000,()=>{
    console.log("Admin panel running on 4000 port");    
})