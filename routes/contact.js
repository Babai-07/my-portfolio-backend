const express = require("express");
const router = express.Router();

const {saveContactMongoDb} =require("../controller/contactController");

router.post("/saveContact" , saveContactMongoDb );

module.exports = router;