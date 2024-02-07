const router = require('express').Router();
const itemController = require("../controllers/item.controller");
const {get,post,deletee,put} = require("../controllers/itemController.js");


/////Router CRUD with jwt/////////
router.get('/cars',authentication,get)
router.post('/cars',authentication,post)
router.delete('/cars/:id', authentication,deletee)
router.put('/cars/:id',authentication,put)
module.exports = router;
