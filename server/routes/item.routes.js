const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/", itemController);

module.exports = router;
