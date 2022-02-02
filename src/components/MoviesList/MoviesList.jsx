import React from 'react';
import { Link, useLocation } from "react-router-dom";
import styles from "../MoviesList/MoviesList.module.css"
import PropTypes from "prop-types";

const MoviesList = ({movies}) => {
    const location = useLocation();
    return (
       
        <ul className={styles.List}>
        {movies.map(movie => (
          <div>
            {movie.original_title && (<li key={movie.id} className={styles.List_item}>
                   <Link to={`/movies/${movie.id}`} state={{ from: location }} className={styles.Movies_list}>
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

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};