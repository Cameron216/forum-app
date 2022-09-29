import express from 'express';
import {
  createUser,
  deleteUser,
  findUser,
  getUsers,
  updateUser,
} from '../controllers/user.controller';

export const router = express.Router();

router.get('/', getUsers);

router.get('/:id', findUser);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);
