<script>
// EXPORT
export default {
  name: 'AppForm',
  props: ['store'],
  methods: {
    search() {
      this.$emit('search');
    },
  },
};
</script>

<template>
  <!-- FORM -->
  <form @submit.prevent="search">
    <label for="search"></label>
    <input type="text" id="search" v-model="store.searchMovie" />
    <input type="submit" />
  </form>
  <!-- /FORM -->
</template>

<style scoped></style>
