// controllers/postController.js
const Post = require('../models/Post.js');
const multer = require("multer");

// Configure multer for file uploadsmulter
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Make sure this folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const slugify = (text) => 
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

const upload = multer({ storage });


const getPostBySlug = async (req, res) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug }).populate("category");
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getPostsByCategory = async (req, res) => {
  try {
    const posts = await Post.find({ category: req.params.id }).populate("category");
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


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
  try {
    const { title, content, category } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : "default-post.jpg";

    // generate slug
    const slug = slugify(title, { lower: true, strict: true });

    // set a hardcoded author ID for now (replace with actual user ID when auth is added)
    const authorId = "665cb38e4e5a27427ea1bb22"; // replace with an actual ObjectId from your User collection

    const newPost = new Post({
      title,
      content,
      category,
      featuredImage: imageUrl,
      slug,
      author: authorId,
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    console.error("Failed to create post:", err);
    res.status(400).json({ message: err.message });
  }
};


// UPDATE post
const updatePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const { title, content, category } = req.body;

    // Prepare update fields
    const updateFields = {
      title,
      content,
      category,
    };

    // If new image uploaded, include it
    if (req.file) {
      updateFields.featuredImage = `/uploads/${req.file.filename}`;
    }

    const updatedPost = await Post.findByIdAndUpdate(postId, updateFields, {
      new: true,
      runValidators: true,
    });

    if (!updatedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json(updatedPost);
  } catch (err) {
    console.error('Error updating post:', err);
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
  upload,
  getPostBySlug,
  getPostsByCategory,
  getPost,
  createPost,
  updatePost,
  deletePost,
};

