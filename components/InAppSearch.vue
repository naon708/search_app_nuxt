<template>
  <v-container>
    <v-form ref="form" @submit.prevent>
      <v-row>
        <v-col class="d-flex justify-space-around mx-2">
          <v-text-field
            v-model="searchWord"
            label="フリーワード検索"
            placeholder="例：白鳥"
            solo
            rounded
            height="54"
            :rules="[rules.required, rules.counter]"
            @keypress.enter="inAppSearch"
          ></v-text-field>
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
        counter: value => value.length <= 20 || '20文字以内が有効です',
      }
    }
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

<style>
.theme--light.v-label {
  color: #6D4C41;
}
</style>
