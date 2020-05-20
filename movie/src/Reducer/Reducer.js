// import { useReducer } from "react";

export const initialState = {
  getPopular: [],
  getUpcoming: [],
  loading: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_POPULAR":
      return { ...state, getPopular: action.getPopular };
    case "GET_UPCOMMIMG":
      return { ...state, getUpcoming: action.getUpcoming };
    default:
      throw new Error();
  }
};
// const [popularState, dispatch] = useReducer(reducer, initialState);

// export { popularState, dispatch };
