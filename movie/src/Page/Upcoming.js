import React, { useReducer, useEffect } from "react";
import { movies } from "../Api/Api";
import { reducer, initialState } from "../Reducer/Reducer";

const Upcoming = ({ history }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getUpcoming = async () => {
    const { results: getUpcoming } = await movies.getUpcoming();
    console.log(getUpcoming);
    dispatch({ type: "GET_UPCOMMIMG", getUpcoming });
  };

  useEffect(() => {
    getUpcoming();
    return () => {};
  }, []);
  return (
    <>
      <ul className="upcoming_list">
        {console.log(state)}
        {state.getUpcoming.map((v) => {
          if (v.id === 682134) {
            return (
              <li key={v.id} className="upcomings">
                <img
                  src="https://img.reelgood.com/content/movie/31d7f0fa-038a-4f12-afd4-42eb8bbb446d/poster-780.jpg"
                  alt={v.title}
                />
                <strong>{v.title}</strong>
                <span>{v.vote_count}</span>
              </li>
            );
          }
          return (
            <li key={v.id} className="upcomings">
              <img
                src={`https://image.tmdb.org/t/p/w500${v.poster_path}`}
                alt={v.title}
              />
              <strong>{v.title}</strong>
              <span>{v.vote_count}</span>
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

export default Upcoming;
