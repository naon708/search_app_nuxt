<template>
  <div>
    <div v-for="step of steps" :key="step.japanese_notation">
      <v-card
        class="mb-2 pl-2 d-flex align-center justify-center"
        height="10vh"
        :href="forSearch(step.universal_notation)"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ step.japanese_notation }}
      </v-card>
    </div>
  </div>
</template>

<script>
import { getFirestore, collection, getDocs, query, orderBy } from "firebase/firestore";

export default {
  data() {
    return {
      steps: []
    }
  },
  async created() {
    try {
      const db = getFirestore(this.$firebaseApp);
      const stepsRef = collection(db, "steps");
      const sortQuery = query(stepsRef, orderBy("japanese_notation"));

      const querySnapshot = await getDocs(sortQuery);
      querySnapshot.forEach((doc) => {
        this.steps.push(doc.data());
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