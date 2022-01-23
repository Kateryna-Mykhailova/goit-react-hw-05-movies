
import { useParams } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import searchApi from '../../services/api'

export default function MovieDetailsPage() {
    const [movieDetails, setMovieDetails] = useState([])
    
    const { movieId } = useParams();
useEffect(() => {

      searchApi
          .fetchMovieDetails(movieId)
             .then(({ poster_path, original_title, popularity, overview, genres }) => {
                 setMovieDetails({
                  src: `https://image.tmdb.org/t/p/w500/${poster_path}`,
                  title: original_title,
                  score: popularity.toFixed(1),
                  overview,
                  genres,
                  }
            )}
        //   .then(({results}) => {
        //       setMovieDetails(results);
        //     //   setTrendingMovies(data.results);
        //       console.log(movieDetails);
        //       console.log(results);
        //   }
       
        )
        .catch(error => console.log(error));
      return;
    }, [movieId])



    return (


      <main style={{ padding: "1rem" }}>
            <p>{`${movieId}`}</p>
</main>
         
       
    )
}
 