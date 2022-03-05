<template>
  <div>
    <!-- タブ -->
    <!-- <v-tabs background-color="yellow lighten-5" class="mb-2">
      <v-tab>有名な演目</v-tab>
      <v-tab>いろいろな演目</v-tab>
      <v-tab>すべて</v-tab>
    </v-tabs> -->

    <!-- ダイアログ -->
    <v-dialog v-model="dialog" width="500">

      <v-card>
        <v-card-title class="justify-center text-h6 text--secondary">
          {{ title }}
        </v-card-title>
        <v-card-actions class="justify-center">
          <v-btn color="indigo" :href="japaneseUrl" target="_blank" rel="noopener noreferrer" width="260" outlined rounded large>
            <v-icon left>mdi-youtube</v-icon>
            このまま検索する
          </v-btn>
        </v-card-actions>
        <v-card-actions class="justify-center">
          <v-btn color="indigo" :href="translateUrl" target="_blank" rel="noopener noreferrer" width="260" outlined rounded large>
            <v-icon left>mdi-youtube</v-icon>
            翻訳して検索する
          </v-btn>
        </v-card-actions>
        <v-card-actions class="mb-4 justify-center">
          <v-btn color="indigo" href="https://google.com" target="_blank" rel="noopener noreferrer" width="260" outlined rounded large>
            <div class="d-flex justify-left"><v-icon left>mdi-wikipedia</v-icon></div>
            ウィキペディアで調べる
          </v-btn>
        </v-card-actions>
        <v-divider></v-divider>
        <v-card-actions class="pt-1">
          <v-spacer></v-spacer>
          <v-btn color="secondary" text @click="dialog = false">
            閉じる
          </v-btn>
        </v-card-actions>
      </v-card>

    </v-dialog>

    <div v-for="program of programs" :key="program.furigana">
      <v-card
        class="mb-2 d-flex align-center justify-center text--secondary"
        height="10vh"
        :elevation="1"
        @click="openDialog(); insertInDialog(program)"
      >
        {{ program.japanese_notation }}
      </v-card>
    </div>
    
  </div>
</template>

<script>
import { getFirestore, collection, getDocs, orderBy, query } from "firebase/firestore";

export default {
  data() {
    return {
      programs: [],
      dialog: false,
      title: '',
      japaneseUrl: '',
      translateUrl: ''
    }
  },
  async created() {
    try {
      const db = getFirestore(this.$firebaseApp);
      const programsRef = collection(db, "programs");
      const sortQuery = query(programsRef, orderBy("furigana"));

      const querySnapshot = await getDocs(sortQuery);
      querySnapshot.forEach((doc) => {
        this.programs.push(doc.data());
      });
    } catch (e) {
      console.error("Error:", e);
    }
  },
  methods: {
    openDialog() {
      this.dialog = true;
    },
    insertInDialog(detail) {
      this.title = detail.japanese_notation;
      this.japaneseUrl = this.japaneseSearch(detail.japanese_notation);
      this.translateUrl = this.translateSearch(detail.universal_notation);
    },
    japaneseSearch(word) {
      return `https://www.youtube.com/results?search_query=${word}+バレエ`
    },
    translateSearch(word) {
      return `https://www.youtube.com/results?search_query=${word}+ballet`
    }
  }
}
</script>

<style>

</style>