<template>
  <div>
    <v-card class="mx-auto my-5" max-width="600px" outlined>
      <v-list-item three-line>
        <v-list-item-avatar tile size="50" color="grey">
          <v-img
            src="https://w7.pngwing.com/pngs/735/852/png-transparent-computer-icons-therapy-speech-strong-women-child-face-head-thumbnail.png"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content class="my-0">
          <v-row justify="space-between" class="my-0">
            <v-col cols="10">
              <v-list-item-title class="text-h5 mt-2">
                מיכל ינאי - קלינאית תקשורת ומטפלת
              </v-list-item-title>
            </v-col>
            <v-col cols="2">
              <v-btn icon
                ><v-icon
                  large
                  dense
                  :color="true ? 'yellow lighten-1' : 'grey-lighten-3'"
                >
                  mdi-bookmark</v-icon
                ></v-btn
              >
            </v-col>
          </v-row>
          <v-row class="my-0">
            <v-col class="my-0 pb-1" v-if="postPrmissions <= 0">
              <v-list-item-subtitle>
                כרגע רק אתה רואה את הפוסט, תרצה לשתף אותו?
              </v-list-item-subtitle>
            </v-col>
            <v-col>
              <v-autocomplete
                class="my-0 pt-0 pb-1"
                v-model="postPrmissions"
                :items="['טל מוסרי', 'קובי מחט', 'מטפלים נוכחיים']"
                label="לחץ כדי לשתף"
                dense
                rounded
                multiple
                small-chips
              ></v-autocomplete>
            </v-col>
          </v-row>

          <v-list-item-content class="pt-0 mb-1"
            >הילד היה בטיפול של שעה, עבדנו בעיקר על חרדת דיבור ועל דרכי
            התמודדות, הצבנו מטרה שידבר עם שני ילדים חדשים עד סוף השבוע ויעדכן
            אותי איך היה</v-list-item-content
          >
        </v-list-item-content>
      </v-list-item>
      <v-row justify="center">
        <v-btn @click="clickOnPdf()"
          >סיכום פגישה <v-icon class="mr-1">mdi-file-pdf-box</v-icon></v-btn
        >
      </v-row>
    </v-card>
    <v-dialog v-if="currPdfPageNum > 0" v-model="showModel">
      <pdf
        v-for="i in currPdfPageNum"
        :key="i"
        :src="currPdfSrc"
        :page="i"
        style="display: inline-block; width: 25%"
      ></pdf>
    </v-dialog>
  </div>
</template>
<script>
import pdf from "vue-pdf";

export default {
  components: {
    pdf,
  },
  name: "FeedPost",
  data() {
    return {
      currPdfSrc: "",
      showModel: false,
      currPdfPageNum: 0,
      postPrmissions: [],
    };
  },
  methods: {
    clickOnPdf() {
      this.currPdfSrc = pdf.createLoadingTask("./assets/Fire.pdf");
      this.currPdfSrc.promise.then((pdf) => {
        this.currPdfPageNum = pdf.numPages;
      });
      this.showModel = true;
    },
  },
  computed: {},
  mounted() {},
};
</script>
<style lang=""></style>
