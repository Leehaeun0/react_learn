// import { useReducer } from "react";

export const initialState = {
  getPopular: [],
  getUpcoming: [],
  getDetails: [],
  getSearch: [],
  loading: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_POPULAR":
      return { ...state, getPopular: action.getPopular };
    case "GET_UPCOMMIMG":
      return { ...state, getUpcoming: action.getUpcoming };
    case "GET_DETAILS":
      return { ...state, getDetails: action.getDetails };
    case "SEARCH_MOVIES":
      return { ...state, getSearch: action.getSearch };
    default:
      throw new Error();
  }
};
// const [popularState, dispatch] = useReducer(reducer, initialState);

// export { popularState, dispatch };
