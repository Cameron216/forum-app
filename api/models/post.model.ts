import { connection } from '../config/db.config';

const Post = function (this: any, post: any) {
  this.userId = post.userId;
  this.parentPostId = post.parentPostId;
  this.postTitle = post.postTitle;
  this.postContent = post.postContent;
};

Post.createPost = (newPost: any) => {
  console.log(connection);
  connection.query('INSERT INTO Post SET ?', newPost, (err, res) => {
    if (err) {
      console.log('error: ', err);
      return;
    }

    console.log('Post created: ', { id: res, ...newPost });
  });
};

module.exports = Post;
