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
      <v-container class="px-4 pt-5 pb-0" style="background: rgba(255,255,255,1);">
        <v-row>
          <v-col>
            <v-card v-if="$auth.loggedIn" to="/myPage" height="80" class="d-flex align-center secondary--text">
              <div class="ml-2">
                <v-icon color="#FFD600" class="mb-1">mdi-account</v-icon><br>
                マイページ
              </div>
            </v-card>
            <v-card v-else to="/auth/login" height="80" class="d-flex align-center secondary--text">
              <div class="ml-2">
                <v-icon color="#FFD600" class="mb-1">mdi-account</v-icon><br>
                ログイン
              </div>
            </v-card>
          </v-col>
          <v-col>
            <v-card to="/information" height="80" class="d-flex align-center secondary--text">
              <div class="ml-2">
                <v-icon color="#FFD600" class="mb-1">mdi-bulletin-board</v-icon><br>
                お知らせ
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card to="/shareSns" height="80" class="d-flex align-center secondary--text">
              <div class="ml-2">
                <v-icon color="#FFD600" class="mb-1">mdi-share-variant</v-icon><br>
                シェア
              </div>
            </v-card>
          </v-col>
          <v-col>
            <v-card to="/devProfile" height="80" class="d-flex align-center secondary--text">
              <div class="ml-2">
                <v-icon color="#FFD600" class="mb-1">mdi-face-man</v-icon><br>
                開発した人
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card v-if="$auth.loggedIn" height="80" class="d-flex align-center secondary--text" @click.stop="dialog = true">
              <div class="ml-2">
                <v-icon color="brown lighten-2" class="mb-1">mdi-logout</v-icon><br>
                ログアウト
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

    <!-- ログアウト確認ダイアログ -->
    <v-dialog v-model="dialog" max-width="290">
      <v-card height="130">
        <v-card-title class="justify-center text-h6 grey--text text--darken-2">
          <v-icon>mdi-logout</v-icon>
          ログアウトします
        </v-card-title>
        <v-card-actions class="justify-space-around">
          <v-btn width="100" color="info" large outlined @click="logout()">
            ＯＫ
          </v-btn>
          <v-btn width="100" color="info" large outlined @click="dialog = false">
            キャンセル
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      menu: false,
    }
  },
  methods: {
    logout () {
      this.dialog = false
      this.$auth.logout()
      this.$store.dispatch('setSnackbar', { message: 'ログアウトしました' })
    }
  }
}
</script>

<style>

</style>
