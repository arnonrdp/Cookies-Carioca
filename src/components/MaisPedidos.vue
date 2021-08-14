<template>
  <section id="pedidos">
    <h2>Mais Pedidos</h2>
    <p>Esses são os nossos cookies campeões de vendas e mais amados por nossos clientes.</p>
    <div class="gallery">
      <figure v-for="maispedido in maispedidos" data-aos="fade-up" :key="maispedido.name">
        <img :src="maispedido.path" alt="" />
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
    maispedidos: cardapio.maispedidos,
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
  font-family: "Lobster";
  font-size: 36px;
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
  font-family: "Roboto Slab";
  margin: 1rem 0;
}

.gallery {
  align-items: center;
  display: flex;
  overflow-x: auto;
}

.gallery img {
  margin: 0 1rem;
  width: 15rem;
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
</style>
