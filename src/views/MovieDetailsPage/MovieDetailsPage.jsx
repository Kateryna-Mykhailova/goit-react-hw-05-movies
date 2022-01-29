
import { useParams, NavLink, Link, Outlet, useLocation, useNavigate} from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import searchApi from '../../services/api'

export default function MovieDetailsPage() {
    const [movieDetails, setMovieDetails] = useState(null)
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
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

// console.log(movieDetails);
  const onGoBack = () => {
  navigate(-1)
}
    return (
      <>
        
        {movieDetails && (<div >
          <button type='button' onClick={onGoBack}>Go Back</button>
            <img  src={movieDetails.src} alt={movieDetails.title} />
            <div >
              <h2 >{movieDetails.title}</h2>
              <h3 >User Score</h3>
              <p>{movieDetails.score}</p>
              <h3>Overview</h3>
              <p>{movieDetails.overview}</p>
              <h3 >Genres</h3>
              <ul>
                {movieDetails.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))} 
              </ul>
            </div>
            </div>)}
            <nav>
                <ul>
                    <li><Link
                    to={`/movies/${movieId}/cast`}
                    key={movieId}
                >Cast </Link></li>
                    <li><Link
                    to={`/movies/${movieId}/reviews`}
                    key={movieId}
                >Reviews </Link></li>
                    <Outlet/>
                </ul>
    
                
                
      {/* <NavLink
              to={{ 
                pathname:,
                state: {
                  from: history.location.state.from,
                  label: "back to movies from cast",
                },
              }}
         style={({ isActive }) => {
               return {
               display: "block",
               margin: "1rem 0",
              color: isActive ? "red" : "" }}}
            >Cast</NavLink> */}
                
                
      </nav>
        </>
    )
}
 