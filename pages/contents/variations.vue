<template>
  <div>
    <!-- ヴァリエーションリスト -->
    <div v-for="program of variation_programs" :key="program.id">
      <!-- 演目名 -->
      <p class="mt-5 text-center text-h5 secondary--text">
        <span style="background: linear-gradient(#ffffff 20%, #FFFDE7);">
          {{ program.name }}
        </span>
      </p>
      <div v-for="variation of variations" :key="variation.id">
        <!-- ヴァリエーションタイトル -->
        <v-card
          v-if="variation.variation_program_id === program.id"
          class="mb-2 d-flex align-center justify-center secondary--text"
          height="10vh"
          :elevation="1"
          style="position: relative;"
          @click="openDialog(); insertInDialog(variation)"
        >
          {{ variation.title }}
          <v-card-actions class="mr-1" style="position: absolute; right: 0;">
            <v-icon color="pink lighten-3" size="medium">{{ heartIconInList(variation) }}</v-icon>
          </v-card-actions>
        </v-card>
      </div>
      <br>
    </div>

    <!-- ダイアログ -->
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="justify-center text-subtitle-1 secondary--text">
          <span style="background: linear-gradient(#ffffff 20%, #FFFDE7);">
            {{ title }}
          </span>
        </v-card-title>
        <v-card-actions class="mb-2 justify-center">
          <v-btn color="brown darken-2" width="260" outlined rounded large @click="searchBy(japaneseUrl)">
            <v-icon left>mdi-magnify</v-icon>
            <span class="text-body-1">日本語で検索する</span>
          </v-btn>
        </v-card-actions>
        <v-card-actions class="mb-2 justify-center">
          <v-btn color="brown darken-2" width="260" outlined rounded large @click="searchBy(translateUrl)">
            <v-icon left>mdi-magnify</v-icon>
            <span class="text-body-1">翻訳して検索する</span>
          </v-btn>
        </v-card-actions>
        <v-divider></v-divider>
        <v-card-actions class="pt-1">
          <v-icon class="ml-2" color="pink lighten-3" :disabled="disableMark" @click="markAction()">
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
export default {
  data() {
    return {
      variations: [],
      variation_programs: [],
      dialog: false,
      title: '',
      japaneseUrl: '',
      translateUrl: '',
      variationId: null,
      disableMark: false,
    }
  },
  head() {
    return {
      title: 'ヴァリエーション'
    }
  },
  computed: {
    heartIcon() {
      if (this.$auth.loggedIn) {
        return this.$auth.user.markedVariationIds.includes(this.variationId) ? 'mdi-heart' : 'mdi-heart-outline'
      } else {
        return 'mdi-heart-outline'
      }
    },
  },
  watch: {
    disableMark() {
      this.$store.watch(() => this.$store.state.snackbar.showing, value => {
        if (!value) { this.disableMark = false }
      });
    },
  },
  async created() {
    try {
      const response = await this.$axios.$get('api/variations', { withCredentials: true })
      this.variations = response
    } catch (e) {
      console.error("Error:", e);
    }
    try {
      const response = await this.$axios.$get('api/variation_programs', { withCredentials: true })
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
      this.variationId = detail.id
    },
    japaneseSearch(word) {
      return `${word}+ヴァリエーション`
    },
    translateSearch(word) {
      return `${word}+variation`
    },
    searchBy(word) {
      this.dialog = false
      this.$store.dispatch('searchBy', word).then(() => {
        this.$router.push('/searchResults')
      })
    },
    heartIconInList(variation) {
      if (this.$auth.loggedIn) {
        return this.$auth.user.markedVariationIds.includes(variation.id) ? 'mdi-heart' : 'mdi-heart-outline'
      } else {
        return 'mdi-heart-outline'
      }
    },
    markAction() {
      this.disableMark = true
      if (this.$auth.loggedIn) {
        this.$auth.user.markedVariationIds.includes(this.variationId) ? this.unmarkVariation() : this.markVariation()
        this.disableMark = false
      } else {
        this.$store.dispatch('setSnackbar', { message: 'ログインしてお気に入り機能を使いましょう！' })
      }
    },
    markVariation() {
      const params = { variation_id: this.variationId }
      this.$axios.post('api/mark_variations', params).then(() => {
        this.$auth.fetchUser()
      }).catch(e => {
        this.$store.dispatch('setSnackbar', { message: '不具合が発生しました。時間をおいてお試しください' })
      })
    },
    unmarkVariation() {
      this.$axios.delete('api/mark_variations/' + this.variationId).then(() => {
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
