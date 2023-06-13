const path = require("path");
const express = require("express");
const router = express.Router();
const rootDir = require("../utils/path");

router.get("/", (req, res, next) => {
  // res.send(`
  //   <h1>Hello from Express</h1>
  // `);
  // res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
