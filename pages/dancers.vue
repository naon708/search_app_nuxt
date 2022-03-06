<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="justify-center text-h6 text--secondary">
          {{ title }}
        </v-card-title>
        <v-card-actions class="mb-2 justify-center">
          <v-btn color="indigo" :href="japaneseUrl" target="_blank" rel="noopener noreferrer" width="260" outlined rounded large>
            <v-icon left>mdi-youtube</v-icon>
            <span class="text-body-1">このまま検索する</span>
          </v-btn>
        </v-card-actions>
        <v-card-actions class="mb-2 justify-center">
          <v-btn color="indigo" :href="translateUrl" target="_blank" rel="noopener noreferrer" width="260" outlined rounded large>
            <v-icon left>mdi-youtube</v-icon>
            <span class="text-body-1">翻訳して検索する</span>
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

    <div v-for="dancer of dancers" :key="dancer.japanese_notation">
      <v-card
        class="mb-2 d-flex align-center justify-center text--secondary"
        height="10vh"
        :elevation="1"
        @click="openDialog(); insertInDialog(dancer)"
      >
        {{ dancer.japanese_notation }}
      </v-card>
    </div>
  </div>
</template>

<script>
import { getFirestore, collection, getDocs, query, orderBy } from "firebase/firestore";

export default {
  data() {
    return {
      dancers: [],
      dialog: false,
      title: '',
      japaneseUrl: '',
      translateUrl: ''
    }
  },
  async created() {
    try {
      const db = getFirestore(this.$firebaseApp);
      const dancersRef = collection(db, "dancers");
      const sortQuery = query(dancersRef, orderBy("furigana"));

      const querySnapshot = await getDocs(sortQuery);
      querySnapshot.forEach((doc) => {
        this.dancers.push(doc.data());
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
      return `https://www.youtube.com/results?search_query=${word}`
    },
    translateSearch(word) {
      return `https://www.youtube.com/results?search_query=${word}+ballet`
    }
  }
}

</script>

<style>

</style>