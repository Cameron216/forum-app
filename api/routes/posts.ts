import express, { Request, Response } from 'express';

export const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('All posts');
});

router.get('/:id', (req: Request, res: Response) => {
  res.send('Single post');
});

router.post('/', (req: Request, res: Response) => {
  res.send('New post');
});

router.put('/:id', (req: Request, res: Response) => {
  res.send('Update post');
});

router.delete('/:id', (req: Request, res: Response) => {
  res.send('Delete post');
});
