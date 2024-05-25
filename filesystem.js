var fs = require('fs')

// fs.writeFile('demo.html',"Hello",function(err){
//     if (err) throw err;
//     console.log("File successfully created...");
// })
fs.appendFile('demo.html',"Hello This content is added....",function(err){
    if (err) throw err;
    console.log("data updated successfully");
})
fs.readFile("demo.html",function(err,data){
    if (err) throw err;
    console.log("data read from file -- "+data);
})
fs.unlink('demo.html',function(err){
    if (err) throw err;
    console.log("File deleted successfully");
    
})