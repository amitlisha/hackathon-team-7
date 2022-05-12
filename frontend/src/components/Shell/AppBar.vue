<template>
    <div>
    <v-app-bar app color="primary" dark clipped-right>
    <v-icon @click="toggleRightPanel" class="button" large>mdi-account-group</v-icon>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-4"
          contain
          src="@/assets/logo.png"
          transition="scale-transition"
          width="40"
        />

      </div>
        
      <v-spacer></v-spacer>
            <v-row class="align-center justify-space-around">
            <router-link class="text-h5 text-decoration-none white--text animated-underline" to="/home">עמוד ראשי</router-link>
            <div class="text-h5 seondary--text px-3">|</div>
            <router-link class="text-h5 text-decoration-none white--text animated-underline" to="/management">ניהול</router-link>
            <div class="text-h5 seondary--text px-3">|</div>
            <router-link class="text-h5 text-decoration-none white--text animated-underline" to="/favorites">תקציר התיק</router-link>
            </v-row>

      <v-spacer></v-spacer>
        <v-icon @click="''" large class="me-4 button">mdi-cog</v-icon>
        <v-icon @click="''" large class="me-2 button">mdi-logout</v-icon>
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
.router-link-active {
  color: var(--v-primary-base);
}

.animated-underline {
  position: relative;
  text-decoration: none;
}

.animated-underline::before {
  content: '';
  position: absolute;
  left: 18%;
  width: 70%;
  height: 1.75px;
  bottom: 0;
  background-color: var(--v-primary-base);
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
}

.animated-underline:hover::before {
  visibility: visible;
  transform: scaleX(1);
}

.animated-underline,
.button {
  transition: all 0.2s ease-in-out 0s;
}

.animated-underline:hover,
.button:hover,
.router-link-active {
  transform: scale(1.2);
}

.is-active::before {
  visibility: visible;
  transform: none;
}


</style>