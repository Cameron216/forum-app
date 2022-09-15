import express, { Request, Response } from 'express';

export const router = express.Router();

const { createPost, getPosts } = require('../controllers/post.controller');

router.get('/', getPosts);

router.get('/:id', (req: Request, res: Response) => {
  res.send('Single post');
});

router.post('/', createPost);

router.put('/:id', (req: Request, res: Response) => {
  res.send('Update post');
});

router.delete('/:id', (req: Request, res: Response) => {
  res.send('Delete post');
});
