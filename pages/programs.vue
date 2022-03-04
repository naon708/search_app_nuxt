<template>
  <div>
    <!-- タブ -->
    <v-tabs background-color="yellow lighten-5" class="mb-2">
      <v-tab>Item One</v-tab>
      <v-tab>Item Two</v-tab>
      <v-tab>Item Three</v-tab>
    </v-tabs>
    <div v-for="program of programs" :key="program.furigana">
      <v-card
        class="mb-2 pl-2 d-flex align-center justify-center"
        height="10vh"
        :href="forSearch(program.universal_notation)"
        target="_blank"
        rel="noopener noreferrer"
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
      programs: []
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
    }
  }
}
</script>

<style>

</style>