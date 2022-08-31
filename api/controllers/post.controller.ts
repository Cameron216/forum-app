import { Request, Response } from 'express';

const Post = require('../models/post.model');

exports.createPost = (req: Request, res: Response) => {
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
  Post.createPost(post, function (err: any, post: any) {
    if (err) {
      return res.status(403).send(err);
    }
    res.json(post);
  });
};
