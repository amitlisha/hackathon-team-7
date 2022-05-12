<template>
    <div>
<v-card
    class="mx-auto"
    width="60%"
  >
    <v-card-text>
     <div class="d-flex justify-space-between">

      <p class="text-h4 text--primary">
        קלינאי התקשורת
      </p>
      <div class="self-align-center">
        <v-icon class="trash" button x-large color="grey">mdi-trash-can-outline</v-icon>
      </div>
     </div>

      <v-row class="threapists mt-1">
          <div>
            <therapist-card></therapist-card>
          </div>
        <therapist-card></therapist-card>
        <therapist-card></therapist-card>
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
        }
    }
</script>

<style lang="scss" scoped>

</style>