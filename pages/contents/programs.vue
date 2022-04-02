<template>
  <div>
    <!-- タブ（ToDo） -->
    <!-- <v-tabs background-color="yellow lighten-5" class="mb-2">
      <v-tab>有名な演目</v-tab>
      <v-tab>いろいろな演目</v-tab>
      <v-tab>すべて</v-tab>
    </v-tabs> -->

    <!-- 演目リスト -->
    <div v-for="program of programs" :key="program.name_order">
      <v-card
        class="mb-2 d-flex align-center justify-center secondary--text"
        height="10vh"
        :elevation="1"
        @click="openDialog(); insertInDialog(program)"
      >
        {{ program.japanese_notation }}
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
          <v-btn color="brown darken-2" width="260" outlined rounded large @click="searchBy(japaneseUrl)">
            <v-icon left>mdi-magnify</v-icon>
            <span class="text-body-1">このまま検索する</span>
          </v-btn>
        </v-card-actions>
        <v-card-actions class="mb-2 justify-center">
          <v-btn color="brown darken-2" width="260" outlined rounded large @click="searchBy(translateUrl)">
            <v-icon left>mdi-magnify</v-icon>
            <span class="text-body-1">翻訳して検索する</span>
          </v-btn>
        </v-card-actions>
        <v-card-actions v-show="wikipediaUrl" class="mb-4 justify-center">
          <v-btn color="brown darken-2" :href="wikipediaUrl" target="_blank" rel="noopener noreferrer" width="260" outlined rounded large>
            <v-icon left>mdi-wikipedia</v-icon>
            <span class="text-body-1">ウィキペディアで調べる</span>
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
import FloatingActionButton from '../../components/FloatingActionButton.vue';

export default {
  components: { FloatingActionButton },
  data() {
    return {
      programs: [],
      dialog: false,
      title: '',
      japaneseUrl: '',
      translateUrl: '',
      wikipediaUrl: ''
    }
  },
  head() {
    return {
      title: '演目'
    }
  },
  watch: {
    dialog() {
      this.resetDialog();
    }
  },
  async created() {
    try {
      const response = await this.$axios.$get('api/programs', { withCredentials: true })
      console.log('programsコンポーネントだよ')
      this.programs = response
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
      if (detail.wikipedia_path) {
        this.wikipediaUrl = this.wikipediaSearch(detail.wikipedia_path);
      }
    },
    resetDialog() {
      if (!this.dialog) {
        this.title = ''
        this.japaneseUrl = ''
        this.translateUrl = ''
        this.wikipediaUrl = ''
      };
    },
    japaneseSearch(word) {
      // https://www.youtube.com/results?search_query=${word}+バレエ
      return `${word}+バレエ`
    },
    translateSearch(word) {
      return `${word}+ballet`
    },
    wikipediaSearch(word) {
      return `https://ja.wikipedia.org/wiki/${word}`
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