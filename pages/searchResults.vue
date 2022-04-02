<template>
  <div>
    <!-- 検索結果 -->
    <div v-for="result of searchResults" :key="result.id">
      <v-img :src="result.thumbnail" alt="サムネイル" @click="openDialog(); insertInDialog(result)"></v-img>
      <v-card class="elevation-1">
        <!-- three-line かつ subtitle で改行される -->
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="pinap_icon_v2.png" alt="Pinap"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="grey--text text--darken-4">{{ result.title }}</v-list-item-title>
            <v-list-item-subtitle class="mt-1">{{ result.view_count | delimitComma }}回視聴</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>

    <!-- ダイアログ -->
    <v-dialog v-model="dialog">
      <v-card>
        <!-- 埋め込み動画 -->
        <v-col>
          <v-responsive :aspect-ratio="16/9">
            <iframe
              width="100%"
              height="100%"
              :src="urlForEmbedVideo"
              frameborder="0"
              autoplay
              allowfullscreen
              modestbranding="1"
            ></iframe>
          </v-responsive>
        </v-col>

        <v-card-subtitle class="pb-2 font-weight-bold secondary--text">
          {{ title }}
        </v-card-subtitle>
        <v-divider></v-divider>
        <v-card-text class="my-2 py-2 secondary--text">
          {{ description }}
        </v-card-text>

        <v-card-actions class="mb-2 justify-center">
          <v-btn
            color="brown darken-2"
            :href="urlForPlayYoutubeApp"
            target="_blank"
            rel="noopener noreferrer"
            width="260"
            outlined
            rounded
            style="text-transform: none">
            <v-icon left>mdi-youtube</v-icon>
            <span class="text-body-1">YouTubeアプリで見る</span>
          </v-btn>
        </v-card-actions>
        <v-divider></v-divider>
        <v-card-actions class="pt-1">
          <v-spacer></v-spacer>
          <v-btn color="secondary" text @click="dialog = false">閉じる</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <FloatingActionButton />
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      dialog: false,
      title: '',
      video_id: '',
      description: '',
      view_count: '',
      urlForEmbedVideo: '',
      urlForPlayYoutubeApp: ''
    }
  },
  head() {
    return {
      title: '検索結果'
    }
  },
  computed: {
    searchResults() {
      return this.$store.getters.searchResults.length ? this.$store.getters.searchResults : this.redirectToRoot()
    },
  },
  watch: {
    dialog() {
      if (!this.dialog) {
        this.resetDialog()
      }
    }
  },
  methods: {
    openDialog() {
      this.dialog = true;
    },
    insertInDialog(detail) {
      this.title = detail.title
      this.video_id = detail.video_id
      this.description = detail.description
      this.view_count = detail.view_count
      this.urlForEmbedVideo = `http://www.youtube.com/embed/${this.video_id}?modestbranding=1&enablejsapi=1&origin=https://pinap.com`
      this.urlForPlayYoutubeApp = `https://www.youtube.com/watch?v=${this.video_id}`
    },
    resetDialog() {
      this.title = ''
      this.video_id = ''
      this.description = ''
      this.view_count = ''
      this.urlForEmbedVideo = ''
    },
    redirectToRoot() {
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>