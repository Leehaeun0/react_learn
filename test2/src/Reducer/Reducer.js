// import React, { useReducer } from "react";

export const initailState = [
  { id: 1, title: "HTML", description: "HTML is ..." },
  { id: 2, title: "JS", description: "JS is ..." },
  { id: 3, title: "React", description: "React is ..." },
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      return state;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
