<template>
  <div v-if="loading" class="loader-background">
    <v-progress-circular size="70" width="7" indeterminate style="color: #FFCA28;"></v-progress-circular>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>

<style lang="scss">
.loader-background {
  z-index: 99;
  position: fixed;
  left: 0;
  top: 0;
  background:#0a0a0a;
  opacity: 0.4;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
