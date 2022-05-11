<template>
    <div>
    <v-navigation-drawer app right clipped :value="isRightPanelOpen" @input="(v)=>updateRightPanel(v)" >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h5">
            הילדים שלי
          </v-list-item-title>
              {{currentChildren}}
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="kid in kids"
          :key="kid.name"
          link
          class="mt-2 mb-4"
          @click="updateCurrentChildren"
        >
        <v-avatar
        color="primary"
        size="48"
        class="me-4"
        >
          <v-img :src="`./assets/kidsPics/${kid.imgSrc}.png`">
          </v-img>
        </v-avatar>

          <v-list-item-content>
            <v-list-item-title class="text-h6 name-label">{{ kid.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
        data () {
        return {
            kids: [
                { name: 'עמית אלקיים', imgSrc: 'kid1' },
                { name: 'עידו לישה', imgSrc: 'kid2' },
                { name: 'רון רווח', imgSrc: 'kid3' },
                ],
            }
        },
        computed: {
           ...mapState(['isRightPanelOpen', 'currentChildren'])
        }, methods: {
            ...mapActions(['updateRightPanel', 'updateCurrentChildren'])
        }
}
</script>

<style scoped>
.name-label {
    line-height: normal !important;
}
</style>