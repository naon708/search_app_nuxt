<template>
  <v-row dense class=" justify-center">
    <v-col cols="12" md="11" lg="8" xl="6">
      <v-card>
        <v-card-text class="text-center secondary--text text-h6">
          <br>
          <span style="background: linear-gradient(#ffffff 20%, #FFFDE7);">
            良いなと思ったらSNSでシェア！
          </span><br>
        </v-card-text>

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
              <span>Twitter</span>
            </v-btn>
          </v-card-actions>

          <v-card-actions class="my-4 justify-center">
            <v-btn
              :href="shareLine"
              color="light-green accent-4"
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
              <span>LINE</span>
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
              <span>Facebook</span>
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  head() {
    return {
      title: 'シェア'
    }
  },
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
