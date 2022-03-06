<template>
  <section id="pedidos">
    <h2>Mais Pedidos</h2>
    <p>Esses são os nossos cookies campeões de vendas e mais amados por nossos clientes.</p>
    <div class="gallery">
      <figure v-for="cookie in cookies" data-aos="fade-up" :key="cookie.name">
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
  name: "MaisPedidos",
  data: () => ({
    cookies: cardapio.maispedidos,
  }),
});
</script>

<style scoped>
#pedidos {
  background: #fffdf2;
  padding: 30px 0;
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

p {
  font-family: "Roboto Slab", serif;
  margin: 1rem 0;
}

.gallery {
  align-items: center;
  display: flex;
  overflow-x: auto;
  padding: 1.5rem 0;
}

.gallery figure {
  border: 5px solid #fcf8f5;
  box-shadow: 5px 5px 15px rgb(0 0 0 / 40%);
  -moz-box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 5px 5px 15px rgb(0 0 0 / 40%);
  margin: 0 1rem;
  position: relative;
  width: 15rem;
}

.gallery img {
  width: 100%;
}

@media screen and (max-width: 700px) {
  .gallery img {
    width: 12rem;
  }
}

@media screen and (min-width: 1310px) {
  .gallery {
    justify-content: center;
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
  font-size: 1rem;
  left: 50%;
  position: absolute;
  right: -50%;
  top: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
</style>
