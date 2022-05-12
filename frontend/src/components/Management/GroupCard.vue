<template>
    <div>
<v-card
    class="mx-auto ps-3 pb-4"
    width="60%"
  >
    <v-card-text>
     <div class="d-flex justify-space-between">

      <p class="text-h4 text--primary">
        {{group.name}}
    </p>
      <div class="self-align-center">
        <v-icon class="trash" x-large color="grey" @click="$emit('delete-group',groupIndex)">mdi-trash-can-outline</v-icon>
      </div>
     </div>

      <v-row class="threapists mt-1">
    <transition-group tag="div" name="card-fade" class="content__list row">
        <therapist-card v-for="(therapist, i) in group.therapists" :key="therapist.name" @delete-therapist="(tId)=>$emit('delete-therapist', {groupIndex, tId})" :tId="i" :therapist="therapist"></therapist-card>
        <v-icon color="primary lighten-1" x-large class="ms-8" key="sfd">mdi-plus-circle</v-icon>
    </transition-group>
      </v-row>
    </v-card-text>
    
  </v-card>
    </div>
</template>

<script>
import TherapistCard from "./TherapistCard"
    export default {
        components: {
            TherapistCard
        },
        props: ['group','groupIndex']
    }
</script>

<style lang="scss" scoped>
/* base */
.card-fade {
  backface-visibility: hidden;
  z-index: 1;
}

/* moving */
.card-fade-move {
  transition: all 400ms ease-in-out 20ms;
}

/* appearing */
.card-fade-enter-active {
  transition: all 1000ms ease-out;
}

/* disappearing */
.card-fade-leave-active {
  transition: all 200ms ease-in;
  position: absolute;
  z-index: 0;
}

/* appear at / disappear to */
.card-fade-enter,
.card-fade-leave-to {
  opacity: 0
}
</style>