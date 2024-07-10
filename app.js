const express = require("express");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/add_post", (req, res) => {
    res.render("add_post");
});

app.get("/post", (req, res) => {
    res.render("post");
});

// app.get("/", (req, res) => {
//     const blog = {
//         id: 1,
//         title: "Blog title",
//         description: "Blog description"
//     }
//     res.send(blog);
// });

const port = 3001;
app.listen(port, () => {
  console.log(``);
});
