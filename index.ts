import express, { type Request, type Response } from 'express';
const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
