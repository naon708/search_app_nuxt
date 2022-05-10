<template>
  <div>
    <!-- ステップリスト -->
    <div v-for="step of steps" :key="step.japanese_notation">
      <v-card
        class="mb-2 d-flex align-center justify-center secondary--text"
        height="75"
        :elevation="1"
        style="position: relative;"
        @click="openDialog(); insertInDialog(step)"
      >
        {{ step.japanese_notation }}
        <v-card-actions class="mr-1" style="position: absolute; right: 0;">
          <v-icon color="pink lighten-3" size="medium">{{ heartIconInList(step) }}</v-icon>
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
      steps: [],
      dialog: false,
      title: '',
      japaneseUrl: '',
      translateUrl: '',
      stepId: null,
      disableMark: false,
    }
  },
  head() {
    return {
      title: 'パ / ステップ'
    }
  },
  computed: {
    heartIcon() {
      if (this.$auth.loggedIn) {
        return this.$auth.user.markedStepIds.includes(this.stepId) ? 'mdi-heart' : 'mdi-heart-outline'
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
      const response = await this.$axios.$get('/api/v1/steps')
      this.steps = response
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
      this.stepId = detail.id
    },
    japaneseSearch(word) {
      return `${word}+バレエ`
    },
    translateSearch(word) {
      return `${word}+ballet`
    },
    searchBy(word) {
      this.dialog = false
      this.$nuxt.$loading.start()
      this.$store.dispatch('searchBy', word).then(() => {
        this.$nuxt.$loading.finish()
        this.$router.push('/searchResults')
      })
    },
    heartIconInList(step) {
      if (this.$auth.loggedIn) {
        return this.$auth.user.markedStepIds.includes(step.id) ? 'mdi-heart' : 'mdi-heart-outline'
      } else {
        return 'mdi-heart-outline'
      }
    },
    markAction() {
      this.disableMark = true
      if (this.$auth.loggedIn) {
        this.$auth.user.markedStepIds.includes(this.stepId) ? this.unmarkStep() : this.markStep()
        this.disableMark = false
      } else {
        this.$store.dispatch('setSnackbar', { message: 'ログインすると、気になる項目に目印を付けることが出来ます' })
      }
    },
    markStep() {
      const params = { step_id: this.stepId }
      this.$axios.post('/api/v1/mark_steps', params).then(() => {
        this.$auth.fetchUser()
      }).catch(e => {
        this.$store.dispatch('setSnackbar', { message: '不具合が発生しました。時間をおいてお試しください' })
      })
    },
    unmarkStep() {
      this.$axios.delete('/api/v1/mark_steps/' + this.stepId).then(() => {
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
