<template>
  <div>
    <h3>ヴァリエーション</h3>
    <div v-for="(variation, index) of variations" :key="index">
      {{ variation.japanese_name }} / {{ variation.universal_name }}
    </div>
  </div>
</template>

<script>
import { getFirestore, collection, getDocs } from "firebase/firestore";

export default {
  data() {
    return {
      variations: []
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
  }
}
</script>

<style>

</style>