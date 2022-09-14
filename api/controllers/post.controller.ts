import { Request, Response } from 'express';

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

  const post = new Post(req.body);

  const response = await Post.createPost(post);

  response.insertId ? res.send({ success: true }) : res.send({ error: true });
};

exports.getPosts = async (req: Request, res: Response) => {
  const allPosts = await Post.getPosts();

  res.send(allPosts.rows);
};
