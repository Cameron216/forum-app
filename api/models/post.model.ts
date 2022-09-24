const Sequelize = require('sequelize');

import sequelize from '../config/db.config';
import Logger from '../lib/logger';

const Post = sequelize.define('Posts', {
  
})








// const Post = function (this: any, post: any) {
//   this.userId = post.userId;
//   this.parentPostId = post.parentPostId;
//   this.postTitle = post.postTitle;
//   this.postContent = post.postContent;
// };

// Post.createPost = async (newPost: any) => {
//   try {
//     const [rows] = await connection.query('INSERT INTO Post SET ?', newPost);
//     return rows;
//   } catch (err) {
//     Logger.error(err);
//   }
// };

// Post.getPosts = async () => {
//   try {
//     const [rows, fields] = await connection.query('SELECT * FROM Post');
//     return { rows, fields };
//   } catch (err) {
//     Logger.error(err);
//   }
// };

// module.exports = Post;
