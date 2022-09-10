import { connection } from '../config/db.config';

const Post = function (this: any, post: any) {
  this.userId = post.userId;
  this.parentPostId = post.parentPostId;
  this.postTitle = post.postTitle;
  this.postContent = post.postContent;
};

Post.createPost = (newPost: any) => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO Post SET ?', newPost, (err, res) => {
      if (err) {
        console.log('error: ', err);
        reject(err);
      }

      console.log('Post created: ', { id: res, ...newPost });
      resolve(res);
    });
  });
};

module.exports = Post;
