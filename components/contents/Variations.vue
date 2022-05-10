<template>
  <div>
    <v-card-subtitle class="justify-center brown--text">
      <v-icon class="mr-2" color="brown lighten-1" dense>mdi-shoe-ballet</v-icon>
      ヴァリエーション
    </v-card-subtitle>

    <div v-if="variationResults.length">
      <contents-card v-for="variation of variationResults" :key="variation.japanese_notation" :content="variation" :content-type="contentType">
      </contents-card>
    </div>
    <div v-else>
      <v-card-text class="pa-0 text-center brown--text">一致する項目はありませんでした。</v-card-text>
    </div>
  </div>
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
