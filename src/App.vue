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
  <h2>In catalogo</h2>
  <div>
    <h2 v-if="store.movies.length">Movies</h2>
    <ul>
      <li v-for="movie in store.movies">
        <h3>{{ movie.title }}</h3>
        <h5>{{ movie.original_title }}</h5>
        <h5 class="lingua">
          <img
            v-if="movie.original_language === 'it'"
            src="/img/it.png"
            alt="It"
          />
          <img
            v-else-if="movie.original_language === 'en'"
            src="/img/eng.png"
            alt="en"
          />
          <span v-else>{{ movie.original_language }}</span>
        </h5>
        <h5>{{ movie.vote_average }}</h5>
        <img :src="store.apiImageMovie + movie.poster_path" alt="" />
      </li>
    </ul>
  </div>
  <div>
    <h2 v-if="store.shows.length">Shows</h2>
    <ul>
      <li v-for="show in store.shows">
        <h3>{{ show.name }}</h3>
        <h5>{{ show.original_name }}</h5>
        <h5 class="lingua">
          <img
            v-if="show.original_language === 'it'"
            src="/img/it.png"
            alt="It"
          />
          <img
            v-else-if="show.original_language === 'en'"
            src="/img/eng.png"
            alt="en"
          />
          <span v-else>{{ show.original_language }}</span>
        </h5>
        <h5>{{ show.vote_average }}</h5>
        <img :src="store.apiImageMovie + show.poster_path" alt="" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@use './assets/scss/partials/reset' as *;

.lingua {
  img {
    max-height: 10px;
  }
}
</style>
