import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../Context/Context";

const Search = ({ history }) => {
  const MovieContextValue = useContext(MovieContext);
  const { state, getSearch, pushHistory } = MovieContextValue;

  console.log("@@Render Serch page");

  const renderHistory = () => {
    return state.searchHistory.map((v) => (
      <li onClick={(e) => getSearch(e.target.textContent)}>{v}</li>
    ));
  };

  return (
    <>
      <input
        className="search_input"
        type="text"
        onChange={(e) => getSearch(e.target.value)}
        onKeyPress={pushHistory}
      />
      <ul className="history_list">{renderHistory()}</ul>
      <ul className="popular_list">
        {state.getSearch.map((v) => {
          if (!v.poster_path) return;
          return (
            <li key={v.id} className="populars">
              <Link to={"/" + v.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${v.poster_path}`}
                  alt={v.title}
                />
                <strong>{v.title}</strong>
                <span>
                  <i className="fas fa-thumbs-up"></i>
                  &nbsp;{v.vote_count}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      <button className="gohome_btn" onClick={() => history.push("/")}>
        HOME
      </button>
    </>
  );
};

// export default Search;
export default React.memo(Search);
