const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (cb) => {
  MongoClient.connect(
    "mongodb+srv://thanhdan0811:thanhdan2511@cluster811.aeyzc.mongodb.net/"
  )
    .then((client) => {
      console.log("Connected!!");
      _db = client.db("shop_node");
      cb();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "NO database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
