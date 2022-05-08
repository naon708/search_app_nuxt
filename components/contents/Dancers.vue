<template>
  <v-container>
    <h5>ダンサー</h5>
    <contents-card v-for="dancer of dancerResults" :key="dancer.japanese_notation" :content="dancer" :content-type="contentType">
    </contents-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      contentType: 'dancer'
    }
  },
  computed: {
    dancerResults() {
      return this.$store.getters.dancerResults
    },
  }
}
</script>

<style>

</style>
