import React from 'react';
import { useParams } from 'react-router-dom';
import Movies from '../Data/Movies';

function MovieDetail() {
  const { id } = useParams();
  const movie = Movies.find((m) => m.id === id);

  if (!movie) return <p>Movie not found.</p>;

  return (
    <div>
      <h2>{movie.title} ({movie.year})</h2>
      <p>{movie.description}</p>
    </div>
  );
}

export default MovieDetail;
