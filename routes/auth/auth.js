const express = require("express");
const router = express.Router();

const { userAuth } = require("../../controllers/auth/auth");

try {
  router.send("userAuth here");
} catch (error) {
  console.log(error);
}

module.exports = router;
