<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="justify-center text-h6 text--secondary">
          {{ title }}
        </v-card-title>
        <v-card-actions class="mb-2 justify-center">
          <v-btn color="brown darken-2" :href="japaneseUrl" target="_blank" rel="noopener noreferrer" width="260" outlined rounded large>
            <v-icon left>mdi-youtube</v-icon>
            <span class="text-body-1">このまま検索する</span>
          </v-btn>
        </v-card-actions>
        <v-card-actions class="mb-2 justify-center">
          <v-btn color="brown darken-2" :href="translateUrl" target="_blank" rel="noopener noreferrer" width="260" outlined rounded large>
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

    <div v-for="step of steps" :key="step.japanese_notation">
      <v-card
        class="mb-2 d-flex align-center justify-center text--secondary"
        height="10vh"
        :elevation="1"
        @click="openDialog(); insertInDialog(step)"
      >
        {{ step.japanese_notation }}
      </v-card>
    </div>
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
      translateUrl: ''
    }
  },
  async created() {
    try {
      const response = await this.$axios.$get('api/steps', { withCredentials: true })
      console.log('steps呼ばれた')
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
    },
    japaneseSearch(word) {
      return `https://www.youtube.com/results?search_query=${word}+バレエ`
    },
    translateSearch(word) {
      return `https://www.youtube.com/results?search_query=${word}+ballet`
    }
  }
}
</script>

<style>

</style>