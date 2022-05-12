<template>
  <div>
    <v-navigation-drawer
      app
      right
      clipped
      :value="isRightPanelOpen"
      @input="(v) => updateRightPanel(v)"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h5"> הילדים שלי </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav v-if="kids.length > 0">
        <v-list-item-group
          @change="(v) => updateCurrentChildren(kids[v])"
          mandatory
        >
          <v-list-item
            v-for="(kid, index) in kids"
            :key="index"
            link
            class="mt-2 mb-4"
          >
            <v-avatar color="primary" size="48" class="me-4">
              <v-img :src="`./assets/kidsPics/kid${index + 1}.png`"> </v-img>
            </v-avatar>

            <v-list-item-content>
              <v-list-item-title class="text-h6 name-label">{{
                `${kid.firstName} ${kid.lastName}`
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import api from "@/api";

export default {
  data() {
    return {
      kids: [],
    };
  },
  computed: {
    ...mapState(["isRightPanelOpen", "currentChildren"]),
  },
  methods: {
    ...mapActions(["updateRightPanel", "updateCurrentChildren"]),
  },
  async created() {
    this.kids = await (await api.get(`/api/patient`)).data;
  },
};
</script>

<style scoped>
.name-label {
  line-height: normal !important;
}
</style>
