<template>
  <div>
    <div v-for="dancer of dancers" :key="dancer.japanese_notation">
      <v-card
        class="mb-2 pl-2 d-flex align-center justify-center"
        height="10vh"
        :href="forSearch(dancer.universal_notation)"
        target="_blank"
        rel="noopener noreferrer"
        :elevation="1"
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
      dancers: []
    }
  },
  async created() {
    try {
      const db = getFirestore(this.$firebaseApp);
      const dancersRef = collection(db, "dancers");
      const sortQuery = query(dancersRef, orderBy("japanese_notation"));

      const querySnapshot = await getDocs(sortQuery);
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