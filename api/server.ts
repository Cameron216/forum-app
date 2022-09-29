import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { sequelize } from './config/db.config';

import { router as postRouter } from './routes/post';
import { router as userRouter } from './routes/user';
import { router as authRouter } from './routes/auth';
import Logger from './lib/logger';

import { User } from './models/user.model';
import { Post } from './models/post.model';

dotenv.config();

const app: Express = express();

const port = process.env.PORT;

app.use(cors());

app.use(express.json());

app.use('/post', postRouter);
app.use('/user', userRouter);
app.use(authRouter);

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
