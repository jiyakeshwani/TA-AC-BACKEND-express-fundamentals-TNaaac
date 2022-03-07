// - Add a GET request on '/' route and render 'index.html' file using `res.sendFile`.
// - Add a GET request on '/new' route and render new.html with a html form.
// - add a post request on '/new' route and display submitted form data
// - add a route with params to grab request made on `/users/1234` or `/users/asdf`

var express = require("express");

var app = express();

app.get("/", (res, req) => {
  res.sendFile("/index.html");
  res.end();
});

app.get("/new", (res, req) => {
  res.sendFile("/new.html");
  res.end();
});

app.post("/new", (res, req) => {
  console.log(req.body);
});

app.get("/users/:username", (res, req) => {
  var username = req.params.username;
  console.log(username);
});

app.listen(3000, () => {
  console.log("server is running on port 3k");
});
