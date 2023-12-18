<script>
// IMPORT
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import Card from './components/card.vue';

// EXPORT
export default {
  name: 'App',
  components: {
    AppHeader,
    Card,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    ifNoImg(media) {
      return media.poster_path
        ? store.apiImageMovie + media.poster_path
        : '/img/locandina-non-disponibile-blu.png';
    },
  },
};
</script>

<template>
  <AppHeader />
  <main class="bg-black">
    <div class="container py-4">
      <!-- TITOLO -->
      <h2 class="fs-3 text-light">In catalogo</h2>
      <!-- CARD MOVIES-->
      <div class="container">
        <h2 v-if="store.movies.length" class="fs-1 text-light">Movies</h2>
        <ul class="list-group list-group-horizontal flex-wrap">
          <li v-for="movie in store.movies" class="list-group-item">
            <Card
              :img="ifNoImg(movie)"
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
      <div class="container">
        <h2 v-if="store.shows.length" class="fs-1 text-light">Shows</h2>
        <ul class="list-group list-group-horizontal flex-wrap">
          <li v-for="show in store.shows" class="list-group-item">
            <Card
              :img="ifNoImg(show)"
              :title="show.name"
              :original_title="show.original_name"
              :language="show.original_language"
              :vote="show.vote_average"
            />
          </li>
        </ul>
      </div>
      <!-- /CARD SHOWS-->
    </div>
  </main>
</template>

<style scoped lang="scss">
@use './assets/scss/partials/reset' as *;
</style>
