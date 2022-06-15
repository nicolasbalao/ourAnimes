import axios from 'axios';

export const anilistApi = async (query: string) => {

  const url = "https://graphql.anilist.co";

  try {
    const { data } = await axios.post<any>(
      url,
      { query: query },
      {
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json',
        }
      }
    );


    return data;


  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    }
  }


}

