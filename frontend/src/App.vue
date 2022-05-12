<template>
  <v-app class="app">
    <router-view></router-view>
  </v-app>
</template>

<script>
import api from "@/api";
export default {
  name: "App",

  data: () => ({
    //
  }),
  mounted() {
    api.post("/api/auth/login", { userId: 5, password: "678" });
  },
};
</script>

<style lang="css" scoped>
.app {
  overflow: hidden;
}
</style>
