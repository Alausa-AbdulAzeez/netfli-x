export const ListReducer = (state, action) => {
  switch (action.type) {
    // GET MOVIES
    case "GET_LISTS_START": {
      return { lists: [], isFetching: true, isError: false };
    }
    case "GET_LISTS_SUCCESS": {
      return {
        lists: action.payload,
        isFetching: false,
        isError: false,
      };
    }
    case "GETLISTSS_FAILURE": {
      return {
        lists: [],
        isFetching: false,
        isError: true,
      };
    }

    // DELETE LIST
    case "DELETE_LIST_START": {
      return { ...state, isFetching: true, isError: false };
    }
    case "DELETE_LIST_SUCCESS": {
      return {
        lists: state.lists.filter((list) => list._id !== action.payload),
        isFetching: false,
        isError: false,
      };
    }
    case "DELETE_LIST_FAILURE": {
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    }

    // CREATE MOVIES

    case "CREATE_LIST_START": {
      return {
        ...state,
        isFetching: true,
        isError: false,
      };
    }
    case "CREATE_LIST_SUCCESS": {
      return {
        lists: [...state.lists, action.payload],
        isFetching: true,
        isError: false,
      };
    }
    case "CREATE_LIST_FAILURE": {
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    }
    // // UPDATE MOVIES

    // case "UPDATE_MOVIE_START": {
    //   return {
    //     ...state,
    //     isFetching: true,
    //     isError: false,
    //   };
    // }
    // case "UPDATE_MOVIE_SUCCESS": {
    //   return {
    //     movies: state.movies.map(
    //       (movie) => movie._id === action.payload._id && action.payload
    //     ),
    //     isFetching: true,
    //     isError: false,
    //   };
    // }
    // case "UPDATE_MOVIE_FAILURE": {
    //   return {
    //     ...state,
    //     isFetching: false,
    //     isError: true,
    //   };
    // }

    default:
      return { ...state };
  }
};
