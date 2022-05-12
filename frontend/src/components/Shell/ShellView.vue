<template>
  <div>
    <app-bar></app-bar>
    <side-bar />
    <v-content>
      <router-view></router-view>
    </v-content>
  </div>
</template>

<script>
import AppBar from "@/components/Shell/AppBar.vue";
import SideBar from "@/components/Shell/SideBar.vue";

export default {
  name: "ShellView",

  components: {
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
