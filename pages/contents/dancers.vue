<template>
  <div>
    <!-- ダンサーリスト -->
    <div v-for="dancer of dancers" :key="dancer.japanese_notation">
      <v-card
        class="mb-2 d-flex align-center justify-center secondary--text"
        height="10vh"
        :elevation="1"
        @click="openDialog(); insertInDialog(dancer)"
      >
        {{ dancer.japanese_notation }}
      </v-card>
    </div>

    <!-- ダイアログ -->
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="justify-center text-h6 secondary--text">
          <span style="background: linear-gradient(#ffffff 20%, #FFFDE7);">
            {{ title }}
          </span>
        </v-card-title>
        <v-card-actions class="mb-2 justify-center">
          <!-- <v-btn color="brown darken-2" :href="japaneseUrl" target="_blank" rel="noopener noreferrer" width="260" outlined rounded large> -->
          <v-btn color="brown darken-2" width="260" outlined rounded large @click="searchBy(japaneseUrl)">
            <v-icon left>mdi-magnify</v-icon>
            <span class="text-body-1">このまま検索する</span>
          </v-btn>
        </v-card-actions>
        <v-card-actions class="mb-2 justify-center">
          <!-- <v-btn color="brown darken-2" :href="translateUrl" target="_blank" rel="noopener noreferrer" width="260" outlined rounded large> -->
          <v-btn color="brown darken-2" width="260" outlined rounded large @click="searchBy(translateUrl)">
            <v-icon left>mdi-magnify</v-icon>
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
      dancers: [],
      dialog: false,
      title: '',
      japaneseUrl: '',
      translateUrl: ''
    }
  },
  head() {
    return {
      title: 'ダンサー'
    }
  },
  async created() {
    try {
      const response = await this.$axios.$get('api/dancers', { withCredentials: true })
      console.log('dancers呼ばれた')
      this.dancers = response
    } catch (e) {
      console.error("Error:", e);
    }
  },
  methods: {
    openDialog() {
      this.dialog = true;
    },
    insertInDialog(detail) {
      this.title = detail.japanese_notation;
      this.japaneseUrl = this.japaneseSearch(detail.japanese_notation);
      this.translateUrl = this.translateSearch(detail.universal_notation);
    },
    japaneseSearch(word) {
      return `${word}`
    },
    translateSearch(word) {
      return `${word}+ballet`
    },
    searchBy(word) {
      this.dialog = false
      this.$store.dispatch('searchBy', word).then(() => {
        this.$router.push('/searchResults')
      })
    }
  }
}

</script>

<style>

</style>