<template>
    <div>
    <v-card
        class="ma-2"
        color="primary lighten-5"
        rounded="pill"
        width="280px"
    >
    <div class="d-flex justify-space-between px-2 mx-2 py-2">
    <div class="">
        <v-avatar
        color="primary"
        size="58"
        class="me-4"
        >
          <v-img :src="`./assets/${therapist.img}.png`">
          </v-img>
        </v-avatar>
    </div>
    <div>
    <div class="text-h6">
        {{therapist.name}}
    </div>
    <div>
        {{therapist.prof}}
    </div>
    </div>
    <div class="align-self-center ms-4">
        <v-icon class="trash" button x-large color="red" @click="$emit('delete-therapist', tId)">mdi-trash-can</v-icon>
    </div>
    </div>
 </v-card>
    </div>
</template>

<script>
    export default {
        props: ['therapist', 'tId']
    }
</script>

<style lang="scss" scoped>
.trash:hover::before {
  visibility: visible;
  transform: scale(1.1);
}
</style>