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
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template #append>
        <v-list class="mb-8">
          <Terms />
          <PrivacyPolicy />
        </v-list>
      </template>
    </v-navigation-drawer>
    <!-- Header Bar -->
    <v-app-bar :clipped-left="clipped" app color="#fff" class="elevation-0" style="border-bottom: 3px solid #FFD600;">
      <v-icon color="brown darken-2">{{ title }}</v-icon>
      <v-spacer />
      <v-btn color="brown darken-2" icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container >
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app class="justify-center">
      <span style="color: #757575;">&copy; {{ new Date().getFullYear() }}</span>
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
          to: '/programs',
        },
        {
          icon: 'mdi-shoe-ballet',
          title: 'ヴァリエーション',
          to: '/variations',
        },
        {
          icon: 'mdi-human-female-dance',
          title: 'パ / ステップ',
          to: '/steps',
        },
        {
          icon: 'mdi-account-star-outline',
          title: 'ダンサー',
          to: '/dancers',
        },
      ],
      right: true,
      rightDrawer: false,
      title: 'Pinap',
    }
  },
}
</script>
