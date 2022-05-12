<template>
<div>
    <div class="mt-8">
      <group-card class="my-8"></group-card>
      <group-card class="my-8"></group-card>
    </div>
    <v-btn
        class="lighten-4 black--text"
        color="primary"
        elevation="2"
        width="100px"
        fab
        absolute
        left
        bottom
    >
    קבוצה חדשה
    </v-btn>
</div>
</template>

<script>
import GroupCard from './GroupCard.vue'
    export default {
        components: {
            GroupCard
        }
    }
</script>

<style scoped>
.sdf {

}
</style>