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
</template>

<script>
export default {
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
      disableMark: false,
    }
  },
  computed: {
    heartIcon() {
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
