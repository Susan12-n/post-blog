const express = require('express');
const multer = require('multer');

const {
  getPosts,
  upload ,
  getPostBySlug,
  getPost,
  createPost,
  updatePost,
  getPostsByCategory,
  deletePost
} = require('../controllers/postControllers.js'); 

const router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// PUT - update post with optional image
router.put('/posts/:id', upload.single('image'), updatePost);
router.get('/', getPosts);
router.post("/", upload.single("image"));
router.get("/slug/:slug", getPostBySlug);
router.get("/category/:id", getPostsByCategory);
router.get('/:id', getPost);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router; 

