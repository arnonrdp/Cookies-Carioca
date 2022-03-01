<template>
  <div id="app">
    <Header />
    <Carousel />
    <MaisPedidos />
    <Parallax text1="Feitos com muito amor e carinho" text2="preços a partir de R$ 5,00" background="url(/img/parallax1.jpg)" />
    <div class="hl"></div>
    <Galeria />
    <div class="hl"></div>
    <Parallax
      text1="Um cardápio especial, para momentos especiais"
      text2="torne seu dia mais especial com os nossos cookies"
      background="url(/img/parallax2.jpg)"
    />
    <Contato />
    <div class="hl"></div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Carousel from "./components/Carousel.vue";
import Contato from "./components/Contato.vue";
import Footer from "./components/Footer.vue";
import Galeria from "./components/Galeria.vue";
import Header from "./components/Header.vue";
import MaisPedidos from "./components/MaisPedidos.vue";
import Parallax from "./components/Parallax.vue";

export default Vue.extend({
  name: "App",
  components: {
    Header,
    Carousel,
    MaisPedidos,
    Parallax,
    Galeria,
    Contato,
    Footer,
  },
});
</script>

<style>
@font-face {
  font-family: "Lobster";
  src: local("Lobster"), url(./assets/fonts/Lobster/Lobster-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Roboto Slab";
  src: local("Roboto Slab"), url(./assets/fonts/Roboto_Slab/RobotoSlab-VariableFont_wght.ttf) format("truetype");
}

#app {
  font-family: 14px "Roboto", Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.hl {
  height: 9px;
  background: url(./assets/hl.jpg) 0 0 repeat-x;
}

@media screen and (max-width: 768px) {
  #app {
    font-size: 14px;
  }
}

@media screen and (max-width: 480px) {
  #app {
    font-size: 12px;
  }
}
</style>
