<template>
  <v-app>
    <v-navigation-drawer
      v-model="rightDrawer"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon color="brown lighten-1">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="secondary--text" v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <div>
          <!-- Login or Logout -->
          <div v-if="$auth.loggedIn" style="cursor: pointer;" @click.stop="logoutDialog = true">
            <v-card-subtitle class="pb-0 secondary--text" >ログアウト</v-card-subtitle>
          </div>
          <nuxt-link v-else to="/auth/login" style="text-decoration: none;">
            <v-card-subtitle class="pb-0 secondary--text" nuxt to="/auth/login" >ログイン</v-card-subtitle>
          </nuxt-link>
          <PrivacyPolicy />
          <Terms />
        </div>
      </v-list>
    </v-navigation-drawer>

    <!-- Header Bar -->
    <v-app-bar :clipped-left="clipped" app color="#fff" class="elevation-0" style="border-bottom: 3px solid #FFD600;">
      <nuxt-link to="/" style="text-decoration: none;">
        <v-icon color="brown darken-2">
          {{ title }}
        </v-icon>
      </nuxt-link>
      <v-spacer />
      <div class="mx-auto ml-4 mt-1 text-subtitle-1 secondary--text">
        <span>{{ pageTitle }}</span>
      </div>
      <v-spacer />
      <GridMenu />
      <v-btn color="brown darken-2" icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container :style="inSearchResults">
        <!-- Snackbar -->
        <div class="text-center ma-2">
          <v-snackbar v-model="snackbar.showing" timeout="-1" content-class="text-subtitle-1" color="brown lighten-2" bottom>
            {{ snackbar.message }}
            <template #action="{ attrs }">
              <v-btn text v-bind="attrs" @click="$store.dispatch('closeSnackbar')">
                閉じる
              </v-btn>
            </template>
          </v-snackbar>
        </div>
        <Nuxt />
      </v-container>
    </v-main>

    <!-- Logout Dialog -->
    <v-dialog v-model="logoutDialog" max-width="290">
      <v-card height="130">
        <v-card-title class="justify-center text-h6 grey--text text--darken-2">
          <v-icon>mdi-logout</v-icon>
          ログアウトします
        </v-card-title>
        <v-card-actions class="justify-space-around">
          <v-btn width="100" color="info" large outlined @click="logout()">
            ＯＫ
          </v-btn>
          <v-btn width="100" color="info" large outlined @click="logoutDialog = false">
            キャンセル
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-footer :absolute="!fixed" app class="justify-center">
      <span class="secondary--text text-caption">&copy; 2022 Pinap</span>
    </v-footer>
  </v-app>
</template>

<script>
import PrivacyPolicy from '../components/PrivacyPolicy.vue'
export default {
  name: 'DefaultLayout',
  components: { PrivacyPolicy },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-arrow-u-left-top',
          title: 'トップページ',
          to: '/',
        },
        {
          icon: 'mdi-subtitles-outline',
          title: '演目',
          to: '/contents/programs',
        },
        {
          icon: 'mdi-shoe-ballet',
          title: 'ヴァリエーション',
          to: '/contents/variations',
        },
        {
          icon: 'mdi-human-female-dance',
          title: 'パ / ステップ',
          to: '/contents/steps',
        },
        {
          icon: 'mdi-account-star-outline',
          title: 'ダンサー',
          to: '/contents/dancers',
        },
      ],
      right: true,
      rightDrawer: false,
      title: 'Pinap',
      logoutDialog: false,
    }
  },
  computed: {
    pageTitle() {
      const matchedRoute = this.$route.matched[0]
      const headInfo = matchedRoute.components.default.options
      return headInfo.head ? headInfo.head().title : ''
    },
    inSearchResults() {
      return this.$route.path === '/searchResults' ? 'padding: 0;' : ''
    },
    snackbar() {
      return this.$store.state.snackbar
    },
  },
  methods: {
    logout () {
      this.logoutDialog = false
      this.$auth.logout()
      this.$store.dispatch('setSnackbar', { message: 'ログアウトしました' })
    }
  },
}
</script>
