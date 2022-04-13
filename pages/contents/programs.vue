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
        style="position: relative;"
        @click="openDialog(); insertInDialog(program)"
      >
        {{ program.japanese_notation }}
        <v-card-actions class="mr-1" style="position: absolute; right: 0;">
          <v-icon color="pink lighten-3" size="medium">{{ heartIconInList(program) }}</v-icon>
        </v-card-actions>
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
          <v-icon class="ml-2" color="pink lighten-3" @click="markAction()">
            {{ heartIcon }}
          </v-icon>
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
      wikipediaUrl: '',
      program_id: null,
    }
  },
  head() {
    return {
      title: '演目'
    }
  },
  computed: {
    heartIcon() {
      if (this.$auth.loggedIn) {
        return this.$auth.user.markedProgramIds.includes(this.program_id) ? 'mdi-heart' : 'mdi-heart-outline'
      } else {
        return 'mdi-heart-outline'
      }
    },
  },
  watch: {
    dialog() {
      this.resetDialog();
    }
  },
  async created() {
    try {
      const response = await this.$axios.$get('api/programs', { withCredentials: true })
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
      this.program_id = detail.id
    },
    resetDialog() {
      if (!this.dialog) {
        this.title = ''
        this.japaneseUrl = ''
        this.translateUrl = ''
        this.wikipediaUrl = ''
        this.program_id = null
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
    },
    heartIconInList(program) {
      if (this.$auth.loggedIn) {
        return this.$auth.user.markedProgramIds.includes(program.id) ? 'mdi-heart' : 'mdi-heart-outline'
      } else {
        return 'mdi-heart-outline'
      }
    },
    markAction() {
      if (this.$auth.loggedIn) {
        this.$auth.user.markedProgramIds.includes(this.program_id) ? this.unmarkProgram() : this.markProgram()
      } else {
        this.$store.dispatch('setSnackbar', { message: 'ログインしてお気に入り機能を使いましょう！' })
      }
    },
    markProgram() {
      const params = { program_id: this.program_id }
      this.$axios.post('api/mark_programs', params).then(() => {
        this.$auth.fetchUser()
      }).catch(e => {
        this.$store.dispatch('setSnackbar', { message: '不具合が発生しました。時間をおいてお試しください' })
      })
    },
    unmarkProgram() {
      this.$axios.delete('api/mark_programs/' + this.program_id).then(() => {
        this.$auth.fetchUser()
      }).catch(e => {
        this.$store.dispatch('setSnackbar', { message: '不具合が発生しました。時間をおいてお試しください' })
      })
    },
  }
}
</script>

<style>

</style>
