var express = require("express");

var app = express();

app.use((res, req, next) => {
  console.log(req.method, req.url, req.time);
  next();
});

app.listen(3000, () => {
  console.log("server is running on port 3k");
});
