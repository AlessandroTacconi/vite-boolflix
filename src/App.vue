<script>
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    search() {
      axios
        .get(this.store.apiMovieURL, {
          params: {
            language: 'it',
            api_key: this.store.MyKey,
            query: this.store.searchMovie,
          },
        })
        .then((response) => {
          this.store.movies = response.data.results;
          console.log(response);
        })
        .catch((error) => {
          console.error('Errore nella richiesta API:', error);
        });
    },
  },
  created() {
    this.search();
  },
};
</script>

<template>
  <form @submit.prevent="search">
    <label for="search">Search</label>
    <input type="text" id="search" v-model="store.searchMovie" />
    <input type="submit" />
  </form>
  <div>
    <ul>
      <li v-for="movie in store.movies">
        <h2>{{ movie.title }}</h2>
        <h4>{{ movie.original_title }}</h4>
        <h4>{{ movie.original_language }}</h4>
        <h4>{{ movie.vote_average }}</h4>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@use './assets/scss/partials/reset' as *;
</style>
