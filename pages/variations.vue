<template>
  <div>
    <h3>コンクールの課題曲</h3>
    <div v-for="program of variation_programs" :key="program.id">
      {{ program.name }}
      <div v-for="variation of variations" :key="variation.id" class="ml-4">
        <v-card
          class="mb-4 pl-4"
          :href="forSearch(variation.universal_name)"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div v-if="program.name === variation.program_name">
            {{ variation.japanese_name }}
          </div>
        </v-card>
      </div>
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
      const querySnapshot = await getDocs(collection(db, "variations"));
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
        console.log(this.variation_programs);
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