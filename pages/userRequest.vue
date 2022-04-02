<template>
  <v-row dense class="mt-4 justify-center">
    <v-col cols="12" md="11" lg="8" xl="6">
      <v-card>
        <v-card-text class="text-center secondary--text text-body-1">
          <br>
          <span style="background: linear-gradient(#ffffff 20%, #FFFDE7);">
            「こんなキーワードで検索したい！」
          </span><br>
          <br>
          <span style="background: linear-gradient(#ffffff 20%, #FFFDE7);">
            「こんな機能を追加して欲しい！」
          </span><br>
          <br>
          <span>ご意見お聞かせください。</span><br>
          <v-card-actions class="my-4 justify-center">
            <v-btn
              href="https://twitter.com/PinapBallet"
              color="blue lighten-1"
              dark
              rounded
              class="pe-4"
              target="_blank"
              rel="noopener noreferrer"
              style="text-transform: none"
            >
              <v-icon left>mdi-twitter</v-icon>
              <span>@PinapBallet</span>
            </v-btn>
            <v-btn
              href="https://forms.gle/F1E1ieGx783DGTB56"
              color="pink lighten-2"
              dark
              rounded
              class="pe-4"
              target="_blank"
              rel="noopener noreferrer"
              style="text-transform: none"
            >
              <v-icon left>mdi-google</v-icon>
              <span>Googleフォーム</span>
            </v-btn>
          </v-card-actions>
          <span class="text-body-2">感想お待ちしております！<br>また不具合の報告もいただけると<br>本当に助かります！</span> 
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  head() {
    return {
      title: 'リクエスト'
    }
  },
}
</script>

<style>

</style>