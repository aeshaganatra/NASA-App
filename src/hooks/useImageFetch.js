import { useState, useEffect } from 'react';
import API from '../API';

export const useImageFetch = (date) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async (date) => {
      try {
        setLoading(true);
        setError(false);

        const photo = await API.fetchNasaOneDayImage(date);
        const random = await API.fetchNasaRandomImage(12);

        setState({
          ...photo,
          random: random
        });

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchMovie(date);
  }, [date]);

  return { state, loading, error };
};
