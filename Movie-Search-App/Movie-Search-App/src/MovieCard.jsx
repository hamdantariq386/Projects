import React from "react";

const MovieCard = ({ movie }) => {
    return (
        <>
          <div className="movie">
            <div>
              <p>{movie.Year}</p>
            </div>
            <div className="">
              <img src={movie.Poster} alt={movie.Title} />
            </div>
            <div className="">
              <span>{movie.Type}</span>
              <h3>{movie.Title}</h3>
            </div>
          </div>
        </>
  )
} 

export default MovieCard;