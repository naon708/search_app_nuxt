<template>
  <div>
    <v-row>
      <v-col>
        <v-card-title class="text-body-1 brown--text text--lighten-2 justify-center mt-8 mb-1">
          一覧から探す
        </v-card-title>
      </v-col>
    </v-row>

    <v-card
      v-for="(item, i) of items"
      :key="i"
      :to="item.to"
      class="ma-2 d-flex align-center justify-center secondary--text"
      height="14vh"
      elevation="1"
    >
      <v-icon class="mr-2" color="brown lighten-1">{{ item.icon }}</v-icon>
      {{ item.title }}
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
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
    }
  }
}
</script>

<style>
.theme--light.v-divider {
  border-color: #D7CCC8;
}
</style>
