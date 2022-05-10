<template>
  <div>
    <div style="height: 10vh;"></div>
    <v-row>
      <v-col>
        <v-card-title class="text-body-1 brown--text text--lighten-1 justify-center">
          使える！と思ったらSNSでシェア♪
        </v-card-title>
      </v-col>
    </v-row>

    <v-card-text>
      <v-card-actions class="my-4 justify-center">
        <v-btn
          :href="shareTwitter"
          color="blue lighten-1"
          class="pe-4 text-body-1"
          width="260"
          large
          dark
          rounded
          target="_blank"
          rel="noopener noreferrer"
          style="text-transform: none"
        >
          <v-icon left>mdi-twitter</v-icon>
          <span>Twitterに投稿する</span>
        </v-btn>
      </v-card-actions>

      <v-card-actions class="my-4 justify-center">
        <v-btn
          :href="shareLine"
          color="green"
          class="pe-4 text-body-1"
          width="260"
          large
          dark
          rounded
          target="_blank"
          rel="noopener noreferrer"
          style="text-transform: none"
        >
          <v-icon left>mdi-chat-processing-outline</v-icon>
          <span>LINEで友達に教える</span>
        </v-btn>
      </v-card-actions>

      <v-card-actions class="my-4 justify-center">
        <v-btn
          :href="shareFacebook"
          color="blue darken-3"
          class="pe-4 text-body-1"
          width="260"
          large
          dark
          rounded
          target="_blank"
          rel="noopener noreferrer"
          style="text-transform: none"
        >
          <v-icon left>mdi-facebook</v-icon>
          <span>Facebookに投稿する</span>
        </v-btn>
      </v-card-actions>
    </v-card-text>
  </div>
</template>

<script>
export default {
  computed: {
    shareTwitter() {
      return "https://twitter.com/intent/tweet?url=" + process.env.baseUrl  + "&hashtags=Pinap,バレエ"
    },
    shareLine() {
      return "https://timeline.line.me/social-plugin/share?url=" + process.env.baseUrl
    },
    shareFacebook() {
      return "https://www.facebook.com/sharer/sharer.php?u=" + process.env.baseUrl
    }
  },
}
</script>

<style>

</style>
