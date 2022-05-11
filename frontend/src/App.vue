<template>
  <v-app class="app">
    <app-bar></app-bar>
    <side-bar />
    <v-main>
      <HomeFeed></HomeFeed>
    </v-main>
  </v-app>
</template>

<script>
import HomeFeed from "./components/Feed/Feed.vue";
import AppBar from "./components/Shell/AppBar.vue";
import SideBar from "./components/Shell/SideBar.vue";

export default {
  name: "App",

  components: {
    HomeFeed,
    AppBar,
    SideBar,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="css" scoped>
.app {
  overflow: hidden;
}
</style>
