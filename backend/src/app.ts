import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response): void => {
  res.send("Server setup ts");
})

app.listen(port, (): void => {
  console.log(`Server is listing on http://localhost:${port}`);
})
