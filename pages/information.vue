<template>
  <v-simple-table fixed-header class="secondary--text">
    <template #default>
      <thead>
        <tr>
          <th class="secondary--text font-weight-bold">更新日</th>
          <th class="secondary--text font-weight-bold">内容</th>
        </tr>
      </thead>
        <tbody>
          <!-- HACK -->
          <v-subheader class="secondary--text font-weight-medium">2023</v-subheader>
          <tr v-for="i in information" :key="i.id">
            <td v-if="i.year === '2023'">{{ i.date }}</td>
            <td v-if="i.year === '2023'">{{ i.content }}</td>
          </tr>
          <v-subheader class="secondary--text font-weight-medium">2022</v-subheader>
          <tr v-for="i in information" :key="i.id">
            <td v-if="i.year === '2022'">{{ i.date }}</td>
            <td v-if="i.year === '2022'">{{ i.content }}</td>
          </tr>
        </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import { getFirestore, collection, getDocs, orderBy, query } from "firebase/firestore";

export default {
  data () {
    return {
      information: [],
    }
  },
  head() {
    return {
      title: 'お知らせ'
    }
  },

  async created() {
    try {
      const db = getFirestore(this.$firebaseApp);
      const informationRef = collection(db, "information");
      const sortQuery = query(informationRef, orderBy("date", "desc"));
      const querySnapshot = await getDocs(sortQuery);
      querySnapshot.forEach((doc) => {
        this.information.push(doc.data());
      });
    } catch (e) {
      console.error("Error:", e);
    }
  },
}
</script>

<style>

</style>
