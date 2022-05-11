<template>
 <div>

    <app-bar></app-bar>
    <side-bar/>
    <v-main>
      <NewPost />
    </v-main>
</div>  
</template>

<script>
import NewPost from "@/components/Feed/NewPost.vue";
import AppBar from "@/components/Shell/AppBar.vue"
import SideBar from '@/components/Shell/SideBar.vue';

export default {
  name: "ShellView",

  components: {
    NewPost,
    AppBar,
    SideBar
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
