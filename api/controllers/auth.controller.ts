import bcrypt from 'bcrypt';
import { Request, Response } from 'express';

import Logger from '../lib/logger';
import { User } from '../models/user.model';
import { UserType } from '../types/user';

export const signup = async (req: Request, res: Response) => {
  if (!req.body.username || !req.body.password) {
    return res.status(422).json({
      username: 'username is required',
      password: 'password is required',
    });
  }

  const userExists = await User.findAll({
    where: {
      username: req.body.username,
    },
  });

  if (userExists.length !== 0) {
    res.status(422).send({
      message: 'user with supplied username already exists',
      success: false,
    });
    return;
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const newUser: UserType = {
    username: req.body.username,
    password: hashedPassword,
  };

  User.create(newUser)
    .then(() => {
      res.status(200).send({ success: true });
    })
    .catch((err: unknown) => {
      Logger.error(err);
      res.status(500).send({ error: true });
    });
};

export const login = async (req: Request, res: Response) => {
  res.send('login');
};

export const logout = async (req: Request, res: Response) => {
  res.send('logout');
};
