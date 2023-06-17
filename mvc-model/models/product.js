

const fs = require("fs");
const path = require("path");

const getProductsFromFile = (cb) => {
  const p = path.join(
    path.dirname(require.main.filename),
    "data",
    "products.json"
  );
  fs.readFile(p, (err, fileContent) => {
    if (err) return cb([], p);
    return cb(JSON.parse(fileContent), p);
  });
};

module.exports = class Product {
  constructor(title, imageUrl, descriptio, price ) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.descriptio = descriptio;
    this.price = price;
  }

  save(cb) {
    getProductsFromFile((products, p) => {
      console.log("thiss", this);
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
        cb();
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
