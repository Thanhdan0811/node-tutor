const path = require("path");
const express = require("express");
const router = express.Router();
const rootDir = require("../utils/path");

const adminData = require("./admin");

// router.get("/", (req, res, next) => {
//   // res.send(`
//   //   <h1>Hello from Express</h1>
//   // `);
//   // res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
//   console.log("shopjs", adminData.products);
//   res.sendFile(path.join(rootDir, "views", "shop.html"));
// });
router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

module.exports = router;
