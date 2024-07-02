const myform = (req,res)=>{
    res.render('user')
}   

const mypostform = (req,res)=>{
    console.log(req.body);
    //database insert
    console.log('form submit...');
}   
module.exports = {
    myform,
    mypostform
}
