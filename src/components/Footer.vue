<template>
  <section id="footer">
    <img src="@/assets/logo.svg" alt="" />
    <p class="my-0">Cookies Carioca &copy; desde 2021. Todos os direitos reservados.</p>
    <a href="#top" class="animate__animated animate__shakeY"></a>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Footer",
});
</script>

<style scoped>
#footer {
  align-items: center;
  background-color: #482918;
  color: #fff;
  display: flex;
  font-family: "Roboto Slab", serif;
  justify-content: space-around;
  padding: 20px;
}

img {
  width: 5rem;
}

a {
  background: url("../assets/totop.png") no-repeat center;
  height: 3.5rem;
  width: 3.5rem;
}
</style>
