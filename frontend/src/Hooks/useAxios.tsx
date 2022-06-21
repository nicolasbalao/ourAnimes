import { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';


const useAxios = (url: string) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);


  const fetchData = async (url: string) => {
    try {
      const result = await axios.get(url);
      setResponse(result);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return { response, error, loading };
}

export default useAxios;
