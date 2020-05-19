import React from "react";
import { initailState, reducer } from "../Reducer/Reducer";

export const MyContext = React.createContext();

export function ContextProvider({ children }) {
  // const initailState = [
  //   { id: 1, title: "HTML", description: "HTML is ..." },
  //   { id: 2, title: "JS", description: "JS is ..." },
  //   { id: 3, title: "React", description: "React is ..." },
  // ];

  return (
    <MyContext.Provider value={initailState}>{children}</MyContext.Provider>
  );
}
