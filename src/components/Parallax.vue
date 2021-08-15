<template>
  <section id="parallax" class="d-flex flex-column justify-content-center" :style="`backgroundImage: ${background}`">
    <div class="kand"></div>
    <h3>{{ text1 }}</h3>
    <p>{{ text2 }}</p>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Parallax",
  props: {
    text1: String,
    text2: String,
    background: String,
  },
});
</script>

<style scoped>
#parallax {
  background-attachment: fixed;
  background-position-x: center;
  background-position-y: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  height: 20rem;
  text-shadow: 5px 5px 10px rgb(0 0 0 / 60%);
}

.kand {
  width: 119px;
  height: 51px;
  background: url(../assets/kand.png);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}

h3 {
  font-family: "Roboto Slab", serif;
  font-size: 3em;
  font-weight: bold;
  line-height: 1.1;
}

p {
  font-family: "Lobster", cursive;
  font-size: 2em;
}

@media screen and (max-width: 700px) {
  #parallax {
    height: 15rem;
  }
  h3 {
    font-size: 1.5em;
  }
  p {
    font-size: 1.5em;
  }
}
</style>
