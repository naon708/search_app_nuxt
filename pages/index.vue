<template>
  <div>
    <!-- Mobile Vertical Screen -->
    <div v-if="$vuetify.breakpoint.xs">
      <introduction-area></introduction-area>
      <search-area></search-area>
      <v-divider></v-divider>
      <list-area></list-area>
    </div>

    <!-- Others -->
    <div v-else>
      <div class="mt-12">
        <v-row>
          <v-col cols="12" sm="6" md="6" lg="6">
            <v-img src="swan.png"></v-img>
          </v-col>
          <v-col class="d-flex align-center" cols="12" sm="6" md="6" lg="6">
            <v-card-title class="brown--text text--lighten-1 pl-8 py-0">
              <p class="text-h5 mb-0">
                バレエ動画を<br>あれこれ見たいあなたへ。<br><br><br>検索をお助けします。
              </p>
            </v-card-title>
          </v-col>
        </v-row>
      </div>

      <div class="mt-16">
          <p class="text-center brown--text text--lighten-2 text-h6">気になる単語で検索してみる</p>
        <in-app-search class="mt-5"></in-app-search>
      </div>

      <div class="mt-16">
        <p class="text-center brown--text text--lighten-2 text-h6">一覧から探す</p>
        <v-row class="mt-4">
          <v-col v-for="(item, i) of items" :key="i" cols="12" sm="6" md="6" lg="6">
            <v-card class="ma-2 d-flex align-center justify-center secondary--text text-h6" :to="item.to" height="100">
              <v-icon class="mr-2" color="brown lighten-1">{{ item.icon }}</v-icon>
              {{ item.title }}
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import InAppSearch from '../components/InAppSearch.vue'
import IntroductionArea from '../components/topPage/IntroductionArea.vue'
import SearchArea from '../components/topPage/SearchArea.vue'
import ListArea from '../components/topPage/ListArea.vue'
export default {
  components: { InAppSearch, IntroductionArea, SearchArea, ListArea },
  data() {
    return {
      items: [
        {
          icon: 'mdi-subtitles-outline',
          title: 'バレエの演目を検索',
          to: '/contents/programs',
        },
        {
          icon: 'mdi-shoe-ballet',
          title: 'ヴァリエーションを検索',
          to: '/contents/variations',
        },
        {
          icon: 'mdi-human-female-dance',
          title: 'パ / ステップを検索',
          to: '/contents/steps',
        },
        {
          icon: 'mdi-account-star-outline',
          title: 'バレエダンサーを検索',
          to: '/contents/dancers',
        },
      ],
    }
  },
}
</script>

<style>

</style>
