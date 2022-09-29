import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

import Logger from '../lib/logger';
import { User } from '../models/user.model';
import { UserType } from '../types/user';
import { LogError } from 'concurrently';

dotenv.config();

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
      success: false,
      message: 'user with supplied username already exists',
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
  if (!req.body.username || !req.body.password) {
    return res.status(422).send({
      username: 'username is required',
      password: 'password is required',
    });
  }

  const user: any = await User.findOne({
    where: {
      username: req.body.username,
    },
  });

  if (!user) {
    res.status(404).send({
      success: false,
      message: 'user with supplied username does not exist',
    });
    return;
  }

  const passwordMatch = await bcrypt.compare(req.body.password, user.password);

  if (!passwordMatch) {
    res.status(404).send({
      success: false,
      message: 'password incorrect',
    });
    return;
  }

  let token;

  try {
    token = jwt.sign(
      {
        username: req.body.username,
      },
      process.env.JWT_SECRET ?? '',
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );
  } catch (error) {
    Logger.error(error);
    res.status(500).send({
      success: false,
      message: 'error generating token',
    });
    return;
  }

  res.cookie('auth-token', JSON.stringify(token), {
    httpOnly: true,
    expires: new Date(Date.now() + 86400 * 1000),
  });

  res.status(200).send({
    success: true,
    message: 'successfully logged in',
    user: { username: user.username },
  });
};

export const logout = async (_: Request, res: Response) => {
  res.clearCookie('auth-token');

  res.status(200).send({
    success: true,
    message: 'successfully logged out',
  });
};
