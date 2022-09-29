import express, { Request, Response } from 'express';

export const router = express.Router();

router.get('/signup', (req: Request, res: Response) => {
  res.send('signup');
});

router.get('/login', (req: Request, res: Response) => {
  res.send('login');
});

router.get('/logout', (req: Request, res: Response) => {
  res.send('logout');
});
