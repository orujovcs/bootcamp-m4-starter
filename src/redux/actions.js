export function searchMoveis(movies) {
    return {
      type: "SEARCH_MOVIE",
      payload: {
        movies: movies,
      },
    };
  }