<template>
    <div>
    <v-app-bar app color="primary" dark clipped-right>
    <v-icon @click="toggleRightPanel" large>mdi-account-group</v-icon>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-4"
          contain
          src="@/assets/logo.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
        
      <v-spacer></v-spacer>
        <v-icon @click="''" large class="me-4">mdi-cog</v-icon>
        <v-icon @click="''" large class="me-2">mdi-logout</v-icon>
    </v-app-bar>
    </div>
</template>

<script>
import { mapActions } from "vuex";


    export default {
        methods: {
            ...mapActions(['toggleRightPanel'])
        }
    }
</script>

<style scoped>

</style>