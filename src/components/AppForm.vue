<script>
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
  <form @submit.prevent="search">
    <label for="search"></label>
    <input type="text" id="search" v-model="store.searchMovie" />
    <input type="submit" />
  </form>
</template>

<style scoped></style>
