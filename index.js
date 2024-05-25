const http = require('http')
const {add,minus} = require('./calc.js')

console.log(process.argv.length);
let data1 = process.argv
for(let i=2;i<process.argv.length;i++){
     console.log("You entered data -- "+process.argv[i]);
}
const array = [11,22,33,44,55]
let finalResult = array.filter((i)=>{
    return i%2!=0
})
console.log(finalResult);
// data1.map((i)=>{
//     console.log("You entered data -- "+i);
// })

http.createServer((req,res)=>{
    res.write("Hi")
    res.write("Addition is "+add(5,7))
    res.write("Minus is "+minus(30,20))
    res.end("Hello")
}).listen(5000,()=>{
    console.log('Listening on 5000 port');
})
