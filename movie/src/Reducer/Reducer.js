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
      return { ...state, getPopular: action.getPopular, loading: false };
    case "GET_UPCOMMIMG":
      return { ...state, getUpcoming: action.getUpcoming, loading: false };
    case "GET_DETAILS":
      return { ...state, getDetails: action.getDetails, loading: false };
    case "CLEAN_DETAILS":
      return { ...state, getDetails: initialState.getDetails };
    case "SEARCH_MOVIES":
      return { ...state, getSearch: action.getSearch, loading: false };
    case "LODING":
      return { ...state, loading: true };
    default:
      throw new Error();
  }
};
