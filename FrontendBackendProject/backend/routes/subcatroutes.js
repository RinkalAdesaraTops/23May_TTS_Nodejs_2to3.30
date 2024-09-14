const {addsubcat,updatesubcat,deletesubcat,editsubcat,displaysubcat} = require('../controllers/subcatcontroller')

var express = require('express')
var app = express()

const router = express.Router()
router.get("/",displaysubcat)
router.post("/addsubcat",addsubcat)
router.put("/updatesubcat/:id",updatesubcat)
router.patch("/editsubcat/:id",editsubcat)
router.delete("/deletesubcat/:id",deletesubcat)

module.exports = router