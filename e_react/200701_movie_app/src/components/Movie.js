//movie.js

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./movie.css";

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie">
    <Link to={{
      pathname: `/movie/${id}`,
      state: {
        year,
        title,
        summary,
        poster,
        genres
      }
    }}>
    <div className="movie_link">
      <img src={poster} alt={title} title={title} />
      <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul className="movie_genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres">#{genre}</li>
            ))}
        </ul>
        <p className="movie_summary">{summary.slice(0, 135)}...</p>
      </div>
    </div>
    </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

Movie.defaultProps = {
  genres:[]
}

export default Movie;