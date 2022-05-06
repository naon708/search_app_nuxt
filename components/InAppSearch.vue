<template>
  <v-container>
    <v-form>
      <v-row>
        <v-col cols="12" sm="10">
          <v-text-field v-model="searchWord" label="フリーワード検索" placeholder="白鳥" solo rounded></v-text-field>
        </v-col>
        <v-col cols="12" sm="2">
          <v-btn class="mx-2" fab dark color="cyan" elevation="1" @click="inAppSearch">
            <v-icon dark>mdi-magnify</v-icon>
          </v-btn>
        </v-col>
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
