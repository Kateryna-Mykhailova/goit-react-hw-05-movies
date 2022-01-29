import React from 'react';
import {Link, useLocation } from "react-router-dom";
const MoviesList = ({movies}) => {
   
    return (
       
        <ul>
        {movies.map(movie => (
          <div>
            {movie.original_title && (<li key={movie.id}>
                   <Link to={`/movies/${movie.id}`} >
                  {movie.original_title}
                </Link>
              </li>)}
            </div>
            
                //  

               
                )
            
        // <li key={movie.id}>
                    //     <p>{movie.original_title}</p>
                       
                    // </li>
            
            )}
        </ul>
    )
}
export default MoviesList;