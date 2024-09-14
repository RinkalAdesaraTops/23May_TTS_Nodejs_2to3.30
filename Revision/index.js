var express = require('express')

var app = express()
const catRoutes = require('./routes/catroutes')

app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use('/category/',catRoutes)

app.listen(4000,()=>{
    console.log('listening on 4000 port');
    
})
