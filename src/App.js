import './App.css';
import styles from './App.css';
import { Route, Routes } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import HomePage from './views/HomePage/HomePage';
// import Cast from './views/Cast/Cast';
// import MovieDetailsPage from './views/MovieDetailsPage/MovieDetailsPage';
// import MoviesPage from './views/MoviesPage/MoviesPage';
// import NotFoundPage from './views/MovieDetailsPage/MovieDetailsPage';
// import Reviews from './views/Reviews/Reviews';

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
  // const [searchInfo, setSearchInfo] = useState([]);

  // return (

  //   useEffect(() => {

  //     searchApi
  //       .fetchImage()
  //       .then(data =>{setSearchInfo(prevState => [data.results])}
  //         // console.log(data.results)
  //       )
  //       // .catch(error => error.message);
  //     return;
  //   }, []),

  // );
}

// export default function App() {
//   // const [searchName, setSearchName] = useState('');
//   // const [searchInfo, setSearchInfo] = useState([]);
//   // const [error, setError] = useState(null);
//   // const [status, setStatus] = useState('idle');
//   // const [searchPage, setSearchPage] = useState(1);
//   // const [showModal, setShowModal] = useState(false);
//   // const [largeImgUrl, setLargeImgUrl] = useState('');

//   // useEffect(() => {
//   //   if (searchName === '') {
//   //     return;
//   //   }
//   //   setStatus('pending');
//   //   searchApi
//   //     .fetchImage(searchName, searchPage)
//   //     .then(data => {
//   //       setSearchInfo(prevState => [...prevState, ...data.hits]);
//   //       setStatus('resolved');
//   //       scrollFunction();
//   //       // console.log(searchPage);
//   //     })
//   //     .catch(error => setError(error.message));
//   //   return;
//   // }, [searchName, searchPage]);

//   // const handleFormSubmit = searchName => {
//   //   setSearchName(searchName);
//   //   setSearchPage(1);
//   //   setSearchInfo([]);
//   // };

//   // const scrollFunction = () => {
//   //   window.scrollTo({
//   //     top: document.documentElement.scrollHeight,
//   //     behavior: 'smooth',
//   //   });
//   // };

//   // const handleClick = () => {
//   //   loadMoreFunction();
//   // };

//   // const loadMoreFunction = () => {
//   //   setSearchPage(prevState => prevState + 1);
//   // };

//   // const onCloseModal = () => {
//   //   setShowModal(false);
//   // };

//   // const onOpenModal = () => {
//   //   setShowModal(true);
//   // };

//   // const onImgClick = e => {
//   //   // console.log(e.target.dataset);
//   //   if (e.target.nodeName !== 'IMG') {
//   //     return;
//   //   }
//   //   setLargeImgUrl(e.target.dataset.url);
//   // };

//   return (

//     10
//     // <div className={styles.App}>
//     //   <Searchbar onSubmit={handleFormSubmit} />
//     //   {showModal && (
//     //     <Modal onCloseModal={onCloseModal}>
//     //       <img src={largeImgUrl} alt="" />
//     //     </Modal>
//     //   )}
//     //   <ToastContainer position="top-center" autoClose={2000} />
//     //   {status === 'idle' && <div>Enter something</div>}
//     //   {status === 'pending' && (
//     //     <Loader
//     //       type="BallTriangle"
//     //       color="#00BFFF"
//     //       height={100}
//     //       width={100}
//     //       timeout={3000}
//     //     />
//     //   )}
//     //   {status === 'rejected' && <h1>{error}</h1>}
//     //   <ImageGallery
//     //     images={searchInfo}
//     //     onClick={onOpenModal}
//     //     onImgClick={onImgClick}
//     //   />
//     //   {status === 'resolved' && searchInfo.length > 0 && (
//     //     <Button onClick={handleClick} />
//     //   )}
//     // </div>
//   );
// }
