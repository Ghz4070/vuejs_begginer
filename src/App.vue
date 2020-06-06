<template>
  <div id="app">
    <NavHeader />
    <vue-page-transition>
      <router-view />
    </vue-page-transition>
  </div>
</template>

<script>
import NavHeader from "./components/nav/NavHeader";

export default {
  name: "App",
  components: {
    NavHeader
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
