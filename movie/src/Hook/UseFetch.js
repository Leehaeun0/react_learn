import { useReducer, useEffect } from "react";
import { reducer, initialState } from "../Reducer/Reducer";
import { movies } from "../Api/Api";

const UseFetch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPopular = async () => {
    const { results: popularData } = await movies.getPopular();
    console.log("-- get popular doing");
    dispatch({ type: "GET_POPULAR", getPopular: popularData });
  };

  const getUpcoming = async () => {
    // if (state.getUpcoming.lenght) return;
    const { results: getUpcoming } = await movies.getUpcoming();
    console.log("-- get Upcoming doing");
    dispatch({ type: "GET_UPCOMMIMG", getUpcoming });
  };

  const getSearch = async (value) => {
    const { data } = await movies.searchMovies(value);
    console.log("-- get serch doing");
    dispatch({ type: "SEARCH_MOVIES", getSearch: data.results });
  };

  const getDetails = async (id) => {
    const { data } = await movies.getMovie(id);
    console.log("-- get details doing");
    dispatch({ type: "GET_DETAILS", getDetails: data });
  };

  const giveLoding = () => {
    console.log("give loding true");
    dispatch({ type: "LODING" });
  };

  const cleanDetails = () => {
    dispatch({ type: "CLEAN_DETAILS" });
  };

  // useEffect(() => {
  //   console.log("useEffect popular");

  //   giveLoding();
  //   getPopular();
  // }, []);

  return [
    state,
    getPopular,
    getUpcoming,
    getSearch,
    getDetails,
    cleanDetails,
    giveLoding,
  ];
};

export default UseFetch;
