import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../Context/Context";

const Popular = () => {
  const MovieContextValue = useContext(MovieContext);
  const { state, getPopular, giveLoding } = MovieContextValue;

  console.log("@@Render Popular page");

  useEffect(() => {
    console.log("useEffect popular");
    giveLoding();
    getPopular();
  }, []);

  return (
    <>
      <ul className="popular_list">
        {state.getPopular.map((v) => (
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
        ))}
      </ul>
    </>
  );
};

export default Popular;
