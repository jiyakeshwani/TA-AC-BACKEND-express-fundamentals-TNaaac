var express = require("express");
var cookie = require("cookie-parser");

var app = express();

app.use(express.static());
app.use(express.json());
app.use(express.urlencoded());
app.use(cookie());

app.get("/", (res, req) => {
  res.send("welcome");
});

app.get("/users", (res, req) => {
  res.send("users page");
});

app.use((res, req, next) => {
  res.send("page not found");
  next();
});

app.use((err, req, res, next) => {
  if (req.url === "admin") {
    return next("Unauthorized");
  }

  next(err);
});

app.listen(4000, () => {
  console.log("server is running on port 4k");
});
