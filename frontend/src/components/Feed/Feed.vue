<template>
  <div>
    <v-row justify="center" class="mt-3">
      <v-col cols="6" @click="showDialog = true">
        <quill-editor :options="editorOptions"> </quill-editor>
      </v-col>
    </v-row>

    <v-dialog
      id="dialog"
      scrollable
      max-width="850"
      color="white"
      v-model="showDialog"
    >
      <NewPost></NewPost>
    </v-dialog>
    <div v-for="i in 5" :key="i">
      <Post></Post>
    </div>
  </div>
</template>
<script>
import Post from "./Post.vue";
import NewPost from "./NewPost.vue";
import { quillEditor } from "vue-quill-editor";
// eslint-disable-next-line no-unused-vars
import editorOptions from "./editorOptions";
import "quill/dist/quill.snow.css";

export default {
  components: {
    Post,
    NewPost,
    "quill-editor": quillEditor,
  },
  name: "HomeFeed",
  data() {
    return {
      allPosts: [],
      editorOptions,
      showDialog: false,
    };
  },
  methods: {},
  computed: {},
  mounted() {},
};
</script>
<style scoped>
#dialog {
  overflow: hidden; /* Hide scrollbars */
}
</style>
