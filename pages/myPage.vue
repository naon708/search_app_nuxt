<template>
  <div>
    <div style="height: 15vh;"></div>
    <div class="d-flex justify-center">
      <v-avatar class="text-center" size="100">
        <img src="pinap_icon_v2.png" alt="pineapple">
      </v-avatar>
    </div>
    <v-card-text class="text-center text-h6">{{ $auth.user.name }}さんこんにちは</v-card-text>
    <v-card-text class="text-center text-body-1">Comming soon...</v-card-text>
    <div style="height: 15vh;"></div>

    <v-card class="ma-2 d-flex align-center justify-center secondary--text" to="contents/programs" height="85">
      バレエの演目を検索
    </v-card>
    <v-card class="ma-2 d-flex align-center justify-center secondary--text" to="contents/variations" height="85">
      ヴァリエーションを検索
    </v-card>
    <v-card class="ma-2 d-flex align-center justify-center secondary--text" to="contents/steps" height="85">
      パ / ステップを検索
    </v-card>
    <v-card class="ma-2 d-flex align-center justify-center secondary--text" to="contents/dancers" height="85">
      バレエダンサーを検索
    </v-card>
  </div>
</template>

<script>
export default {
  middleware: 'auth',

  head() {
    return {
      title: 'マイページ'
    }
  },
}
</script>

<style>

</style>
