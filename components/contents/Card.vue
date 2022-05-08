<template>
  <div>
    <v-card
      class="mb-2 d-flex align-center justify-center secondary--text"
      height="75"
      :elevation="1"
      style="position: relative;"
      @click="openDialog(); insertInDialog(content)"
    >
      {{ content.title || content.japanese_notation }}
      <v-card-actions class="mr-1" style="position: absolute; right: 0;">
        <v-icon color="pink lighten-3" size="medium">{{ heartIconInList }}</v-icon>
      </v-card-actions>
    </v-card>

    <contents-cards-dialog ref="dlg" :content-type="contentType" :content="content"></contents-cards-dialog>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {},
    },
    contentType: {
      type: String,
      default: '',
    },
  },
  computed: {
    heartIconInList() {
      if (!this.$auth.loggedIn) { return 'mdi-heart-outline' }

      switch (this.contentType) {
        case 'program':
          return this.$auth.user.markedProgramIds.includes(this.content.id) ? 'mdi-heart' : 'mdi-heart-outline'
        case 'variation':
          return this.$auth.user.markedVariationIds.includes(this.content.id) ? 'mdi-heart' : 'mdi-heart-outline'
        case 'step':
          return this.$auth.user.markedStepIds.includes(this.content.id) ? 'mdi-heart' : 'mdi-heart-outline'
        case 'dancer':
          return this.$auth.user.markedDancerIds.includes(this.content.id) ? 'mdi-heart' : 'mdi-heart-outline'
        default:
          return 'mdi-heart-outline'
      }
    },
  },
  methods: {
    openDialog() {
      this.$refs.dlg.dialog = true
    },
    insertInDialog(content) {
      this.$refs.dlg.title = content.title || content.japanese_notation
      if (content.japanese_notation) {
        this.$refs.dlg.japaneseUrl = this.japaneseSearch(content.japanese_notation)
      }
      this.$refs.dlg.translateUrl = this.translateSearch(content.universal_notation)
      if (content.wikipedia_path) {
        this.$refs.dlg.wikipediaUrl = this.wikipediaSearch(content.wikipedia_path)
      }
      this.$refs.dlg.contentType = this.contentType
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
  }
}
</script>

<style>

</style>
