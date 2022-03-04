<template>
  <section id="galeria">
    <h2>Galeria</h2>
    <div class="gallery d-flex flex-wrap justify-content-center">
      <figure v-for="cookie in cookies" data-aos="zoom-out" :key="cookie.name">
        <img :src="cookie.path" :alt="cookie.name" />
        <div class="overlay">
          <div class="text">{{ cookie.name }}</div>
        </div>
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

.overlay {
  background-color: #482918;
  bottom: 0;
  left: 0;
  height: 100%;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.5s ease;
  width: 100%;
}

.gallery figure:hover .overlay {
  opacity: 1;
}
.text {
  color: #fffdf2;
  font-size: 20px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
</style>
