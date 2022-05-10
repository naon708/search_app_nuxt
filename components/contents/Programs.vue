<template>
  <div>
    <v-card-subtitle class="justify-center brown--text">
      <v-icon class="mr-2" color="brown lighten-1" dense>mdi-subtitles-outline</v-icon>
      演目
    </v-card-subtitle>

    <div v-if="programResults.length">
      <contents-card v-for="program of programResults" :key="program.japanese_notation" :content="program" :content-type="contentType">
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
