const intialState = {
    movies: [],
    favoriteList: [],
    title: "",
    listID: "",
    listMovies: [],
    movieDetails: [],
};

function reducer(state = intialState,action){
    switch(action.type){
        case "SEARCH_MOVIE":
            return{...state,movies:action.payload.movies,};
        
        case "ADD_FAVORITE_FILM":
            const newState = {...state};
            const id = action.payload.id;
            const match = newState.movies.find((item) => item.imdbID === id);
            if(match){
                newState.favoriteList = [...newState.favoriteList, {...match}];
            }
            return newState;
        
        case "GET_MOVIE_INFO_INTO_STATE":
            return {
            ...state,
            movieDetails: action.payload.movieDetails,
            };

        case "GET_LIST_INTO_STATE":
            return {
                ...state,
                title: action.payload.title,
                listMovies: action.payload.listMovies,
            };
    }
}

export default reducer;