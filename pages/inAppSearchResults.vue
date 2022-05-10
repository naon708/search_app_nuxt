<template>
  <div>
    <in-app-search></in-app-search>

    <contents-programs class="mb-10"></contents-programs>
    <contents-variations class="mb-10"></contents-variations>
    <contents-steps class="mb-10"></contents-steps>
    <contents-dancers class="mb-12"></contents-dancers>

    <v-divider></v-divider>

    <list-area class="mt-8 mb-12"></list-area>

    <request-links class="mb-4"></request-links>
  </div>
</template>

<script>
import InAppSearch from '../components/InAppSearch.vue'
import RequestLinks from '../components/topPage/RequestLinks.vue'
import ListArea from '../components/topPage/ListArea.vue'
export default {
  components: { InAppSearch, RequestLinks, ListArea },

}
</script>

<style>

</style>
