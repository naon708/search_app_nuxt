<template>
  <div>
    <h3>パ（ステップ）</h3>
    <div v-for="(step, index) of steps" :key="index">
      {{ step.japanese_name }} / {{ step.universal_name }}
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
  }
}
</script>

<style>

</style>