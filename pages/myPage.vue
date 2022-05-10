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

    <v-card-actions class="mt-3 justify-center">
      <v-btn
        color="brown darken-2"
        to="/"
        width="200"
        outlined
        rounded
        style="text-transform: none"
      >
        <v-icon left>mdi-arrow-u-left-top</v-icon>
        <span class="text-body-1">トップページへ</span>
      </v-btn>
    </v-card-actions>

    <div style="height: 15vh;"></div>
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
