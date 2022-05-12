<template>
<div>
    <div class="mt-8">
    <transition-group tag="div" name="card-fade" class="content__list">
      <group-card class="my-8" v-for="(group, i) in groups" :key="group.name" :group="group" :groupIndex="i" @delete-therapist="deleteTherapist" @delete-group="deleteGroup"></group-card>
    </transition-group>
    </div>
    <v-btn
    class="lighten-1"
        color="primary"
        elevation="1"
        fab
        absolute
        left
        bottom
    >
    <v-icon x-large>mdi-plus</v-icon>
    </v-btn>
</div>
</template>

<script>
import GroupCard from './GroupCard.vue'
    export default {
        components: {
            GroupCard
        },
        data() {
            return {
            groups: [
                {
                    name: "אנשי חינוך",
                    therapists: [
                        {
                            name: "רותם אברהמי",
                            img: "Mprofile",
                            prof: "קלינאי תקשורת"
                        },
                                                {
                            name: "ליאורה לישה",
                            img: "Lprofile",
                            prof: "סייעת"
                        },
                                                {
                            name: "סתיו ביטס",
                            img: "Lprofile",
                            prof: "קלינאית תקשורת"
                        }
                    ]
                },
                {
                    name: "אנשי תקשורת",
                    therapists: [
                        {
                            name: "ליאורה לישה",
                            img: "Lprofile",
                            prof: "סייעת"
                        },
                        {
                            name: "אסף לישה",
                            img: "Mprofile",
                            prof: "מנתח התנהגות"
                        },
                        {
                            name: "דניאל רווח",
                            img: "Mprofile",
                            prof: "מטפל רגשי"
                        },
                        {
                            name: "הילה אלקיים",
                            img: "Mprofile",
                            prof: "ריפוי בעיסוק"
                        }
                    ]
                }
            ]
            }
        }, methods: {
            deleteGroup(index) {
                this.groups.splice(index, 1);
            }, deleteTherapist({groupIndex, tId}) {
                this.groups[groupIndex].therapists.splice(tId,1)
            }
        }
    }
</script>

<style scoped>
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