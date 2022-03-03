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
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- Header Bar -->
    <v-app-bar :clipped-left="clipped" color="yellow lighten-3" fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'トップページ',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: '演目',
          to: '/scenes',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'ヴァリエーション',
          to: '/variations',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'パ / ステップ',
          to: '/steps',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'ダンサー',
          to: '/dancers',
        },
      ],
      right: true,
      rightDrawer: false,
      title: 'Froutes',
    }
  },
}
</script>
