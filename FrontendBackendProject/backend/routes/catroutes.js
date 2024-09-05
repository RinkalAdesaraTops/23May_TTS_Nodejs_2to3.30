const {addCat,updateCat,deleteCat,editCat,displayCat} = require('../controllers/catcontroller')

var express = require('express')
var app = express()

const router = express.Router()
router.get("/",displayCat)
router.post("/addcat",addCat)
router.put("/updatecat/:id",updateCat)
router.patch("/editcat/:id",editCat)
router.delete("/deletecat/:id",deleteCat)

module.exports = router