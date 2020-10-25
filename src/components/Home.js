import React from 'react';

/// config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

///  components
import HeroImage from './HeroImage';
import SearchBar from './SearchBar/';
import Thumb from './Thumb';

/// hooks
import { useHomeFetch } from '../hooks/useHomeFetch';
import Grid from './Grid';

/// Image
import NoImage from '../images/no_image.jpg';
import Spinner from './Spinner/';

const Home = () => {
  const { state, loading, error, setSearchTerm, searchTerm } = useHomeFetch();

  return (
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}

      <SearchBar setSearchTerm={setSearchTerm} />

      <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      <Spinner />
    </>
  );
};

export default Home;
