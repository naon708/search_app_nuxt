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
          <Terms />
          <PrivacyPolicy />
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
        <Nuxt />
      </v-container>
    </v-main>
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
      title: 'Pinap'
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
    }
  }
}
</script>
