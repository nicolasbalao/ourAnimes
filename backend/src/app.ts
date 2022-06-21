import express, { Application } from 'express';
import animeRoute from "./routes/anime.route";
import cors from 'cors'

const app: Application = express();
const port: number = 3001;

//CORS
app.use(cors({ origin: true }));


//ROUTES

app.use("/api/anime", animeRoute);

app.listen(port, (): void => {
  console.log(`Server is listing on http://localhost:${port}`);
})
