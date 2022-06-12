<template>
  <v-container>
    <v-form ref="form" @submit.prevent>
      <v-row>
        <v-col class="d-flex justify-space-around mx-2">
          <v-autocomplete
            v-model="searchWord"
            label="フリーワード検索"
            placeholder="例：白鳥"
            no-data-text="一致する用語がありません"
            append-icon=""
            solo
            rounded
            height="54"
            :items="titles"
            :rules="[rules.required]"
            @keypress.enter="inAppSearch"
          ></v-autocomplete>
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
      searchWord: '',
      rules: {
        required: value => !!value || '',
      },
      titles: [],
    }
  },
  created() {
    this.$axios.get(`/api/v1/autocompletes`).then((res) => {
      this.titles = res.data.titles
    }).catch(e => {
      this.$store.dispatch('setSnackbar', { message: '不具合が発生しました。時間をおいてお試しください' })
    })
  },
  methods: {
    inAppSearch() {
      if (!this.$refs.form.validate()) { return }

      this.$nuxt.$loading.start()
      this.$store.dispatch('inAppSearch', this.searchWord).then(() => {
        this.$nuxt.$loading.finish()
        this.$router.push('/inAppSearchResults')
      })
    }
  }
}
</script>

<style lang="scss" Scoped>
.theme--light.v-label {
  color: #6D4C41;
}
.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: #6D4C41;
}
.theme--light.v-input input, .theme--light.v-input textarea {
  color: #6D4C41;
}
</style>
