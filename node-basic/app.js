const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(shopRoutes);
app.use("/admin", adminRoutes);

app.use((req, res, next) => {
  // res.status(404).send(`
  //   <h1>Page not Found</h1>
  // `);

  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);

// const server = http.createServer(app);

// server.listen(3000);
