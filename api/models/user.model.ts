import Sequelize from 'sequelize';

import { sequelize } from '../config/db.config';

export const User = sequelize.define(
  'Users',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    dateJoined: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    displayName: {
      type: Sequelize.STRING(50),
    },
    profilePicture: {
      type: Sequelize.STRING(150),
    },
  },
  {
    timestamps: false,
  }
);
