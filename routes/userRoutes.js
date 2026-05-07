const express = require("express");
const { sendDetails } = require("../Controller/userController");
const router = express.Router();

router.post("/send", sendDetails);

module.exports = router;