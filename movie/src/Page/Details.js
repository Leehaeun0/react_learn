import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../Context/Context";

const Details = ({ history }) => {
  const MovieContextValue = useContext(MovieContext);
  const { state, getDetails, cleanDetails, giveLoding } = MovieContextValue;

  const params = useParams();
  const id = params.content_id;

  console.log("@@Render Details page");

  useEffect(() => {
    giveLoding();
    getDetails(id);
    return () => {
      cleanDetails();
    };
  }, []);

  return (
    <>
      {console.log("22", state.getDetails)}
      {/* state.loding */}
      {!state.getDetails.overview
        ? ""
        : (() => {
            const info = state.getDetails;
            return (
              <div className="details_wrap">
                <img
                  src={`https://image.tmdb.org/t/p/w500${info.poster_path}`}
                  alt={info.title}
                />
                <h3 className="detail_title">{info.title}</h3>
                <span className="detail_date">({info.release_date})</span>
                <ul>
                  {console.log(info.genres)}
                  {info.genres
                    ? info.genres.map((v) => (
                        <li key={v.id} className="genres">
                          {v.name}
                        </li>
                      ))
                    : ""}
                </ul>
                <p>{info.overview}</p>
                <button className="gohome_btn" onClick={() => history.goBack()}>
                  BACK
                </button>
              </div>
            );
          })()}
    </>
  );
};

export default Details;
