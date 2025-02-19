// src/components/MovieCard.jsx
import React from "react";
import '../style.css';

const MovieCard = ({ title, poster, streamingOptions }) => {
  return (
    <div className="movie-card">
      <img src={poster} alt={title} />
      <h3>{title}</h3>
      <p>Stream on: {streamingOptions}</p>
      <button>Watch Now</button>
    </div>
  );
};

export default MovieCard;