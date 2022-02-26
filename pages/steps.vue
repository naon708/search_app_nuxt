<template>
  <div>
    <h3>パ / ステップを調べる</h3>
    <div v-for="step of steps" :key="step.japanese_name">
      <v-card
        class="mb-4 pl-4"
        :href="forSearch(step.universal_name)"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ step.japanese_name }}
      </v-card>
    </div>
  </div>
</template>

<script>
import { getFirestore, collection, getDocs } from "firebase/firestore";

export default {
  data() {
    return {
      steps: []
    }
  },
  async created() {
    try {
      const db = getFirestore(this.$firebaseApp);
      const querySnapshot = await getDocs(collection(db, "steps"));
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