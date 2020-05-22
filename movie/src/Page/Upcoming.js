import React, { useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../Context/Context";

const Upcoming = ({ history }) => {
  console.log("@@Render Upcoming page");

  const MovieContextValue = useContext(MovieContext);
  const { state, getUpcoming, giveLoading, deleteLoading } = MovieContextValue;

  const isRender = useRef();

  useEffect(() => {
    if (state.getUpcoming.length) return;

    console.log("useEffect upcoming");
    giveLoading();
    setTimeout(() => getUpcoming(), 500);
    return () => deleteLoading();
  }, []);

  if (state.loading)
    return (
      <>
        <img
          className="loding_img"
          src="https://media.giphy.com/media/jKf1rYJiNqcve/giphy.gif"
          alt="upcoming_loding"
        />
        <h3 className="loding_msg">LOADING...</h3>
      </>
    );

  return (
    <>
      <ul className="upcoming_list" ref={isRender}>
        {state.getUpcoming.map((v) => {
          return (
            <li key={v.id} className="upcomings">
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

export default React.memo(Upcoming);
