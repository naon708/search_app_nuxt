<template>
  <v-container>
    <h5>演目</h5>
    <contents-card v-for="program of programResults" :key="program.japanese_notation" :content="program" :content-type="contentType">
    </contents-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      contentType: 'program'
    }
  },
  computed: {
    programResults() {
      return this.$store.getters.programResults
    },
  }
}
</script>

<style>

</style>
