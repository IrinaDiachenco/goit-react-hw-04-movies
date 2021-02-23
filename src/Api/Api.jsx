import axios from "axios";

const KEY = "5a918067bc01f0fb5f1bce4cb51826cd";
const URL = "https://api.themoviedb.org/3";

export function getTrendingMovies() { 
  return axios
    .get(`${URL}/trending/all/day?api_key=${KEY}`)
    .then(res => res.data);
}

export function getMovies(query) {
  return axios
    .get(`${URL}/search/movie?api_key=${KEY}&query=${query}`)
    .then(res => res.data);
}

export function getMovieDetails(movieId) {
  return axios
    .get(`${URL}/movie/${movieId}?api_key=${KEY}`)
    .then(res => res.data);
}

export function getMovieCredits(movieId) {
  return axios
    .get(`${URL}/movie/${movieId}/credits?api_key=${KEY}`)
    .then(res => res.data);
}

export function getMovieReviews(movieId) {
  return axios
    .get(`${URL}/movie/${movieId}/reviews?api_key=${KEY}`)
    .then(res => res.data);
}
