const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
const users = ["Pedro", "João", "Maria"];

nunjucks.configure("views", {
  autoescape: true,
  express: app,
  watch: true
});

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "njk");

app.get("/", (req, res) => {
  return res.render("list", { users });
});

app.get("/new", (req, res) => {
  return res.render("new");
});

app.post("/create", (req, res) => {
  users.push(req.body.user);
  console.log(req.body);
  return res.redirect("/");
});
app.listen(3000);
