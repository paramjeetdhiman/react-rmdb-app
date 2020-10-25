import React from 'react';

import { Image } from './Thumb.styles';

const Thumb = ({ image, movieId, clickable }) => {
  return (
    <>
      <Image src={image} alt="movie-thumbnail" />
    </>
  );
};

export default Thumb;
