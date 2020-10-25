// custom hook always start with use imp...
import { useState, useEffect, useRef } from 'react';
import API from '../API';

///    Aways give initial state
const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (page, searchTerm = '') => {
    try {
      setError(false);
      setLoading(true); ///show loading spinners

      const movies = await API.fetchMovies(searchTerm, page);

      setState((prev) => ({
        ...movies,

        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(1);
  }, []); /// [] run once

  return {
    state: state,
    loading,
    error,
  };
};
