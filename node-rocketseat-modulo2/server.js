const express = require("express");
const nunjucks = require("nunjucks");
const path = require("path");

class App {
  constructor() {
    this.express = express();
    this.isDev = process.env.NODE_ENV !== "production";

    this.middleware();
    this.views();
    this.routes();
  }

  middleware() {
    //this.express.use(express.urlencoded({ extended: false }));

    // this.express.use(flash());
    // this.express.use(
    //   session({
    //     name: "root",
    //     secret: "MyAppSecret",
    //     resave: true,
    //     store: new FileStore({
    //       path: path.resolve(__dirname, "..", "tmp", "sessions")
    //     }),
    //     saveUninitialized: true
    //   })
    // );

    this.express.use(express.json());
  }

  views() {
    nunjucks.configure(path.resolve(__dirname, "app", "views"), {
      watch: this.isDev,
      express: this.express,
      autoescape: true
    });
   // this.express.use(express.static(path.resolve(__dirname, "public")));
    this.express.set("view engine", "nkj");
  }

  routes() {
    this.express.use(require("./routes"));
  }
}
module.exports = new App().express;
