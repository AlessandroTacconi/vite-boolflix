<script>
// EXPORT
export default {
  name: 'Card',
  props: ['title', 'original_title', 'language', 'vote', 'img', 'overview'],
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
  <!-- CARDS -->
  <div class="card">
    <div class="content">
      <div class="front">
        <img class="card-img-top" :src="img" alt="{{ title }}" />
      </div>

      <div class="back bg-dark bg-gradient text-light p-2 d-flex flex-column">
        <h3>{{ title }}</h3>
        <h5>{{ original_title }}</h5>
        <h5 class="lingua">
          <img v-if="language === 'it'" src="/img/it.png" alt="It" />
          <img v-else-if="language === 'en'" src="/img/eng.png" alt="en" />
          <span v-else>{{ language }}</span>
        </h5>
        <p class="overview flex-grow-1 pe-3 fs-6 text">{{ overview }}</p>
        <!-- <h5>{{ vote }}</h5> -->
        <p class="">
          <font-awesome-icon
            class="text-warning star"
            icon="fa-solid fa-star"
            v-for="n in voto"
          />
          <font-awesome-icon
            class="text-warning-emphasis star"
            icon="fa-regular fa-star"
            v-for="n in BordStar"
          />
        </p>
      </div>
    </div>
  </div>
  <!-- /CARDS -->
</template>

<style scoped>
/* BACK-CARD SCROLLBAR */

::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #b0b0b0;
}

.lingua {
  img {
    max-height: 10px;
  }
}

.card {
  background-color: transparent;
  border: 1px solid #f1f1f1;
  perspective: 1000px;
  width: 250px;
  height: 400px;
}

.content {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.card:hover .content {
  transform: rotateY(180deg);
}

.front,
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.back {
  transform: rotateY(180deg);

  .overview {
    overflow-y: scroll;
    height: 30%;
    text-overflow: ellipsis;
  }
}

.star:hover {
  font-size: 20px;
}
</style>

<!-- 
  <div>
    <img :src="img" alt="{{ title }}" />
    <h3>{{ title }}</h3>
    <h5>{{ original_title }}</h5>
    <h5 class="lingua">
      <img v-if="language === 'it'" src="/img/it.png" alt="It" />
      <img v-else-if="language === 'en'" src="/img/eng.png" alt="en" />
      <span v-else>{{ language }}</span>
    </h5>
    
    <p>
      <font-awesome-icon icon="fa-solid fa-star" v-for="n in voto" />
      <font-awesome-icon icon="fa-regular fa-star" v-for="n in BordStar" />
    </p>
  </div> -->
