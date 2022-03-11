<template>
  <section id="contato">
    <div class="wave"></div>
    <h2>Contato</h2>
    <div class="row justify-content-evenly mx-0">
      <div class="col-md-3 col-12" data-aos="fade-up">
        <h3>NOS LIGUE</h3>
        <a href="tel:+5521981672002" class="tel">(21) 98167-2002</a>
      </div>
      <div class="col-md-3 col-12 my-md-0 my-3" data-aos="zoom-in">
        <h3>PEÇA PELO IFOOD</h3>
        <a href="https://www.ifood.com.br/delivery/rio-de-janeiro-rj/cookies-carioca-meier/" target="_blank" rel="noopener">
          <img src="@/assets/ifood.svg" class="ifood" alt="Logotipo do ifood" />
        </a>
      </div>
      <div class="col-md-3 col-12" data-aos="fade-up">
        <h3>SIGA-NOS</h3>
        <a href="https://instagram.com/cookiescarioca" target="_blank" class="social" rel="noopener">
          <img src="@/assets/instagram.svg" alt="logotipo do Instagram" />
        </a>
        &nbsp;
        <a href="https://wa.me/+552124290577" target="_blank" class="social" rel="noopener">
          <img src="@/assets/whatsapp.svg" alt="logotipo do Whatsapp" />
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Contato",
});
</script>

<style scoped>
#contato {
  background: #fffdf2;
  padding: 30px 0;
}

.wave {
  background: url(../assets/wave2.png) 0 0 repeat-x;
  height: 21px;
  margin-top: -50px;
  position: relative;
}

h2 {
  color: #5e2e02;
  display: inline-block;
  font-family: "Lobster", cursive;
  font-size: 2.25rem;
  font-weight: 400;
  line-height: 2;
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

h3 {
  color: #5e2e02;
  font-family: "Roboto Slab", serif;
  margin: 20px 0;
}

.tel {
  color: #5e2e02;
  font-family: "Roboto Slab", serif;
  line-height: 1;
  font-size: 1.9rem;
  font-weight: bold;
  text-decoration: none;
}

.tel:hover {
  text-decoration: underline;
}

.ifood {
  width: 7rem;
}

.social {
  display: inline-block;
  width: 2.5rem;
}
</style>
