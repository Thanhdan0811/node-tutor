const http = require('http');
const routes = require("./routes");

// const server = http.createServer((req, res) => {
//     // const url = req.url;
//     // const method = req.method;
    
// });
const server = http.createServer(routes);

server.listen(3000);