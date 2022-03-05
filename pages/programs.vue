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
        <v-card-title class="text-h5">{{ title }}</v-card-title>
        <v-card-text>てすとぶんしょう</v-card-text>
        <v-card-actions class="justify-center">
          <v-btn
            color="primary"
            :href="url"
            target="_blank"
            rel="noopener noreferrer"
          >
            自動翻訳して検索する
            <!-- forSearch(program.universal_notation) -->
          </v-btn>
        </v-card-actions>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            閉じる
          </v-btn>
        </v-card-actions>
      </v-card>

    </v-dialog>

    <div v-for="program of programs" :key="program.furigana">
      <v-card
        class="mb-2 d-flex align-center justify-center"
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
      url: ''
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
    forSearch(word) {
      return `https://www.youtube.com/results?search_query=ballet+${word}`
    },
    openDialog() {
      this.dialog = true;
    },
    insertInDialog(detail) {
      this.title = detail.japanese_notation;
      this.url = this.forSearch(detail.universal_notation);
    }
  }
}
</script>

<style>

</style>