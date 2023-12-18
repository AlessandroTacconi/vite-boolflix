<script>
// IMPORT
import AppForm from './AppForm.vue';
import axios from 'axios';
import { store } from '../store';

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
  name: 'AppHeader',
  components: {
    AppForm,
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
  <header class="bg-danger bg-gradient">
    <div
      class="container py-3 d-flex align-items-center justify-content-between"
    >
      <!-- TITOLO -->
      <h2 class="text-light fs-1">boolflix</h2>
      <!-- /TITOLO -->
      <!-- FORM -->
      <AppForm :store="store" @search="search" />
      <!-- /FORM -->
    </div>
  </header>
</template>

<style scoped>
h2 {
  text-shadow: 3px 4px black;
}
</style>
