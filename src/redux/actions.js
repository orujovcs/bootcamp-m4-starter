export function searchMoveis(movies) {
    return {
        type: "SEARCH_MOVIE",
        payload: {
        movies: movies,
        },
    };
}
export function fetchMovies(name) {
    return function(dispatch){
        const apiKey = "fdd591c8";
        fetch(`http://www.omdbapi.com/?s=${name}&apikey=${apiKey}`)
        .then((res) => res.json())
        .then((data) => {
            dispatch(searchMoveis(data.Search));
        });
    }
}

export function getList(id) {
    return function (dispatch) {
        fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`)
        .then((res) => res.json())
        .then((data) => {
            dispatch(getListIntoState(data.title, data.movies));
            dispatch(getMovieInfoByImdbID(data.movies));
        });
    };
}
export function getMovieInfoToState(movieDetails) {
    return {
        type: "GET_MOVIE_INFO_INTO_STATE",
        payload: {
        movieDetails: movieDetails,
        },
    };
}

export function getMovieInfoByImdbID(movies) {
    return function (dispatch) {
        let movieDetailsArray = [];
        movies.forEach((e) => {
        fetch(`http://www.omdbapi.com/?i=${e}&apikey=8d1d9e0f`)
            .then((res) => res.json())
            .then((data) => {
            movieDetailsArray = [...movieDetailsArray, { ...data }];
            dispatch(getMovieInfoToState(movieDetailsArray));
            });
        });
    };
}
export function getListIntoState(title, movies) {
    return {
      type: "GET_LIST_INTO_STATE",
      payload: {
        title: title,
        listMovies: movies,
      },
    };
  }
  