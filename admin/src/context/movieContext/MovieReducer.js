export const MovieReducer = (state, action) => {
  switch (action.type) {
    // GET MOVIES
    case "GET_MOVIES_START": {
      return { movies: [], isFetching: true, isError: false };
    }
    case "GET_MOVIES_SUCCESS": {
      return {
        movies: action.payload,
        isFetching: false,
        isError: false,
      };
    }
    case "GET_MOVIES_FAILURE": {
      return {
        movies: [],
        isFetching: false,
        isError: true,
      };
    }

    // DELETE MOVIES
    case "DELETE_MOVIE_START": {
      return { ...state, isFetching: true, isError: false };
    }
    case "DELETE_MOVIE_SUCCESS": {
      return {
        movies: state.movies.filter((movie) => movie._id !== action.payload),
        isFetching: false,
        isError: false,
      };
    }
    case "DELETE_MOVIE_FAILURE": {
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    }

    // CREATE MOVIES

    case "CREATE_MOVIE_START": {
      return {
        ...state,
        isFetching: true,
        isError: false,
      };
    }
    case "CREATE_MOVIE_SUCCESS": {
      return {
        movies: [...state.movies, action.payload],
        isFetching: true,
        isError: false,
      };
    }
    case "CREATE_MOVIE_FAILURE": {
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    }
    // UPDATE MOVIES

    case "UPDATE_MOVIE_START": {
      return {
        ...state,
        isFetching: true,
        isError: false,
      };
    }
    case "UPDATE_MOVIE_SUCCESS": {
      return {
        movies: state.movies.map(
          (movie) => movie._id === action.payload._id && action.payload
        ),
        isFetching: true,
        isError: false,
      };
    }
    case "UPDATE_MOVIE_FAILURE": {
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    }

    default:
      return { ...state };
  }
};
