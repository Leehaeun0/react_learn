import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../Context/Context";

const Popular = () => {
  const MovieContextValue = useContext(MovieContext);
  const { state, getPopular, giveLoding } = MovieContextValue;
  const isRender = useRef();

  console.log("@@Render Popular page");

  useEffect(() => {
    if ([...isRender.current.children].length) return;
    console.log("useEffect popular");

    giveLoding();
    getPopular();
  }, []);

  return (
    <>
      <ul className="popular_list" ref={isRender}>
        {state.getPopular.map((v) => (
          <li key={v.id} className="populars">
            <Link to={"/" + v.id}>
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
    </>
  );
};

export default Popular;
