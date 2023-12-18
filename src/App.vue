<script>
import axios from 'axios';
import { store } from './store';
import AppForm from './components/AppForm.vue';
import AppHeader from './components/AppHeader.vue';
import Card from './components/card.vue';

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

      axios
        .get(this.store.apiShowsURL, {
          params: {
            language: 'it',
            api_key: this.store.MyKey,
            query: this.store.searchMovie,
          },
        })
        .then((response) => {
          this.store.shows = response.data.results;
          console.log(response);
        })
        .catch((error) => {
          console.error('Errore nella richiesta API:', error);
        });
    },
  },
};
</script>

<template>
  <AppForm :store="store" @search="search" />
  <h2>In catalogo</h2>
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
