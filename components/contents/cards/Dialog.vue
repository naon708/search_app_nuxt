<template>
  <v-dialog v-model="dialog" width="500">
    <v-card>
      <v-card-title class="justify-center text-h6 secondary--text">
        <span style="background: linear-gradient(#ffffff 20%, #FFFDE7);">
          {{ title }}
        </span>
      </v-card-title>

      <v-card-actions v-show="japaneseUrl" class="mb-2 justify-center">
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
        <mark-action-button :content="content" :content-type="contentType"></mark-action-button>

        <v-spacer></v-spacer>
        <v-btn color="secondary" text @click="dialog = false">
          閉じる
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import MarkActionButton from './dialog/MarkActionButton.vue'
export default {
  components: { MarkActionButton },
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      dialog: false,
      contentType: '',
      title: '',
      japaneseUrl: '',
      translateUrl: '',
      wikipediaUrl: '',
    }
  },
  watch: {
    dialog() {
      this.resetDialog();
    },
  },
  methods: {
    searchBy(word) {
      this.dialog = false
      this.$nuxt.$loading.start()
      this.$store.dispatch('searchBy', word).then(() => {
        this.$nuxt.$loading.finish()
        this.$router.push('/searchResults')
      })
    },
    resetDialog() {
      if (!this.dialog) {
        this.contentType = ''
        this.title = ''
        this.japaneseUrl = ''
        this.translateUrl = ''
        this.wikipediaUrl = ''
      };
    },
  }

}
</script>

<style>

</style>
