import { Request, Response } from 'express';

import Logger from '../lib/logger';

const Post = require('../models/post.model');
const User = require('../models/user.model');

exports.createPost = async (req: Request, res: Response) => {
  if (!req.body.userId || !req.body.postTitle || !req.body.postContent) {
    return res.status(422).json({
      userId: 'userId is required',
      postTitle: 'postTitle is required',
      postContent: 'postContent is required',
    });
  }

  const user = await User.findByPk(req.body.userId);

  if (!user) {
    res
      .status(404)
      .send({ message: 'User does not exist with provided userId' });
    return;
  }

  user
    .createPost({
      parentPostId: req.body.parentPostId,
      postTitle: req.body.postTitle,
      postContent: req.body.postContent,
    })
    .then(() => {
      res.status(200).send({ success: true });
    })
    .catch((err: unknown) => {
      Logger.error(err);
      res.status(500).send({ error: true });
    });
};

exports.getPosts = async (req: Request, res: Response) => {
  Post.findAll()
    .then((posts: any) => {
      res.status(200).send(posts);
    })
    .catch((err: unknown) => {
      Logger.error(err);
      res.status(500).send({ error: true });
    });
};

exports.findPost = async (req: Request, res: Response) => {
  const postId = req.params.id;

  Post.findByPk(postId)
    .then((post: any) => {
      res.status(200).send(post);
    })
    .catch((err: unknown) => {
      Logger.error(err);
      res.status(500).send(err);
    });
};

exports.updatePost = async (req: Request, res: Response) => {
  if (!req.body.postTitle || !req.body.postContent) {
    return res.status(422).json({
      postTitle: 'postTitle is required',
      postContent: 'postContent is required',
    });
  }

  Post.update(
    {
      updatedDate: new Date().toISOString(),
      postTitle: req.body.postTitle,
      postContent: req.body.postContent,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then(() => {
      res.status(200).send({ success: true });
    })
    .catch((err: unknown) => {
      Logger.error(err);
      res.status(500).send({ error: true });
    });
};

exports.deletePost = async (req: Request, res: Response) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((result: number) => {
      result
        ? res.status(200).send({ message: 'Post successfully deleted' })
        : res.status(404).send({ message: 'Post does not exist' });
    })
    .catch((err: unknown) => {
      Logger.error(err);
      res.status(500).send({ error: true });
    });
};
