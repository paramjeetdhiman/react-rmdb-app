// custom hook always start with use imp...
import { useState, useEffect, useRef } from 'react';
import API from '../API';
import { isPersistedState } from '../helpers';

///    Aways give initial state
const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  console.log(searchTerm);

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

  ///Initial render and search

  useEffect(() => {
    if (!searchTerm) {
      const sessionState = isPersistedState('homeState');
      if (sessionState) {
        console.log('Grabbing from sessionStorage');
        setState(sessionState);
        return;
      }
    }
    console.log('Grabbing from API');

    setState(initialState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]); /// [] run once

  ///// Load More
  useEffect(() => {
    if (!isLoadingMore) return;
    fetchMovies(state.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, searchTerm, state.page]);

  /// write to session storage
  useEffect(() => {
    if (!searchTerm) sessionStorage.setItem('homeState', JSON.stringify(state));
  }, [searchTerm, state]);

  return {
    state: state,
    loading,
    error,
    setSearchTerm,
    searchTerm,
    setIsLoadingMore,
  };
};
