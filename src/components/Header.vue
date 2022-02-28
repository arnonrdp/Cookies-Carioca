<template>
  <section id="top">
    <b-navbar toggleable="sm" type="dark" class="mx-3">
      <b-navbar-brand href="#" class="d-sm-block d-md-none">
        <img src="@/assets/logo.svg" alt="Logotipo" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mx-auto align-items-baseline">
          <b-nav-item href="#home">home</b-nav-item>
          <b-nav-item href="#pedidos">mais pedidos</b-nav-item>
          <b-navbar-brand href="#" class="d-none d-sm-none d-md-block">
            <img src="@/assets/logo.svg" alt="Logotipo" />
          </b-navbar-brand>
          <b-nav-item href="#galeria">galeria</b-nav-item>
          <b-nav-item href="#contato">contato</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
});
</script>

<style scoped>
#top {
  background: url(../assets/wave1.png) 0 0 repeat-x;
  height: 114px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 40;
}
.navbar {
  padding: 0;
  position: relative;
  z-index: 30;
}
.navbar-toggler {
  background: #8b4f2e;
  border: none;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  margin-bottom: 30px;
  margin-right: 5px;
}
.navbar-toggler:hover,
.navbar-toggler:focus {
  background: #8b4f2e;
}

img[alt="Logotipo"] {
  width: 120px;
}

li {
  background: url(../assets/divider.png) left 16px no-repeat;
  display: inline-block;
  float: none;
  padding-left: 16px;
  position: relative;
  white-space: nowrap;
}
li:first-child,
li:nth-child(4) {
  padding-left: 0;
  background: none;
}
.navbar-dark .navbar-nav .nav-link {
  color: #ead08f;
  font-family: "Lobster";
  font-size: 24px;
  font-weight: bolder;
  line-height: 50px;
  padding: 0px 24px;
  position: relative;
  transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  z-index: 2;
}
.nav-link:before {
  background: url(../assets/caret.png) 0 0 repeat-x;
  content: "";
  height: 5px;
  left: 50%;
  position: absolute;
  transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
}
.nav-link:after {
  background: url(../assets/caret.png) 0 0 repeat-x;
  bottom: 0;
  content: "";
  height: 5px;
  left: 50%;
  position: absolute;
  transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
}

li > a:hover,
li > a:focus,
li.active > a,
li.active > a:hover,
li.active > a:focus {
  background: none;
  border-radius: 0;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  box-shadow: none;
  color: #fef9da;
  text-decoration: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
}

li > a:hover:before,
li > a:hover:after,
li > a:focus:before,
li > a:focus:after,
li.active > a:before,
li.active > a:after,
li.active > a:hover:before,
li.active > a:hover:after,
li.active > a:focus:before,
li.active > a:focus:after {
  width: 32px;
  margin-left: -16px;
}

@media screen and (max-height: 500px) {
  #top {
    position: relative;
  }
}

@media screen and (max-width: 575px) {
  ul {
    background: #8b4f2e;
    border-radius: 20px;
    -moz-border-radius: 20px;
    -webkit-border-radius: 20px;
    padding: 0 20px 10px;
    margin-top: 0.5rem;
    min-width: 170px;
    position: absolute;
    right: 4px;
    text-align: left;
    top: 80px;
  }
  ul:before {
    background: url(../assets/corner.png);
    content: "";
    height: 13px;
    position: absolute;
    right: 40px;
    top: -13px;
    transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    width: 22px;
  }
  li {
    border-top: 1px dashed #ae846d;
    display: block;
    margin: 0;
    padding-left: 0;
    position: relative;
    zoom: 1;
  }
  li:first-child {
    border-top: none;
  }
  li a {
    display: block;
    position: relative;
    font-family: "Roboto Slab";
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    color: #ead08f;
    text-decoration: none;
    padding: 0;
    background: none;
    transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
  }
  li a:hover {
    text-decoration: none;
    color: #fef9da;
  }
}
</style>
