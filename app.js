const express = require("express");
const mongoose = require("mongoose")
const ejs = require("ejs");
const Post = require("./models/Post");

const app = express();

mongoose.connect("mongodb://localhost/cleanblog-test-db");

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", async(req, res) => {
  const posts = await Post.find();
  res.render("index", {posts});
  console.log(posts);
});

app.get("/posts/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("post", {post});
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

app.post("/posts", async (req, res) => {
  console.log(req.body);
  await Post.create(req.body);
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
