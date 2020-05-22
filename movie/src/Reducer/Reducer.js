export const initialState = {
  getPopular: [],
  getUpcoming: [],
  getDetails: [],
  getSearch: [],
  searchHistory: [],
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
    case "LOADING_TRUE":
      return { ...state, loading: true };
    case "LOADING_FALSE":
      return { ...state, loading: false };
    case "PUSH_HISTORY":
      return {
        ...state,
        searchHistory: [...state.searchHistory, action.value],
      };
    default:
      throw new Error();
  }
};
