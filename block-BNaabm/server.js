var express = require("express");

var server = express();

server.use("/", (res, req, next) => {
  console.log(req.url, req.method);
  next();
});

server.listen(4000, () => {
  console.log("server is listening to port 4k");
});
