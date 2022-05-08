<template>
  <v-container>
    <h5>ヴァリエーション</h5>
    <contents-card v-for="variation of variationResults" :key="variation.japanese_notation" :content="variation" :content-type="contentType">
    </contents-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      contentType: 'variation'
    }
  },
  computed: {
    variationResults() {
      return this.$store.getters.variationResults
    },
  }
}
</script>

<style>

</style>
