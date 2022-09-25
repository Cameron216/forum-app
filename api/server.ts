import express, { Express } from 'express';
import dotenv from 'dotenv';
const cors = require('cors');

import { router as postRouter } from './routes/post';
import Logger from './lib/logger';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use('/post', postRouter);

app.listen(port, () => {
  Logger.info(`Server listening on port: ${port}`);
});
