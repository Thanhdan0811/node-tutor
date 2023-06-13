const express = require("express");
const path = require("path");

const rootDir = require("../utils/path");

const router = express.Router();

const products = [];

// router.get("/add-product", (req, res, next) => {
//   // res.send(`
//   //   <form action="/admin/add-product" method="POST">
//   //     <input type="text" name="title" />
//   //     <button type="submit">Add product</button>
//   //   </form>
//   // `);

//   // res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
//   res.sendFile(path.join(rootDir, "views", "add-product.html"));
// });
router.get("/add-product", (req, res, next) => {
  res.render('add-product', {pageTitlle: "Add Product", path: "/admin/add-product"})
});

router.post("/add-product", (req, res, next) => {
  // console.log(req.body);
  products.push({ title: req.body.title });
  res.redirect("/");
});



// module.exports = {
//   routes : router,
//   products
// }
exports.routes = router;
exports.products = products;