import Sequelize from 'sequelize';

import { sequelize } from '../config/db.config';

export const Post = sequelize.define(
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
