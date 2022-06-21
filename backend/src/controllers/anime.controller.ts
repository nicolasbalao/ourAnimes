import { Request, Response } from 'express';
import { anilistApi } from '../utils/callApi';


export const animeResume = async (req: Request, res: Response) => {

  interface variablesInter {
    nexSeason: string,
    nextYear: number,
    season: string,
    seasonYear: number,
  }

  const getSeason = (d: Date): number => Math.floor((d.getMonth() / 12 * 4)) % 4;


  const variables: variablesInter = {
    nexSeason: ["WINTER", "SPRING", "SUMMER", "AUTUMN"][getSeason(new Date()) + 1],
    nextYear: new Date().getFullYear(),
    season: ["WINTER", "SPRING", "SUMMER", "AUTUMN"][getSeason(new Date())],
    seasonYear: new Date().getFullYear(),
  }

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
    trending:Page(page: 1, perPage: 6 ){
      media(sort: TRENDING_DESC, type:ANIME){
        ${bodyQuery}
      }
    }season:Page(page: 1, perPage: 6){
      media(season: ${variables.season}, seasonYear: ${variables.seasonYear}, sort: POPULARITY_DESC , type: ANIME){
        ${bodyQuery}
      }
    }nextSeason:Page(page: 1, perPage: 6){
      media(season: ${variables.nexSeason}, seasonYear: ${variables.nextYear}, sort: POPULARITY_DESC, type: ANIME){
        ${bodyQuery}
      }
    }popular:Page(page: 1, perPage: 6){
      media(sort: POPULARITY_DESC, type: ANIME){
        ${bodyQuery}
      }
    }top:Page(page: 1, perPage: 10){
      media(sort: SCORE_DESC, type: ANIME){
        ${bodyQuery}
        format,
        endDate{
          year,
          month,
          day,
        },
        startDate{
          year,
          month,
          day,
        }
      }
    }
  }`

  anilistApi(query).then((resp) => res.status(200).json(resp.data)).catch((err) => res.status(400).json({ "Error": err.message }));
}

