import express, { Express } from 'express';
import dotenv from 'dotenv';

import { router as postRouter } from './routes/post';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

app.use('/post', postRouter);

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
