<script>
export default {
  name: 'Card',
  props: ['title', 'original_title', 'language', 'vote', 'img'],
  data() {
    return {
      FiveStar: 5,
    };
  },
  computed: {
    voto() {
      return Math.ceil(this.vote / 2);
    },

    BordStar() {
      return this.FiveStar - this.voto;
    },
  },
};
</script>

<template>
  <div>
    <img :src="img" alt="" />
    <h3>{{ title }}</h3>
    <h5>{{ original_title }}</h5>
    <h5 class="lingua">
      <img v-if="language === 'it'" src="/img/it.png" alt="It" />
      <img v-else-if="language === 'en'" src="/img/eng.png" alt="en" />
      <span v-else>{{ language }}</span>
    </h5>
    <h5>{{ vote }}</h5>
    <p>
      <font-awesome-icon icon="fa-solid fa-star" v-for="n in voto" />
      <font-awesome-icon icon="fa-regular fa-star" v-for="n in BordStar" />
    </p>
  </div>
</template>

<style scoped></style>
