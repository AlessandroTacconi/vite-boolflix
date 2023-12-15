import { reactive } from 'vue';

export const store = reactive({
  movies: [],
  apiMovieURL: 'https://api.themoviedb.org/3/search/movie',
  MyKey: 'bd371a5f96fdbb0864d30602af8b0a46',
  searchMovie: '',
  shows: [],
  apiShowsURL: 'https://api.themoviedb.org/3/search/tv',
  apiImageMovie: 'https://image.tmdb.org/t/p/w185',
});
