<template>
  <v-fab-transition>
      <v-btn
        v-if="scrollingDown"
        v-scroll-to="'body'"
        to
        class="mx-2 my-4"
        color="#FBC02D88"
        dark
        large
        fixed
        fab
        bottom
        right
      >
        <v-icon>mdi-arrow-up-right-bold</v-icon>
      </v-btn>
    </v-fab-transition>
</template>

<script>
export default {
  data() {
    return {
      scrollY: 0,
      scrollingDown: false
    }
  },
  watch: {
    scrollY() {
      this.scrollingDown = this.scrollY > 300;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
    }
  }
}
</script>

<style>

</style>