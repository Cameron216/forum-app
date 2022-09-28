import express, { Express } from 'express';
import dotenv from 'dotenv';
const cors = require('cors');

const sequelize = require('./config/db.config');

import { router as postRouter } from './routes/post';
import { router as userRouter } from './routes/user';
import Logger from './lib/logger';

const User = require('./models/user.model');
const Post = require('./models/post.model');

dotenv.config();

const app: Express = express();

const port = process.env.PORT;

app.use(cors());

app.use(express.json());

app.use('/post', postRouter);
app.use('/user', userRouter);

Post.belongsTo(User, {
  foreignKey: 'userId',
  constraints: true,
  onDelete: 'CASCADE',
});
User.hasMany(Post, {
  foreignKey: 'userId',
});

sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      Logger.info(`Server listening on port: ${port}`);
    });
  })
  .catch((err: any) => {
    Logger.error(err);
  });
