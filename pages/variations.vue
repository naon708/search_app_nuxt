<template>
  <div>
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
          v-if="program.name === variation.program_name"
          class="mb-2 d-flex align-center justify-center text--secondary"
          height="10vh"
          :elevation="1"
          :href="forSearch(variation.universal_notation)"
          target="_blank"
          rel="noopener noreferrer"
        >
            {{ variation.title }}
        </v-card>
      </div>
      <br>
    </div>
  </div>
</template>

<script>
import { getFirestore, collection, getDocs, query, orderBy } from "firebase/firestore";

export default {
  data() {
    return {
      variations: [],
      variation_programs: []
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
    forSearch(word) {
      return `https://www.youtube.com/results?search_query=${word}+ballet`
    }
  }
}
</script>

<style>

</style>