<template>
  <section id="home">
    <b-carousel :interval="3000" indicators data-aos="zoom-out-down">
      <b-carousel-slide caption="O Melhor Cookie" text="do Rio de Janeiro">
        <template #img>
          <img class="d-block img-fluid w-100" src="/img/slide01.jpg" alt="image slot" />
        </template>
      </b-carousel-slide>

      <b-carousel-slide caption="Prove Nossos Cookies">
        <template #img>
          <img class="d-block img-fluid w-100" src="/img/slide02.jpg" alt="image slot" />
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <img class="d-block img-fluid w-100" src="/img/slide03.jpg" alt="image slot" />
        </template>
      </b-carousel-slide>
    </b-carousel>
    <div class="wave"></div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Carousel",
});
</script>

<style>
#home {
  margin-top: 5rem;
}
.carousel {
  background: #482918;
  text-shadow: 1px 1px 2px #333;
}

.carousel-caption h3 {
  color: #fee8c5;
  font-family: "Lobster";
  font-size: 3.875rem;
  font-weight: 400;
  line-height: 1;
}

.carousel-caption p {
  color: #fee8c5;
  font-family: "Roboto Slab";
  font-size: 3.875rem;
  font-weight: 300;
  line-height: 1;
}

@media screen and (max-width: 768px) {
  .carousel-caption {
    padding: 0;
  }
  .carousel-caption h3 {
    font-size: 1.5rem;
  }
  .carousel-caption p {
    font-size: 1.25rem;
  }
}

@media screen and (max-height: 500px) {
  #home {
    margin-top: -2rem;
  }
}

.wave {
  background: url(../assets/wave2.png) 0 0 repeat-x;
  height: 21px;
  margin-top: -20px;
  position: relative;
}
</style>
