import './App.css';
import styles from './App.css';
import { Route, Routes } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import { lazy, Suspense } from 'react';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() =>
  import('./views/HomePage/HomePage.jsx' /* webpackChunkName: "home-page" */),
);
const Cast = lazy(() =>
  import('./views/Cast/Cast.jsx' /* webpackChunkName: "cast-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage/MovieDetailsPage.jsx' /* webpackChunkName: "movie-details-page" */
  ),
);
const NotFoundPage = lazy(() =>
  import(
    './views/NotFoundPage/NotFoundPage.jsx' /* webpackChunkName: "not-found-page" */
  ),
);
const MoviesPage = lazy(() =>
  import(
    './views/MoviesPage/MoviesPage.jsx' /* webpackChunkName: "movies-page" */
  ),
);
const Reviews = lazy(() =>
  import('./views/Reviews/Reviews.jsx' /* webpackChunkName: "reviews-page" */),
);

export default function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
