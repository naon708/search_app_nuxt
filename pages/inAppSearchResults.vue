<template>
  <div>
    <in-app-search v-if="$vuetify.breakpoint.xs"></in-app-search>
    <auto-complete v-else></auto-complete>

    <div class="mb-16">
      <contents-programs v-if="programResults.length" class="mb-10"></contents-programs>
      <contents-variations v-if="variationResults.length" class="mb-10"></contents-variations>
      <contents-steps v-if="stepResults.length" class="mb-10"></contents-steps>
      <contents-dancers v-if="dancerResults.length" class="mb-12"></contents-dancers>

      <v-card-text v-if="isNoResults" class="mt-12 pa-0 text-center brown--text">
        <v-icon class="mb-2" color="cyan darken-1">mdi-emoticon-cry-outline</v-icon><br>
        一致する項目はありませんでした。
      </v-card-text>
    </div>

    <v-divider></v-divider>

    <request-links class="mt-16 mb-4"></request-links>

    <list-area class="mt-8 mb-12"></list-area>
  </div>
</template>

<script>
import InAppSearch from '../components/InAppSearch.vue'
import RequestLinks from '../components/topPage/RequestLinks.vue'
import ListArea from '../components/topPage/ListArea.vue'
export default {
  components: { InAppSearch, RequestLinks, ListArea },
  computed: {
    programResults() {
      return this.$store.getters.programResults
    },
    variationResults() {
      return this.$store.getters.variationResults
    },
    stepResults() {
      return this.$store.getters.stepResults
    },
    dancerResults() {
      return this.$store.getters.dancerResults
    },
    isNoResults() {
      const isBlank = (v) => !v.length;
      return Object.values(this.$store.state.inAppSearchResults).every(isBlank)
    },
  },
}
</script>

<style>

</style>
