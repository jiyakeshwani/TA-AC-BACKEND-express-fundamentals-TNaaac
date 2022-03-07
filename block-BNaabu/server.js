var express = require("express");

var app = express();

app.get("/", (res, req) => {
  res.send("welcome");
});

app.get("/about", (res, req) => {
  res.send("About page");
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

app.listen(3000, () => {
  console.log("server is running on port 3k");
});
