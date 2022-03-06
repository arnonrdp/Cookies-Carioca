<template>
  <section id="galeria">
    <h2>Galeria</h2>
    <div class="gallery d-flex flex-wrap justify-content-center">
      <figure v-for="(cookie, index) in cookies" data-aos="zoom-out" :key="index">
        <img :src="cookie.path" alt="" />
      </figure>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import cardapio from "@/data/cardapio.json";

export default Vue.extend({
  name: "Galeria",
  data: () => ({
    cookies: cardapio.gallery,
  }),
});
</script>

<style scoped>
#galeria {
  background: #fffdf2;
  padding: 30px 0 60px;
}

h2 {
  color: #5e2e02;
  display: inline-block;
  font-family: "Lobster", cursive;
  font-size: 2.25rem;
  font-weight: 400;
  line-height: 1;
  margin: 1rem 0;
}

h2::before,
h2::after {
  background: url(../assets/px.png) 0 0 repeat-x;
  content: "";
  display: inline-block;
  height: 21px;
  margin: 0 1.5rem;
  width: 37px;
}

.gallery figure {
  aspect-ratio: 3/4;
  border: 5px solid #fcf8f5;
  box-shadow: 5px 5px 15px rgb(0 0 0 / 40%);
  -moz-box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 5px 5px 15px rgb(0 0 0 / 40%);
  margin: 1rem;
  max-width: 15rem;
  position: relative;
}

.gallery figure img {
  height: 100%;
  object-fit: cover;
  width: 100%;
  transition: transform 0.2s ease-in-out;
}

.gallery figure:hover img {
  transform: scale(1.25);
}

@media only screen and (max-width: 700px) {
  .gallery figure {
    margin: 0.5rem;
    width: 10rem;
  }
}

@media only screen and (max-width: 500px) {
  .gallery figure {
    width: 8rem;
  }
}
</style>
