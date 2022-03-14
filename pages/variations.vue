<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="justify-center text-subtitle-1 text--secondary">
          {{ title }}
        </v-card-title>
        <v-card-actions class="mb-2 justify-center">
          <v-btn color="brown darken-2" :href="japaneseUrl" target="_blank" rel="noopener noreferrer" width="260" outlined rounded large>
            <v-icon left>mdi-youtube</v-icon>
            <span class="text-body-1">日本語で検索する</span>
          </v-btn>
        </v-card-actions>
        <v-card-actions class="mb-2 justify-center">
          <v-btn color="brown darken-2" :href="translateUrl" target="_blank" rel="noopener noreferrer" width="260" outlined rounded large>
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

    <div v-for="program of variation_programs" :key="program.id">
      <!-- 演目名 -->
      <p class="mt-5 text-center text-h5 text--secondary">
        <span style="background: linear-gradient(#ffffff 20%, #FFFDE7);">
          {{ program.name }}
        </span>
      </p>
      <div v-for="variation of variations" :key="variation.title">
        <!-- ヴァリエーションタイトル -->
        <v-card
          v-if="variation.program_name === program.name"
          class="mb-2 d-flex align-center justify-center text--secondary"
          height="10vh"
          :elevation="1"
          @click="openDialog(); insertInDialog(variation)"
        >
            {{ variation.title }}
        </v-card>
      </div>
      <br>
    </div>
    <FloatingActionButton />
  </div>
</template>

<script>
import { getFirestore, collection, getDocs, query, orderBy } from "firebase/firestore";

export default {
  data() {
    return {
      variations: [],
      variation_programs: [],
      dialog: false,
      title: '',
      japaneseUrl: '',
      translateUrl: ''
    }
  },
  head() {
    return {
      title: 'ヴァリエーション'
    }
  },
  async created() {
    try {
      const db = getFirestore(this.$firebaseApp);
      const variationsRef = collection(db, "variations");
      const sortQuery = query(variationsRef, orderBy("title"));

      const querySnapshot = await getDocs(sortQuery);
      querySnapshot.forEach((doc) => {
        this.variations.push(doc.data());
      });
    } catch (e) {
      console.error("Error:", e);
    }
    try {
      const db = getFirestore(this.$firebaseApp);
      const variationProgramsRef = collection(db, "variation_programs");
      const sortQuery = query(variationProgramsRef, orderBy("id"));

      const querySnapshot = await getDocs(sortQuery);
      querySnapshot.forEach((doc) => {
        this.variation_programs.push(doc.data());
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
      this.title = detail.title;
      this.japaneseUrl = this.japaneseSearch(detail.japanese_notation);
      this.translateUrl = this.translateSearch(detail.universal_notation);
    },
    japaneseSearch(word) {
      return `https://www.youtube.com/results?search_query=${word}+ヴァリエーション`
    },
    translateSearch(word) {
      return `https://www.youtube.com/results?search_query=${word}+variation`
    }
  }
}
</script>

<style>

</style>