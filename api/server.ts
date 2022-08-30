import express, { Express } from 'express';
import dotenv from 'dotenv';

import { router as postsRouter } from './routes/posts';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use('/posts', postsRouter);

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
