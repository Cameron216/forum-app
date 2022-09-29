import Sequelize from 'sequelize';

const sequelize = require('../config/db.config');

const Post = sequelize.define(
  'Posts',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    parentPostId: {
      type: Sequelize.INTEGER,
    },
    createdDate: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    updatedDate: {
      type: Sequelize.DATE,
    },
    postTitle: {
      type: Sequelize.STRING(250),
      allowNull: false,
    },
    postContent: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Post;
