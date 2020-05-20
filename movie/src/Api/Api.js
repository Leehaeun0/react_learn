import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  // params: { api_key: "10923b261ba94d897ac6b81148314a3f", language: "en-US" },
});

//react-native와는 달리 로컬 웹에서 날릴 땐 쿼리스트링으로 키값을 보내라 하여 변경 하였습니다.
const keyQuery = "api_key=10923b261ba94d897ac6b81148314a3f";

export const movies = {
  //특정 영화 디테일 데이터
  getMovie: (id) =>
    api.get(`movie/${id}?${keyQuery}`, {
      params: { append_to_response: "videos" },
    }),
  // 인기순위 데이터
  getPopular: (page = 1) =>
    api.get(`movie/popular?${keyQuery}&page=${page}`).then((r) => {
      return r.data;
    }),
  //최신 영화 개봉작 순
  getUpcoming: (page = 1) =>
    api.get(`movie/upcoming?${keyQuery}&page=${page}`).then((r) => {
      return r.data;
    }),
  //현재 상영작
  getNowPlaying: () => api.get(`movie/now_playing?${keyQuery}`),
  //영화 검색
  searchMovies: (term) =>
    api.get(`search/movie?${keyQuery}`, {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
