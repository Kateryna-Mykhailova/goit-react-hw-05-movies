
import { useParams, Link, Outlet, useLocation, useNavigate} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import searchApi from '../../services/api'
import styles from '../MovieDetailsPage/MovieDetailsPage.module.css'

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
        )
        .catch(error => console.log(error));
      return;
    }, [movieId])


  const onGoBack = () => {
  //  if(location?.state?.from?.search !== ''){navigate(`/movies${location.state.from}`)}  
    // location?.state?.from?.search !== '' ? navigate(`/movies${location.state.from.search}`) : navigate(-1)
    // if (`/movies/${movieId}/cast` && `/movies/${movieId}/reviews`) {navigate(-2)  }
    // location?.state?.from ? navigate(-1) : navigate("/")
     navigate( location?.state?.from ?? "/")
   }
  
    return (
      <>
        {movieDetails && (<div className={styles.Movie_container}>
          <button type='button' onClick={onGoBack} className={styles.GoBackBtn}>Go Back</button>
            <img  src={movieDetails.src} alt={movieDetails.title}  />
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
                    <li className={styles.List_item}><Link className={styles.Link}
                    to={`/movies/${movieId}/cast`}
                    key={movieId}
                    state={location.state}>
                    Cast </Link></li>
                    <li className={styles.List_item}><Link className={styles.Link}
                    to={`/movies/${movieId}/reviews`}
                    key={movieId}
                    state={location.state}>
                    Reviews </Link></li>
                    <Outlet/>
                </ul>
                
      </nav>
        </>
    )
}
 