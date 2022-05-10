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
      <div style="height: 6vh;"></div>
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="6">
          <v-img src="swan.png"></v-img>
        </v-col>
        <v-col class="d-flex align-center" cols="12" sm="6" md="6" lg="6">
          <v-card-title class="brown--text pl-8 py-0">
            <p class="text-body-1 mb-0">バレエの動画を<br>あれこれ見たいあなたへ<br><br>検索をお助けします</p>
          </v-card-title>
        </v-col>
      </v-row>
      <div style="height: 6vh;"></div>

      <in-app-search></in-app-search>

      <v-row>
        <v-col cols="12" sm="6" md="6" lg="6">
          <v-card class="ma-2 d-flex align-center justify-center secondary--text" to="contents/programs" height="100">
            バレエの演目を検索
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6">
          <v-card class="ma-2 d-flex align-center justify-center secondary--text" to="contents/variations" height="100">
            ヴァリエーションを検索
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6">
          <v-card class="ma-2 d-flex align-center justify-center secondary--text" to="contents/steps" height="100">
            パ / ステップを検索
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6">
          <v-card class="ma-2 d-flex align-center justify-center secondary--text" to="contents/dancers" height="100">
            バレエダンサーを検索
          </v-card>
        </v-col>
      </v-row>
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
}
</script>

<style>

</style>
