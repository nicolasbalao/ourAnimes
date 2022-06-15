import { Request, Response } from 'express';
import { anilistApi } from '../utils/callApi';


export const animeResume = async (req: Request, res: Response) => {

  const bodyQuery: string = `
  title{
    romaji,
  },
  coverImage{
    large,
  },
  description,
  episodes,
  nextAiringEpisode{
    episode,
    timeUntilAiring,
  },
  genres,
  averageScore,
  `;

  const query: string = `{
    trending:Page(page: 1, perPage: 3 ){
      media(sort: TRENDING_DESC, type:ANIME){
        ${bodyQuery}
      }
    }

  }`



  anilistApi(query).then((resp) => res.status(200).json(resp.data)).catch((err) => res.status(400).json({ "Error": err.message }));


}

