import express, { Request, Response } from 'express';

export const router = express.Router();

router.get('/:id', (req: Request, res: Response) => {
    res.send('Get user')
})

router.post('/', (req: Request, res: Response) => {
    res.send('Create user')
})

router.put('/', (req: Request, res: Response) => {
    res.send('Update user')
})

router.delete('/', (req: Request, res: Response) => {
    res.send('Delete user')
})
