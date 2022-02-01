
import { NavigationType, useLocation, useNavigate } from "react-router-dom";
import React from 'react';
import { useState, useEffect } from "react"; 
import searchApi from '../../services/api'
import SearchBar from "../../components/SearchBar/SearchBar";
import MoviesList from '../../components/MoviesList/MoviesList'

export default function MoviesPage() {
 const [movies, setMovies] = useState([]);
 const [error, setError] = useState(null);
 const [searchQuery, setSearchQuery] = useState("");
 const location = useLocation();
 const navigation = useNavigate();
 const query = new URLSearchParams(location.search).get("query") ?? "";
  

    const onSubmit = (searchQuery) => {
        navigation({ ...location, search: `query=${searchQuery}` })
        console.log(location);
    };
    // let onSubmit = (searchQuery) = {
    //     navigation({ ...location, search: `query=${query}` })
    // }

  useEffect(() => {
   
      if (!query) return;
        searchApi
            .fetchSearchMovie(query)
            .then(({ results }) => {
                // console.log(results);
                // if (results.length === 0) {
                //     setError(`No results were found for ${query}!`);
                //     return;
                // }
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

// export default function MoviesPage() {
//  const [movies, setMovies] = useState([]);
//     const [error, setError] = useState(null);
//      const [searchQuery, setSearchQuery] = useState("");
//  const location = useLocation();
//  const navigation = useNavigate();
    

// //     let setSearchQuery = (query) => {
// //         navigation({ ...location, search: `query=${query}` })
// //     };
    

//   useEffect(() => {
//    const query = new URLSearchParams(location.search).get("query") ?? "";
//       if(query){
//         searchApi
//             .fetchSearchMovie(query)
//             .then(({ results }) => {
//                 console.log(results);
//                 // if (results.length === 0) {
//                 //     setError(`No results were found for ${query}!`);
//                 //     return;
//                 // }
//                 // setMovies(results);
//                 // setSearchQuery(query)
//             })
//             .catch(error => setError(error.message))
        
//       }
//   }, [location.search]);
    
    
//     const onChangeQuery = (newQuery) => {
//         console.log(newQuery);
//     if (searchQuery === newQuery) {
//       return;
//     }
//     if (!searchQuery) return;

//    searchApi
//       .fetchSearchMovie(newQuery)
//        .then(({ results }) => {
//           console.log(results);
//         if (results.length === 0) {
//           setError(`No results were found for ${searchQuery}!`);
         
//           return;
//         }
//         setMovies(results);
       
//       })
//       .catch((error) => {
//         setError(error);
       
//       });
//     setSearchQuery(newQuery);
//     setError(null);
   
//   };

//   const moviesListNotEmpty = movies.length !== 0;

//   return (
//     <>
//       <SearchBar
//         onSubmit={onChangeQuery}
//         query={searchQuery}
//         changeQuery={setSearchQuery}
//       />
//      { moviesListNotEmpty && (
//           <MoviesList movies={movies} />
//       )}
//     </>
//   );
// }
    