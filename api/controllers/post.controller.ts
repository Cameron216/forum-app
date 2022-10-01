import { Request, Response } from 'express';

import Logger from '../lib/logger';

import { Post } from '../models/post.model';
import { User } from '../models/user.model';

export const createPost = async (req: Request, res: Response) => {
  if (!req.body.userId || !req.body.postTitle || !req.body.postContent) {
    return res.status(422).json({
      userId: 'userId is required',
      postTitle: 'postTitle is required',
      postContent: 'postContent is required',
    });
  }

  let user: any;

  try {
    user = await User.findByPk(req.body.userId);
  } catch (err: any) {
    Logger.log(err);
    res.status(500).send({
      success: false,
      message: 'Error occurred while communicating with the database',
    });
    return;
  }

  if (!user) {
    res.status(404).send({
      success: false,
      message: 'User does not exist with provided userId',
    });
    return;
  }

  if (req.body.parentPostId) {
    try {
      const parentPost = await Post.findByPk(req.body.parentPostId);

      if (!parentPost) {
        res.status(404).send({
          success: false,
          message: 'Post you are replying to does not exist',
        });
        return;
      }
    } catch (err: any) {
      Logger.log(err);
      res.status(500).send({
        success: false,
        message: 'Error occurred while communicating with the database',
      });
      return;
    }
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
      res.status(500).send({
        success: false,
        message: 'Error occurred while communicating with the database',
      });
    });
};

export const getPosts = async (req: Request, res: Response) => {
  Post.findAll()
    .then((posts: any) => {
      res.status(200).send(posts);
    })
    .catch((err: unknown) => {
      Logger.error(err);
      res.status(500).send({
        success: false,
        message: 'Error occurred while communicating with the database',
      });
    });
};

export const findPost = async (req: Request, res: Response) => {
  const postId = req.params.id;

  Post.findByPk(postId)
    .then((post: any) => {
      res.status(200).send(post);
    })
    .catch((err: unknown) => {
      Logger.error(err);
      res.status(500).send({
        success: false,
        message: 'Error occurred while communicating with the database',
      });
    });
};

export const updatePost = async (req: Request, res: Response) => {
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
      res.status(500).send({
        success: false,
        message: 'Error occurred while communicating with the database',
      });
    });
};

export const deletePost = async (req: Request, res: Response) => {
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
      res.status(500).send({
        success: false,
        message: 'Error occurred while communicating with the database',
      });
    });
};
