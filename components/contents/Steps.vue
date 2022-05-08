<template>
  <v-container>
    <h5>パ/ステップ</h5>
    <contents-card v-for="step of stepResults" :key="step.japanese_notation" :content="step" :content-type="contentType">
    </contents-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      contentType: 'step'
    }
  },
  computed: {
    stepResults() {
      return this.$store.getters.stepResults
    },
  }
}
</script>

<style>

</style>
