var express = require('express')
const router = express.Router()
const {myform,mypostform, getData}  = require('../controllers/Usercontrollers')
// const bodyParser = require('body-parser')
router.get('/form',myform)
router.get('/getData',getData)
router.post('/savedata',mypostform)

module.exports = router;