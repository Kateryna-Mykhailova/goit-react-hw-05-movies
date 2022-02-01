
import { useLocation, useNavigate } from "react-router-dom";
import React from 'react';
import { useState, useEffect } from "react"; 
import searchApi from '../../services/api'
import SearchBar from "../../components/SearchBar/SearchBar";
import MoviesList from '../../components/MoviesList/MoviesList'

export default function MoviesPage() {
 const [movies, setMovies] = useState([]);
 const [error, setError] = useState(null);
 const location = useLocation();
 const navigation = useNavigate();
 const query = new URLSearchParams(location.search).get("query") ?? "";
  

    const onSubmit = (searchQuery) => {
        navigation({ ...location, search: `query=${searchQuery}` })
        console.log(location);
    };
   
  useEffect(() => {
   
      if (!query) return;
        searchApi
            .fetchSearchMovie(query)
            .then(({ results }) => {
                if (results.length === 0) {
                    setError(`No results were found for ${query}!`);
                    return;
                }
                setMovies(results);
                // setSearchQuery(query)
            })
            .catch(error => setError(error.message))
        
      }, [query]);
    
    
    
  return (
    <>
      <SearchBar
        
        onSubmit={onSubmit}
      />
     { movies && (
          <MoviesList movies={movies} />
      )}
    </>
  );
}

