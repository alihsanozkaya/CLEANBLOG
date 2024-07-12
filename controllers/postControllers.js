const Post = require("../models/Post");

exports.getAllPosts = async (req, res) => {
    const posts = await Post.find();
    res.render("index", { posts });
    console.log(posts);
  }

exports.getPost = async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render("post", { post });
  }

exports.createPost = async (req, res) => {
    console.log(req.body);
    await Post.create(req.body);
    res.redirect("/");
  }

exports.updatePost = async (req, res) => {
    const posts = await Post.findOne({ _id: req.params.id });
    posts.title = req.body.title;
    posts.detail = req.body.detail;
    posts.save();
    res.redirect(`/posts/${req.params.id}`);
  }

exports.deletePost = async(req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect("/");
  }