<template>
  <v-row dense class=" justify-center">
    <v-col cols="12" md="11" lg="8" xl="6">
      <v-card>
        <v-img
          class="align-end text-center"
          src="cover.JPEG"
          alt="cover"
        >
          <v-card-title class="white--text mt-8 justify-end">
            <p class="mt-4 mr-1">Naoya Nishiguchi</p>
            <v-avatar size="60">
              <img alt="developer" src="profile.JPG">
            </v-avatar>
          </v-card-title>
        </v-img>

        <v-card-text>
          <v-card-actions class="my-4 justify-center">
            <v-btn
              href="https://twitter.com/NishiguchiNaoya"
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
              href="https://www.instagram.com/naoya.nishiguchi/?hl=ja"
              color="purple lighten-2"
              class="pe-4 text-body-1"
              width="260"
              large
              dark
              rounded
              target="_blank"
              rel="noopener noreferrer"
              style="text-transform: none"
            >
              <v-icon left>mdi-instagram</v-icon>
              <span>Instagram</span>
            </v-btn>
          </v-card-actions>

          <v-divider></v-divider>
          <v-card-text class="text-center secondary--text text-body-1">
            <br>
            <span style="background: linear-gradient(#ffffff 20%, #FFFDE7);">
              開発者を応援する
            </span><br>
          </v-card-text>

          <v-card-actions class="my-4 justify-center">
            <v-btn
              href="https://community.camp-fire.jp/projects/view/514653"
              color="cyan lighten-1"
              class="pe-4 text-body-1"
              width="260"
              large
              dark
              rounded
              target="_blank"
              rel="noopener noreferrer"
              style="text-transform: none"
            >
              <v-icon left>mdi-fire</v-icon>
              <span>CAMPFIREコミュニティ</span>
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
      title: '開発者プロフィール'
    }
  },
}
</script>

<style>

</style>
