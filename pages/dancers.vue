<template>
  <div>
    <h3>ダンサー</h3>
    <div v-for="dancer of dancers" :key="dancer.japanese_name">
      <v-card
        class="mb-4 pl-4"
        :href="forSearch(dancer.universal_name)"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ dancer.japanese_name }}
      </v-card>
    </div>
  </div>
</template>

<script>
import { getFirestore, collection, getDocs } from "firebase/firestore";

export default {
  data() {
    return {
      dancers: []
    }
  },
  async created() {
    try {
      const db = getFirestore(this.$firebaseApp);
      const querySnapshot = await getDocs(collection(db, "dancers"));
      querySnapshot.forEach((doc) => {
        this.dancers.push(doc.data());
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