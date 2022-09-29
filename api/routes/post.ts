import express from 'express';
import {
  createPost,
  deletePost,
  findPost,
  getPosts,
  updatePost,
} from '../controllers/post.controller';

export const router = express.Router();

router.get('/', getPosts);

router.get('/:id', findPost);

router.post('/', createPost);

router.put('/:id', updatePost);

router.delete('/:id', deletePost);
