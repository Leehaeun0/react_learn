import React, { useEffect, useContext, useReducer } from "react";
import { movies } from "../Api/Api";
import { reducer, initialState } from "../Reducer/Reducer";

const Popular = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPopular = async () => {
    const { results: popularData } = await movies.getPopular();
    // const { page } = await movies.getPopular();
    console.log(popularData);

    // const test = await movies.getMovie(385103);
    // console.log(
    //   test,
    //   test.data.overview,
    //   test.data.original_title,
    //   test.data.release_date
    // );

    dispatch({ type: "GET_POPULAR", getPopular: popularData });
  };

  useEffect(() => {
    getPopular();
    return () => {};
  }, []);

  return (
    <>
      <ul className="popular_list">
        {state.getPopular.map((v, i) => (
          <li key={v.id} className="populars">
            <img
              src={`https://image.tmdb.org/t/p/w500${v.poster_path}`}
              alt={v.title}
            />
            <strong>{v.title}</strong>
            <span>{v.vote_count}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Popular;
