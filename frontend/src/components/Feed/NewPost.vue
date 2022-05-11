<template>
  <div>
    <quill-editor
      ref="myQuillEditor"
      v-model="content"
      :options="editorOption"
    />
  </div>
</template>
<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";

export default {
  name: "NewPost",
  components: { "quill-editor": quillEditor },
  data() {
    return {
      content: "",
    };
  },
  methods: {},
  computed: {},
  mounted() {},
};
</script>
<style lang=""></style>
