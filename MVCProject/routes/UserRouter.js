var express = require('express')
const router = express.Router()
const {myform,mypostform,deleteData,editData,updateData}  = require('../controllers/Usercontrollers')
// const bodyParser = require('body-parser')
router.get('/form',myform)
// router.get('/getData',getData)
router.post('/savedata',mypostform)
router.post('/updatedata',updateData)
router.get('/delete/:id',deleteData)
router.get('/edit/:id',editData)

module.exports = router;