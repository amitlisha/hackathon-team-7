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
      <NewPost @close-dialog="closeDialog"></NewPost>
    </v-dialog>
    <div v-if="allPosts.length > 0">
      <div v-for="post in sortedPosts" :key="post.id">
        <Post :post="post"></Post>
      </div>
    </div>
  </div>
</template>
<script>
import Post from "./Post.vue";
import NewPost from "./NewPost.vue";
import { quillEditor } from "vue-quill-editor";
import api from "@/api";
// eslint-disable-next-line no-unused-vars
import editorOptions from "./editorOptions";
import "quill/dist/quill.snow.css";
import { mapState } from "vuex";

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
  methods: {
    closeDialog() {
      this.showDialog = false;
    },
  },
  computed: {
    ...mapState(["currentChildren"]),
    sortedPosts() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.allPosts.reverse();
    },
  },
  async created() {},
  watch: {
    currentChildren: {
      async handler() {
        this.allPosts = await (
          await api.get(`/api/post/${this.currentChildren.id}`)
        ).data;
      },
      deep: true,
      immediate: true,
    },
    showDialog: {
      async handler(newValue) {
        if (!newValue) {
          this.allPosts = await (
            await api.get(`/api/post/${this.currentChildren.id}`)
          ).data;
        }
      },
    },
  },
};
</script>
<style scoped>
#dialog {
  overflow: hidden; /* Hide scrollbars */
}
</style>
