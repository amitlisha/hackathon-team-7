<template>
  <div>
    <v-container class="text-center justify-center">
      <v-row justify="center mt-2">
        <v-col cols="3">
          <v-text-field
            dir="rtl"
            label="נושא"
            v-model="title"
            placeholder="נושא"
            solo
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6">
          <quill-editor v-model="content" :options="editorOption">
          </quill-editor>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="6">
          <div @dragover.prevent @drop.prevent class="my-2 text-center">
            <input type="file" multiple @change="uploadFile" />
            <v-container
              class="justify-content-center"
              @drop="dragFile"
              id="dragDrop"
            >
              <v-row justify="center" class="mt-2 mb-2">
                <h3>או גרור את הקבצים לכאן</h3>
              </v-row>
              <v-row v-if="files.length === 0" justify="center" class="mb-2">
                <v-icon right large color="teal darken-2 mb-2">
                  mdi-file-document-multiple
                </v-icon>
              </v-row>

              <div v-else class="text-center">
                <ul v-for="(file, index) in files" :key="index">
                  <li>
                    <v-icon right small>mdi-file-document-multiple</v-icon
                    >{{ file.name }}
                  </li>
                </ul>
              </div>
            </v-container>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import axios from "axios";

import { quillEditor } from "vue-quill-editor";

export default {
  name: "NewPost",
  components: { "quill-editor": quillEditor },

  data() {
    return {
      content: "",
      files: [],
      title: "",
      editorOption: {
        modules: {
          toolbar: {
            container: [
              ["bold", "italic", "underline", "strike"], // toggled buttons
              ["blockquote"],

              [{ header: 1 }, { header: 2 }], // custom button values
              [{ list: "ordered" }, { list: "bullet" }],
              [{ script: "sub" }, { script: "super" }], // superscript/subscript
              [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
              [{ direction: "rtl" }],
              [{ align: "right" }][{ size: ["small", false, "large", "huge"] }], // text direction // custom dropdown
            ],
          },
        },
      },
    };
  },
  methods: {
    uploadFile(e) {
      this.files = e.target.files;
    },
    dragFile(e) {
      this.files = e.dataTransfer.files;
    },
    uploadPost() {
      const formData = new FormData();
      formData.append("content", this.content);
      formData.append("title", this.title);
      formData.append("patientId", 3);
      for (let i = 0; i < this.files.length; i++) {
        formData.append("files", this.files[i]);
      }

      const config = { headers: { "Content-Type": "multipart/form-data" } };
      axios.post("http://localhost:9000/api/post", formData, config);
    },
  },
  computed: {},
  mounted() {},
};
</script>
<style scoped>
#dragDrop {
  margin-top: 10px;
  padding: 15px;
  box-shadow: 5px 10px 18px #888888;
}

ul {
  list-style-type: none;
}
</style>
