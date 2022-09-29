import express from 'express';

import { signup, login, logout } from '../controllers/auth.controller';

export const router = express.Router();

router.get('/signup', signup);

router.get('/login', login);

router.get('/logout', logout);
