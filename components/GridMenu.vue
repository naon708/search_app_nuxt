<template>
  <div>
    <v-menu
      v-model="menu"
      :nudge-width="250"
      offset-y
    >
      <template #activator="{ on, attrs }">
        <v-btn color="brown darken-2" icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-grid</v-icon>
        </v-btn>
      </template>

      <!-- 本体（v-colがコンテンツの単位） -->
      <v-container class="px-4 pb-0" style="background: rgba(255,255,255,1);">
        <v-row>
          <v-col>
            <v-card height="80" class="d-flex align-center secondary--text">
              <div class="ml-2">
                <v-icon color="#FFD600" class="mb-1">mdi-account</v-icon><br>
                マイページ
              </div>
            </v-card>
          </v-col>
          <v-col>
            <v-card height="80" class="d-flex align-center secondary--text">
              <div class="ml-2">
                <v-icon color="#FFD600" class="mb-1">mdi-mirror</v-icon><br>
                ミラーモード
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card height="80" class="d-flex align-center secondary--text">
              <div class="ml-2">
                <v-icon color="#FFD600" class="mb-1">mdi-bulletin-board</v-icon><br>
                お知らせ
              </div>
            </v-card>
          </v-col>
          <v-col>
            <v-card to="/userRequest" height="80" class="d-flex align-center secondary--text">
              <div class="ml-2">
                <v-icon color="#FFD600" class="mb-1">mdi-lightbulb-on-outline</v-icon><br>
                リクエスト
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card height="80" class="d-flex align-center secondary--text">
              <div class="ml-2">
                <v-icon color="#FFD600" class="mb-1">mdi-face-man</v-icon><br>
                開発した人
              </div>
            </v-card>
          </v-col>
          <v-col>
            <v-card height="80" class="d-flex align-center secondary--text">
              <div class="ml-2">
                Coming...
                <v-icon color="brown lighten-2" class="mb-1">mdi-cogs</v-icon>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card height="80" class="d-flex align-center secondary--text" href="https://www.k-ballet.co.jp/">
              <div class="ml-2">
                Favorite...
                <v-icon color="brown lighten-2" class="mb-1">mdi-cards-heart</v-icon>
              </div>
            </v-card>
          </v-col>
          <v-col></v-col>          
        </v-row>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secondary" class="my-2" bottom outlined @click="menu = false">
            閉じる
          </v-btn>
        </v-card-actions>
      </v-container>
    </v-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      menu: false,
    }
  }
}
</script>

<style>

</style>