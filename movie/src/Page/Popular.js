import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../Context/Context";

const Popular = () => {
  const MovieContextValue = useContext(MovieContext);
  const { state, getPopular, giveLoading, deleteLoading } = MovieContextValue;

  console.log("@@Render Popular page");

  useEffect(() => {
    if (state.getPopular.length) return;
    console.log("useEffect popular");
    giveLoading();
    //  getPopular();
    setTimeout(() => getPopular(), 500);
    return () => deleteLoading();
  }, []);

  if (state.loading)
    return (
      <>
        <img
          className="loding_img"
          src="https://media.giphy.com/media/3ofT5SYZUlquxDH6Pm/giphy.gif"
          alt="upcoming_loding"
        />
        <h3 className="loding_msg">LOADING...</h3>
      </>
    );

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

// export default Popular;
export default React.memo(Popular);
