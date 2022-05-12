<template>
  <div>
    <v-container>
      <v-card>
        <v-row justify="center mt-2" class="mb-0 pb-0">
          <v-col cols="10" class="mb-0 pb-0">
            <v-text-field
              dir="rtl"
              label="נושא"
              v-model="title"
              placeholder="נושא"
              solo
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center" class="mt-0 pt-0">
          <v-col cols="10">
            <quill-editor v-model="content" :options="editorOptions">
            </quill-editor>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="10">
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
        <v-btn @click="uploadPost"> פרסם את הדיווח</v-btn>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
// eslint-disable-next-line no-unused-vars
import editorOptions from "./editorOptions";
import { quillEditor } from "vue-quill-editor";
import api from "@/api";

export default {
  name: "NewPost",
  components: { "quill-editor": quillEditor },

  data() {
    return {
      content: "",
      files: [],

      title: "",
      editorOptions,
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
      api.post("/api/post", formData, config);
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
body {
  overflow: hidden;
}
</style>
