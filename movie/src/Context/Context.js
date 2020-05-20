import React from "react";
import { initialState } from "../Reducer/Reducer";

export const MovieContext = React.createContext();

export function ContextProvider({ children }) {
  const MovieValue = { getPopular: initialState.getPopular };

  return (
    <MovieContext.Provider value={MovieValue}>{children}</MovieContext.Provider>
  );
}
