import React, { useEffect, useReducer } from "react";
import { useLocation, useParams } from "react-router-dom";
import { movies } from "../Api/Api";
import { reducer, initialState } from "../Reducer/Reducer";

const Details = ({ history }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const params = useParams();
  // console.log("params", params);
  const location = useLocation();
  const id = location.pathname.slice(9);

  const getDetails = async () => {
    const { data } = await movies.getMovie(id);
    console.log(
      data,
      data.overview,
      data.original_title,
      data.release_date,
      data.genres
    );

    dispatch({ type: "GET_DETAILS", getDetails: data });

    return <img src={data.poster_path} alt="" />;
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <>
      {(() => {
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
