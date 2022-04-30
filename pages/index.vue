<template>
  <div>
    <v-alert dense text type="success">
      4/27に新バージョンをリリースしましたが、現在メンテナンス中のためこちらをご利用ください。
    </v-alert>

    <v-card class="ma-2 d-flex align-center justify-center text--secondary" nuxt to="programs" height="20vh">
      バレエの演目を検索
    </v-card>
    <v-card class="ma-2 d-flex align-center justify-center text--secondary" nuxt to="variations" height="20vh">
      ヴァリエーションを検索
    </v-card>
    <v-card class="ma-2 d-flex align-center justify-center text--secondary" nuxt to="steps" height="20vh">
      パ / ステップを検索
    </v-card>
    <v-card class="ma-2 d-flex align-center justify-center text--secondary" nuxt to="dancers" height="20vh">
      バレエダンサーを検索
    </v-card>
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>
