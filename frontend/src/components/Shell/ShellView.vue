<template>
  <div>
    <app-bar></app-bar>
    <side-bar/>
    <v-content>
    <router-view></router-view>
    </v-content>
    <v-main>
    <side-bar />
    <v-main>
      <Feed />
    </v-main>
  </div>
</template>

<script>

import Feed from "@/components/Feed/Feed.vue";
import AppBar from "@/components/Shell/AppBar.vue";
import SideBar from "@/components/Shell/SideBar.vue";


export default {
  name: "ShellView",

  components: {
    Feed,
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
