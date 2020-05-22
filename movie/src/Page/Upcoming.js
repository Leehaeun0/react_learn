import React, { useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../Context/Context";

const Upcoming = ({ history }) => {
  console.log("@@Render Upcoming page");

  const MovieContextValue = useContext(MovieContext);
  const { state, getUpcoming, giveLoding } = MovieContextValue;

  const isRender = useRef();

  useEffect(() => {
    console.log("useEffect upcoming");
    giveLoding();
    setTimeout(() => getUpcoming(), 500);
  }, []);

  return (
    <>
      <ul className="upcoming_list" ref={isRender}>
        {state.loading ? (
          <>
            <img
              className="loding_img"
              src="https://media.giphy.com/media/3ofT5SYZUlquxDH6Pm/giphy.gif"
              alt="upcoming_loding"
            />
            <h3 className="loding_msg">LODING...</h3>
          </>
        ) : (
          state.getUpcoming.map((v) => {
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
          })
        )}
      </ul>
      <button className="gohome_btn" onClick={() => history.push("/")}>
        HOME
      </button>
    </>
  );
};

export default Upcoming;
