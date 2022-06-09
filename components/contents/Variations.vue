<template>
  <div>
    <v-card-subtitle class="justify-center brown--text">
      <v-icon class="mr-2" color="brown lighten-1" dense>mdi-shoe-ballet</v-icon>
      ヴァリエーション
    </v-card-subtitle>

    <contents-card
      v-for="variation of variationResults"
      :key="variation.japanese_notation"
      :content="variation"
      :content-type="contentType"
    >
    </contents-card>
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
