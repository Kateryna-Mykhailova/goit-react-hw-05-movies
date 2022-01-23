function fetchMovies() {
  // console.log(page);
  return fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=30d28e0664c735075082dfc414f074e3`,
  ).then(response => {
    if (response.ok) {
      return response.json();
      // console.log(response.json());
    }
    // return Promise.reject(
    //   new Error(`There is no information for this query`),
    // );
  });
}

function fetchMovieDetails(movieId) {
  // console.log(page);
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=30d28e0664c735075082dfc414f074e3&language=en-US`,
  ).then(response => {
    if (response.ok) {
      return response.json();
      // console.log(response.json());
    }
    // return Promise.reject(
    //   new Error(`There is no information for this query`),
    // );
  });
}

const api = {
  fetchMovies,
  fetchMovieDetails,
};

export default api;

//was
// function fetchImage() {
//   // console.log(page);
//   return fetch(
//     `https://api.themoviedb.org/3/trending/all/day?api_key=30d28e0664c735075082dfc414f074e3`,
//   ).then(response => {
//     if (response.ok) {
//       return response.json();
//       // console.log(response.json());
//     }
//     // return Promise.reject(
//     //   new Error(`There is no information for this query`),
//     // );
//   });
// }
// const api = {
//   fetchImage,
// };

// export default api;

//hw 4
// function fetchImage(searchName, page) {
//   // console.log(page);
//   return fetch(
//     `https://pixabay.com/api/?q=${searchName}&page=${page}&key=23204413-d213403835507960634485f04&image_type=photo&orientation=horizontal&per_page=12`,
//   ).then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//     return Promise.reject(
//       new Error(`There is no information for this query ${searchName}`),
//     );
//   });
// }

// const api = {
//   fetchImage,
// };

// export default api;
