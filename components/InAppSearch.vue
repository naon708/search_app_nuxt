<template>
  <v-container>
    <v-form>
      <v-row class="d-flex justify-space-around mx-2">
        <v-text-field v-model="searchWord" label="フリーワード検索" placeholder="例：白鳥" solo rounded height="54"></v-text-field>
        <v-btn class="mx-2" fab dark color="cyan" elevation="1" @click="inAppSearch">
          <v-icon dark>mdi-magnify</v-icon>
        </v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      searchWord: ''
    }
  },
  methods: {
    inAppSearch() {
      this.$nuxt.$loading.start()
      this.$store.dispatch('inAppSearch', this.searchWord).then(() => {
        this.$nuxt.$loading.finish()
        this.$router.push('/inAppSearchResults')
      })
    }
  }
}
</script>

<style>

</style>
