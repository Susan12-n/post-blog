// controllers/postController.js
const Post = require('../models/Post.js');

// GET all posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('category');
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET single post
const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('category');
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE post
const createPost = async (req, res) => {
  const { title, content, imageUrl, category } = req.body;
  try {
    const newPost = new Post({ title, content, imageUrl, category });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE post
const updatePost = async (req, res) => {
  try {
    const updated = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE post
const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};

