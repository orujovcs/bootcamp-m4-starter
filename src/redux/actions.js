export function searchMoveis(movies) {
    return {
        type: "SEARCH_MOVIE",
        payload: {
        movies: movies,
        },
    };
}
function getApi(){
    const apiKey = "8d1d9e0f";
    fetch(`http://www.omdbapi.com/?s=shrek&apikey=${apiKey}`)
    .then((res) => res.json())
    .then((data) => {
        dispatch(searchMoveis(data.Search));
    });

}
console.log(getApi);
// export function fetchMovies(name) {
//     return function(dispatch){
//         const apiKey = "fdd591c8";
//         fetch(`http://www.omdbapi.com/?s=${name}&apikey=${apiKey}`)
//         .then((res) => res.json())
//         .then((data) => {
//             dispatch(searchMoveis(data.Search));
//         });
//     }
// }