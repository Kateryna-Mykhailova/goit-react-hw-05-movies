import React from 'react';
import {Link, useLocation } from "react-router-dom";
const MoviesList = ({movies}) => {
    const location = useLocation();
    return (
       
        <ul>
        {movies.map(movie => (
          <div>
            {movie.original_title && (<li key={movie.id}>
                   <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.original_title}
                </Link>
              </li>)}
            </div>
                )
            )}
        </ul>
    )
}
export default MoviesList;