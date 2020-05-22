import { useReducer, useEffect } from "react";
import { reducer, initialState } from "../Reducer/Reducer";
import { movies } from "../Api/Api";

const UseFetch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPopular = async () => {
    if (state.getPopular.length) return;
    const { results: popularData } = await movies.getPopular();
    console.log("-- get popular doing");
    dispatch({ type: "GET_POPULAR", getPopular: popularData });
  };

  const getUpcoming = async () => {
    if (state.getUpcoming.length) return;
    // if ([...isRender.current.children].length) return;
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
    // try{
    //   dispatch({type:"LODING"})
    // }catch(e){

    // }
    dispatch({ type: "GET_DETAILS", getDetails: data });
  };

  const cleanDetails = () => {
    dispatch({ type: "CLEAN_DETAILS" });
  };

  const giveLoding = () => {
    console.log("give loding true");
    dispatch({ type: "LODING" });
  };

  const pushHistory = (e) => {
    if (e.key !== "Enter") return;
    if (e.target.value.trim() === "") {
      e.target.value = "";
      return;
    }
    dispatch({ type: "PUSH_HISTORY", value: e.target.value.trim() });
    e.target.value = "";
  };

  return [
    state,
    getPopular,
    getUpcoming,
    getSearch,
    getDetails,
    cleanDetails,
    giveLoding,
    pushHistory,
  ];
};

export default UseFetch;
