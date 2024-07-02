var express = require('express')
const router = express.Router()
const {myform,mypostform}  = require('../controllers/Usercontrollers')
// const bodyParser = require('body-parser')
router.get('/form',myform)
router.post('/savedata',mypostform)

module.exports = router;