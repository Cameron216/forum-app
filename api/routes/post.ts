import express, { Request, Response } from 'express';

export const router = express.Router();

const {
  createPost,
  findPost,
  getPosts,
} = require('../controllers/post.controller');

router.get('/', getPosts);

router.get('/:id', findPost);

router.post('/', createPost);

router.put('/:id', (req: Request, res: Response) => {
  res.send('Update post');
});

router.delete('/:id', (req: Request, res: Response) => {
  res.send('Delete post');
});
