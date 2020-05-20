import React, { useReducer, useEffect } from "react";
import { movies } from "../Api/Api";
import { reducer, initialState } from "../Reducer/Reducer";

const Search = ({ history }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getSearch = async () => {
    const test = await movies.searchMovies();
    console.log(test);
  };

  useEffect(() => {
    getSearch();
  });
  return (
    <>
      <h2>Search Page</h2>
      <button className="gohome_btn" onClick={() => history.push("/")}>
        HOME
      </button>
    </>
  );
};

export default Search;
