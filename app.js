const express = require("express");
const mongoose = require("mongoose")
const ejs = require("ejs");
const Blog = require("./models/Blog");

const app = express();

mongoose.connect("mongodb://localhost/cleanblog-test-db");

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", async(req, res) => {
  const blogs = await Blog.find();
  res.render("index", {blogs});
  console.log(blogs);
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

app.post("/blogs", async (req, res) => {
  console.log(req.body);
  await Blog.create(req.body);
  res.redirect("/");
})

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
