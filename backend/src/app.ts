import express, { Request, Response } from 'express';
import animeRoute from "./routes/anime.route";

const app = express();
const port = 3000;


app.get("/", (req: Request, res: Response): void => {
  res.send("Server setup ts");
})

//ROUTES

app.use("/api/anime", animeRoute);

app.listen(port, (): void => {
  console.log(`Server is listing on http://localhost:${port}`);
})
