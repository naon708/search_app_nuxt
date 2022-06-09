<template>
  <div>
    <v-card-subtitle class="justify-center brown--text">
      <v-icon class="mr-2" color="brown lighten-1" dense>mdi-account-star-outline</v-icon>
      ダンサー
    </v-card-subtitle>

    <contents-card
      v-for="dancer of dancerResults"
      :key="dancer.japanese_notation"
      :content="dancer"
      :content-type="contentType"
    >
    </contents-card>
  </div>
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
