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