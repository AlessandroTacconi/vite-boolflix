<script>
// IMPORT
import axios from 'axios';
import { store } from './store';
import AppForm from './components/AppForm.vue';
import Card from './components/card.vue';

const chiamataAxios = (url, storeArray) => {
  return axios
    .get(url, {
      params: {
        language: 'it',
        api_key: store.MyKey,
        query: store.searchMovie,
      },
    })
    .then((response) => {
      store[storeArray] = response.data.results;
      console.log(response);
    })
    .catch((error) => {
      console.error('Errore nella richiesta API:', error);
    });
};

// EXPORT
export default {
  name: 'App',
  components: {
    AppForm,
    Card,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    search() {
      chiamataAxios(this.store.apiMovieURL, 'movies');
      chiamataAxios(this.store.apiShowsURL, 'shows');
    },
  },
};
</script>

<template>
  <!-- FORM -->
  <AppForm :store="store" @search="search" />
  <!-- /FORM -->
  <!-- TITOLO -->
  <h2>In catalogo</h2>
  <!-- CARD MOVIES-->
  <div>
    <h2 v-if="store.movies.length">Movies</h2>
    <ul>
      <li v-for="movie in store.movies">
        <Card
          :img="store.apiImageMovie + movie.poster_path"
          :title="movie.title"
          :original_title="movie.original_title"
          :language="movie.original_language"
          :vote="movie.vote_average"
        />
      </li>
    </ul>
  </div>
  <!-- /CARD MOVIES-->

  <!-- CARD SHOWS-->

  <div>
    <h2 v-if="store.shows.length">Shows</h2>
    <ul>
      <li v-for="show in store.shows">
        <Card
          :img="store.apiImageMovie + show.poster_path"
          :title="show.name"
          :original_title="show.original_name"
          :language="show.original_language"
          :vote="show.vote_average"
        />
      </li>
    </ul>
  </div>
  <!-- /CARD SHOWS-->
</template>

<style lang="scss">
@use './assets/scss/partials/reset' as *;

h2 {
  text-align: center;
}

.lingua {
  img {
    max-height: 10px;
  }
}
</style>
