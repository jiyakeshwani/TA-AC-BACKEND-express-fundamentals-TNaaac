var express = require("express");

var app = express();
app.get("/", (res, req) => {
  res.send("Welcome");
});

app.listen(3000, () => {
  console.log("server is listening to port 3k");
});
