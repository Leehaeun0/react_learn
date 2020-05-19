import React from "react";
import { initailState } from "../Reducer/Reducer";

export const SkillContext = React.createContext();

export function ContextProvider({ children }) {
  // const initailState = [
  //   { id: 1, title: "HTML", description: "HTML is ..." },
  //   { id: 2, title: "JS", description: "JS is ..." },
  //   { id: 3, title: "React", description: "React is ..." },
  // ];

  return (
    <SkillContext.Provider value={initailState}>
      {children}
    </SkillContext.Provider>
  );
}
