import express, { Express } from 'express';
import dotenv from 'dotenv';
const cors = require('cors');

const sequelize = require('./config/db.config');

import { router as postRouter } from './routes/post';
import Logger from './lib/logger';

dotenv.config();

const app: Express = express();

const port = process.env.PORT;

app.use(cors());

app.use(express.json());

app.use('/post', postRouter);

sequelize
  .sync()
  .then((result: any) => {
    console.log(result);
    app.listen(port, () => {
      Logger.info(`Server listening on port: ${port}`);
    });
  })
  .catch((err: any) => {
    Logger.error(err);
  });
