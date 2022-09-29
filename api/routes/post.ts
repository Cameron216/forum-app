import express from 'express';

export const router = express.Router();

const {
  createPost,
  deletePost,
  findPost,
  getPosts,
  updatePost,
} = require('../controllers/post.controller');

router.get('/', getPosts);

router.get('/:id', findPost);

router.post('/', createPost);

router.put('/:id', updatePost);

router.delete('/:id', deletePost);
