import express, { type Express, type Request, type Response } from 'express';
import cors from 'cors';
const app: Express = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
