const http = require('http')
const {add,minus} = require('./calc.js')

http.createServer((req,res)=>{
    res.write("Hi")
    res.write("Addition is "+add(5,7))
    res.write("Minus is "+minus(30,20))
    res.end("Hello")
}).listen(5000,()=>{
    console.log('Listening on 5000 port');
})
