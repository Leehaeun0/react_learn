import React, { useReducer } from "react";
import { NavLink } from "react-router-dom";
import SubRouter from "../Router/SubRouter";

export const MyContext = React.createContext();

const contents = [
  { id: 1, title: "HTML", description: "HTML is ..." },
  { id: 2, title: "JS", description: "JS is ..." },
  { id: 3, title: "React", description: "React is ..." },
];

const reducer = (state, action) => {
  switch (action.type) {
  }
};

const Skill = () => {
  const [state, dispatch] = useReducer(reducer, contents);
  // const contents = [
  //   { id: 1, title: "HTML", description: "HTML is ..." },
  //   { id: 2, title: "JS", description: "JS is ..." },
  //   { id: 3, title: "React", description: "React is ..." },
  // ];
  let skillList = [];
  for (var i = 0; i < contents.length; i++) {
    skillList.push(
      <li key={i}>
        <NavLink to={"/Skill/" + contents[i].id}>{contents[i].title}</NavLink>
      </li>
    );
  }
  return (
    <MyContext.Provider value={state}>
      <h2>Skill Page</h2>
      <hr />
      <ul>{skillList}</ul>
      <hr />
      <SubRouter />
    </MyContext.Provider>
  );
};

export default Skill;
