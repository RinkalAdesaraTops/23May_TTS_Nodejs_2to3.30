var express = require('express')

var app = express()
var router = express.Router()
const {addCat,dispCat} = require('../controllers/categorycontroller')

router.get("/",dispCat)
router.post("/savecat",addCat)

module.exports = router