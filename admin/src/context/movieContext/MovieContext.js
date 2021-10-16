import { createContext, useReducer } from "react";
import { MovieReducer } from "./MovieReducer";

const INITIAL_STATE = {
  movies: [],
  isFetching: false,
  isError: false,
};

export const MovieContext = createContext(INITIAL_STATE);

export const MovieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MovieReducer, INITIAL_STATE);

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        isFetching: state.isFetching,
        isError: state.isError,
        dispatch,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
