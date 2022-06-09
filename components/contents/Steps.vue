<template>
  <div>
    <v-card-subtitle class="justify-center brown--text">
      <v-icon class="mr-2" color="brown lighten-1" dense>mdi-human-female-dance</v-icon>
      パ / ステップ
    </v-card-subtitle>

    <contents-card
      v-for="step of stepResults"
      :key="step.japanese_notation"
      :content="step"
      :content-type="contentType"
    >
    </contents-card>
  </div>
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
