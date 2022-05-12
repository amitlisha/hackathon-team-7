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
          <v-img :src="`./assets/kidsPics/kid1.png`">
          </v-img>
        </v-avatar>
    </div>
    <div>
    <div class="text-h6">
        רותם אברהמי
    </div>
    <div>
        קלינאי תקשורת
    </div>
    </div>
    <div class="align-self-center ms-4">
        <v-icon class="trash" button x-large color="red">mdi-trash-can</v-icon>
    </div>
    </div>
 </v-card>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.trash:hover::before {
  visibility: visible;
  transform: scale(1.1);
}
</style>