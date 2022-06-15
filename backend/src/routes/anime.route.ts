import express, { Request, Response } from 'express';
import { animeResume } from "../controllers/anime.controller";

const router = express.Router();


router.get("/", animeResume);

export default router;
