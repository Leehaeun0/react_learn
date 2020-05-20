import React, { useEffect, useContext, useReducer } from "react";
import { Link } from "react-router-dom";
import { movies } from "../Api/Api";
import { reducer, initialState } from "../Reducer/Reducer";
import SubRouter from "../Router/SubRouter";

const Popular = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPopular = async () => {
    const { results: popularData } = await movies.getPopular();
    // const { page } = await movies.getPopular();
    console.log(popularData);
    dispatch({ type: "GET_POPULAR", getPopular: popularData });
  };

  useEffect(() => {
    getPopular();
    return () => {};
  }, []);

  // if () getPopular(n);

  return (
    <>
      <ul className="popular_list">
        {state.getPopular.map((v) => (
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
      <SubRouter />
    </>
  );
};

export default Popular;
