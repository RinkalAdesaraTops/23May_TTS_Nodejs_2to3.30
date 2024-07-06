var express = require('express')
const router = express.Router()
const {myform,mypostform,deleteData}  = require('../controllers/Usercontrollers')
// const bodyParser = require('body-parser')
router.get('/form',myform)
// router.get('/getData',getData)
router.post('/savedata',mypostform)
router.get('/delete/:id',deleteData)

module.exports = router;