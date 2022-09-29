import express from 'express';

import { signup, login, logout } from '../controllers/auth.controller';

export const router = express.Router();

router.post('/signup', signup);

router.post('/login', login);

router.get('/logout', logout);
