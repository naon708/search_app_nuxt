<template>
  <div>
    <!-- ヴァリエーションリスト -->
    <div v-for="program of variation_programs" :key="program.id">
      <!-- 演目名 -->
      <p class="mt-5 text-center text-h5 text--secondary">
        <span style="background: linear-gradient(#ffffff 20%, #FFFDE7);">
          {{ program.name }}
        </span>
      </p>
      <div v-for="variation of variations" :key="variation.id">
        <!-- ヴァリエーションタイトル -->
        <v-card
          v-if="variation.variation_program_id === program.id"
          class="mb-2 d-flex align-center justify-center text--secondary"
          height="10vh"
          :elevation="1"
          @click="openDialog(); insertInDialog(variation)"
        >
            {{ variation.title }}
        </v-card>
      </div>
      <br>
    </div>

    <!-- ダイアログ -->
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="justify-center text-subtitle-1 text--secondary">
          {{ title }}
        </v-card-title>
        <v-card-actions class="mb-2 justify-center">
          <v-btn color="brown darken-2" width="260" outlined rounded large @click="searchBy(japaneseUrl)">
            <v-icon left>mdi-youtube</v-icon>
            <span class="text-body-1">日本語で検索する</span>
          </v-btn>
        </v-card-actions>
        <v-card-actions class="mb-2 justify-center">
          <v-btn color="brown darken-2" width="260" outlined rounded large @click="searchBy(translateUrl)">
            <v-icon left>mdi-youtube</v-icon>
            <span class="text-body-1">翻訳して検索する</span>
          </v-btn>
        </v-card-actions>
        <v-divider></v-divider>
        <v-card-actions class="pt-1">
          <v-spacer></v-spacer>
          <v-btn color="secondary" text @click="dialog = false">
            閉じる
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <FloatingActionButton />
  </div>
</template>

<script>
export default {
  data() {
    return {
      variations: [],
      variation_programs: [],
      dialog: false,
      title: '',
      japaneseUrl: '',
      translateUrl: ''
    }
  },
  head() {
    return {
      title: 'ヴァリエーション'
    }
  },
  async created() {
    try {
      const response = await this.$axios.$get('api/variations', { withCredentials: true })
      console.log('variations呼ばれた')
      this.variations = response
    } catch (e) {
      console.error("Error:", e);
    }
    try {
      const response = await this.$axios.$get('api/variation_programs', { withCredentials: true })
      console.log('variation_programs呼ばれた')
      this.variation_programs = response
    } catch (e) {
      console.error("Error:", e);
    }
  },
  methods: {
    openDialog() {
      this.dialog = true;
    },
    insertInDialog(detail) {
      this.title = detail.title;
      this.japaneseUrl = this.japaneseSearch(detail.japanese_notation);
      this.translateUrl = this.translateSearch(detail.universal_notation);
    },
    japaneseSearch(word) {
      // return `https://www.youtube.com/results?search_query=${word}+ヴァリエーション`
      return `${word}+ヴァリエーション`
    },
    translateSearch(word) {
      // return `https://www.youtube.com/results?search_query=${word}+variation`
      return `${word}+variation`
    },
    searchBy(word) {
      this.dialog = false
      this.$store.dispatch('searchBy', word)
      this.$store.commit('resetState')
      this.$router.push('/searchResults')
    }
  }
}
</script>

<style>

</style>