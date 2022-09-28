import express, { Request, Response } from 'express';

export const router = express.Router();

const {
  createUser,
  deleteUser,
  findUser,
  getUsers,
  updateUser,
} = require('../controllers/user.controller');

router.get('/', getUsers);

router.get('/:id', findUser);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);
