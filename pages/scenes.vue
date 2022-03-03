<template>
  <div>
    <h3>演目から好きなシーンを探す</h3>
    <div v-for="program of programs" :key="program.id">
      <v-card
        class="mb-4 pl-4"
        :href="forSearch(program.universal_notation)"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ program.japanese_notation }}
      </v-card>
      <div v-for="scene of scenes" :key="scene.id" class="ml-4">
        <div v-if="scene.program_id === program.japanese_notation">
          {{ scene.japanese_notation }}
        </div>
      </div>
      <br>
    </div>
  </div>
</template>

<script>
import { getFirestore, collection, getDocs, orderBy, query } from "firebase/firestore";

export default {
  data() {
    return {
      programs: [],
      scenes: []
    }
  },
  async created() {
    try {
      const db = getFirestore(this.$firebaseApp);
      const programsRef = collection(db, "programs");
      const sortQuery = query(programsRef, orderBy("id"));

      const querySnapshot = await getDocs(sortQuery);
      querySnapshot.forEach((doc) => {
        this.programs.push(doc.data());
      });
    } catch (e) {
      console.error("Error:", e);
    }
    try {
      const db = getFirestore(this.$firebaseApp);

      const querySnapshot = await getDocs(collection(db, "scenes"));
      querySnapshot.forEach((doc) => {
        this.scenes.push(doc.data());
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