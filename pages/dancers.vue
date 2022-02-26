<template>
  <div>
    <h3>ダンサー</h3>
    <div v-for="(title, index) of titles" :key="`1${index}`">
      {{ title }}
    </div>
    <div v-for="(dancer, index) of dancers" :key="index">
      {{ dancer.japanese_name }} / {{ dancer.universal_name }} / {{ dancer.russian_name }}
    </div>
  </div>
</template>

<script>
import { getFirestore, collection, getDocs } from "firebase/firestore";

export default {
  data() {
    return {
      titles: [],
      dancers: []
    }
  },
  async created() {
    try {
      const db = getFirestore(this.$firebaseApp);
      const querySnapshot = await getDocs(collection(db, "dancers"));
      querySnapshot.forEach((doc) => {
        this.titles.push(doc.id);
        this.dancers.push(doc.data());
        console.log(this.dancers);
        // console.log(`これ: ${JSON.stringify(doc)}`);
      });
    } catch (e) {
      console.error("Error:", e);
    }
  }
}

</script>

<style>

</style>