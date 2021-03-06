const express = require("express");
const app = express();

require("dotenv").config();
const dbConnection = require("./db");

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("./home");
});

app.get("/signup", (req, res) => {
  res.render("./signup");
});

app.get("/login", (req, res) => {
  res.render("./login");
});

app.get("/uploadVideo", (req, res) => {
  res.render("./uploadVideo");
});

app.get("/error", (req, res) => {
  res.render("./error");
});

app.get("*", (req, res) => {
  res.send("404 : Page Not Found");
});

try {
  dbConnection().then(() => {
    console.log("db connected");
    app.listen(PORT, () => {
      console.log(`App running on ${PORT}`);
    });
  });
} catch (error) {
  console.log(error);
}
