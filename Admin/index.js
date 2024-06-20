const express = require('express')
const app = express()
const path = require('path')
const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + path.extname(file.originalname)
      cb(null, file.fieldname + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })
console.log(path.join(__dirname, 'views'));
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }));

app.set('view engine','ejs')
let arr = []
let pr_arr = []
app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/about',(req,res)=>{
    res.render('about')
})


app.get('/contact',(req,res)=>{
    res.render('contact')
})

app.post('/cat/save',(req,res)=>{
    let len = arr.length
    arr.push({
        id:len+1,
        name:req.body.catname
    })
    res.redirect('/category')
})
app.get('/cat/delete/:id',(req,res)=>{
   let id = req.params.id;
   let data1 =  arr.filter((i)=>{
        return i.id != id
    })
    arr = data1;
    res.redirect('/category')
})

app.get('/cat/edit/:id',(req,res)=>{
    let id = req.params.id;
    console.log(id);
    let data1 =  arr.filter((i)=>{
            return i.id == id
        })
        res.render('category',{
            "catdata":arr,
            "editcat":data1[0]
        })
})
app.post('/cat/update/:id',(req,res)=>{
    let id = req.params.id;
   const name = req.body.catname;
   let arr_new = arr.map((i)=>{
        if(i.id == id){
            i.name = name;
        }
        return i;
   })
    
   res.redirect("/category")
})
app.get('/category',(req,res)=>{
    res.render('category',{
        "catdata":arr,
        "editcat":""
    })
})
app.get('/product',(req,res)=>{
    res.render('product',{
        "prdata":pr_arr,
        "editpr":"",
        "catdata":arr
    })
})
app.post('/pr/save',upload.single('image'),(req,res)=>{
    let prname= req.body.prname;
    console.log(prname);
    
})
app.listen(4000,()=>{
    console.log("Listening on port 4000")
})