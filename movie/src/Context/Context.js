import React from "react";
import UseFetch from "../Hook/UseFetch";

export const MovieContext = React.createContext();

export function ContextProvider({ children }) {
  const [
    state,
    getPopular,
    getUpcoming,
    getSearch,
    getDetails,
    cleanDetails,
    giveLoding,
  ] = UseFetch();

  const MovieValue = {
    state,
    getPopular,
    getUpcoming,
    getSearch,
    getDetails,
    cleanDetails,
    giveLoding,
  };

  return (
    <MovieContext.Provider value={MovieValue}>{children}</MovieContext.Provider>
  );
}
