import React, { useReducer, useEffect } from "react";
import { movies } from "../Api/Api";
import { reducer, initialState } from "../Reducer/Reducer";
import { Link } from "react-router-dom";

const Search = ({ history }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getSearch = async (value) => {
    const { data } = await movies.searchMovies(value);
    console.log(data.results);
    dispatch({ type: "SEARCH_MOVIES", getSearch: data.results });
  };

  useEffect(() => {
    // getSearch();
  }, []);

  return (
    <>
      {console.log("state", state.getSearch)}
      <input
        className="search_input"
        type="text"
        onChange={(e) => getSearch(e.target.value)}
      />
      <ul className="popular_list">
        {state.getSearch.map((v) => (
          <li key={v.id} className="populars">
            <Link to={"/Details/" + v.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${v.poster_path}`}
                alt={v.title}
              />
              <strong>{v.title}</strong>
              <span>{v.vote_count}</span>
            </Link>
          </li>
        ))}
      </ul>
      <button className="gohome_btn" onClick={() => history.push("/")}>
        HOME
      </button>
    </>
  );
};

export default Search;
