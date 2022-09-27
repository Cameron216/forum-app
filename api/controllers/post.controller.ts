import { Request, Response } from 'express';

import Logger from '../lib/logger';

const Post = require('../models/post.model');

exports.createPost = async (req: Request, res: Response) => {
  if (
    !req.body.userId ||
    !req.body.parentPostId ||
    !req.body.postTitle ||
    !req.body.postContent
  ) {
    return res.status(422).json({
      userId: 'userId is required',
      parentPostId: 'parentPostId is required',
      postTitle: 'postTitle is required',
      postContent: 'postContent is required',
    });
  }

  Post.create({
    userId: req.body.userId,
    parentPostId: req.body.parentPostId,
    postTitle: req.body.postTitle,
    postContent: req.body.postContent,
  })
    .then((result: any) => {
      res.send({ success: true });
    })
    .catch((err: any) => {
      Logger.error(err);
      res.send({ error: true });
    });
};

exports.getPosts = async (req: Request, res: Response) => {
  Post.findAll()
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      Logger.error(err);
      res.send({ error: true });
    });
};

exports.findPost = async (req: Request, res: Response) => {
  const postId = req.params.id;

  Post.findByPk(postId)
    .then((post: any) => {
      console.log(post);
      res.send(post);
    })
    .catch((err: any) => {
      Logger.error(err);
      res.status(500).send(err);
    });
};
