var express = require('express')
var app = express()
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const UserRouter = require('./routes/UserRouter')
const EmpRouter = require('./routes/EmpRoutes')
const ApiRouter = require('./routes/ApiRoutes')
const hbs = require('hbs')
const path = require('path')
app.set('view engine','ejs')
// app.set('view engine','hbs')
app.get('/',(req,res)=>{
    res.end("Hello")
})
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: "secret",
    resave: false ,
    saveUninitialized: true ,
}))

app.use(passport.initialize()) // init passport on every route call
app.use(passport.session()) 
app.use('/user',UserRouter)
app.use('/emp',EmpRouter)
app.use('/api',ApiRouter)
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
authUser = (user, password, done) => {
    console.log(`Value of "User" in authUser function ----> ${user}`)         //passport will populate, user = req.body.username
    console.log(`Value of "Password" in authUser function ----> ${password}`) //passport will popuplate, password = req.body.password

    let authenticated_user = { id: 123, name: "abc"} 

    return done (null, authenticated_user ) 
}


passport.use(new LocalStrategy (authUser))

passport.serializeUser( (user, done) => { 
    console.log(`--------> Serialize User`)
    console.log(user)     

    done(null, user.id)
  
// Passport will pass the authenticated_user to serializeUser as "user" 
// This is the USER object from the done() in auth function
// Now attach using done (null, user.id) tie this user to the req.session.passport.user = {id: user.id}, 
// so that it is tied to the session object

} )


passport.deserializeUser((id, done) => {
        console.log("---------> Deserialize Id")
        console.log(id)

        done (null, {name: "abc", id: 123} )      
  
// This is the id that is saved in req.session.passport.{ user: "id"} during the serialization
// use the id to find the user in the DB and get the user object with user details
// pass the USER object in the done() of the de-serializer
// this USER object is attached to the "req.user", and can be used anywhere in the App.

})

app.get("/login", (req, res) => {
    res.render("login.ejs")

})

app.post ("/login", passport.authenticate('local', {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
}))

app.get("/dashboard", (req, res) => {   
    res.render("dashboard.ejs", {name: req.user.name})
})
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