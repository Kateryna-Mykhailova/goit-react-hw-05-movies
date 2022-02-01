
import { useState, useEffect } from 'react';
import searchApi from '../../services/api'
import MoviesList from '../../components/MoviesList/MoviesList';
export default function HomePage ()  {



const [trendingMovies, setTrendingMovies] = useState([]);
useEffect(() => {

      searchApi
        .fetchMovies()
          .then(({results}) => {
              setTrendingMovies(results);
          }
        )
        .catch(error => console.log(error));
      return;
    }, [])
  return (  

    
      <MoviesList movies={trendingMovies }></MoviesList>
   
    );
}

