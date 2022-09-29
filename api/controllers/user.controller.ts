import { Request, Response } from 'express';
const bcrypt = require('bcrypt');

import Logger from '../lib/logger';
import { UserType } from '../types/user';

const User = require('../models/user.model');

exports.createUser = async (req: Request, res: Response) => {
  if (!req.body.username || !req.body.password) {
    return res.status(422).json({
      username: 'username is required',
      password: 'password is required',
    });
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

exports.getUsers = async (req: Request, res: Response) => {
  User.findAll()
    .then((users: any) => res.status(200).send(users))
    .catch((err: unknown) => {
      Logger.error(err);
      res.status(500).send({ error: true });
    });
};

exports.findUser = async (req: Request, res: Response) => {
  const userId = req.params.id;

  User.findByPk(userId)
    .then((user: any) => {
      res.status(200).send(user);
    })
    .catch((err: unknown) => {
      Logger.error(err);
      res.status(500).send({ error: true });
    });
};

exports.updateUser = async (req: Request, res: Response) => {
  User.update(
    {
      ...req.body,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then(res.status(200).send({ success: true }))
    .catch((err: unknown) => {
      Logger.error(err);
      res.status(500).send({ error: true });
    });
};

exports.deleteUser = async (req: Request, res: Response) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((result: number) => {
      result
        ? res.status(200).send({ message: 'User successfully deleted' })
        : res.status(404).send({ message: 'User does not exist' });
    })
    .catch((err: unknown) => {
      Logger.error(err);
      res.status(500).send({ error: true });
    });
};
