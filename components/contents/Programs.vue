<template>
  <div>
    <v-card-subtitle class="justify-center brown--text">
      <v-icon class="mr-2" color="brown lighten-1" dense>mdi-subtitles-outline</v-icon>
      演目
    </v-card-subtitle>

    <contents-card
      v-for="program of programResults"
      :key="program.japanese_notation"
      :content="program"
      :content-type="contentType"
    >
    </contents-card>
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
