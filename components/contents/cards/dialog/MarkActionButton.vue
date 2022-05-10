<template>
  <v-icon class="ml-2" color="pink lighten-3" :disabled="disableMark" @click="markAction">
    {{ heartIcon }}
  </v-icon>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {},
    },
    contentType: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      disableMark: false,
    }
  },
  computed: {
    heartIcon() {
      if (!this.$auth.loggedIn) { return 'mdi-heart-outline' }

      switch (this.contentType) {
        case 'program':
          return this.$auth.user.markedProgramIds.includes(this.content.id) ? 'mdi-heart' : 'mdi-heart-outline'
        case 'variation':
          return this.$auth.user.markedVariationIds.includes(this.content.id) ? 'mdi-heart' : 'mdi-heart-outline'
        case 'step':
          return this.$auth.user.markedStepIds.includes(this.content.id) ? 'mdi-heart' : 'mdi-heart-outline'
        case 'dancer':
          return this.$auth.user.markedDancerIds.includes(this.content.id) ? 'mdi-heart' : 'mdi-heart-outline'
        default:
          return 'mdi-heart-outline'
      }
    },
  },
  watch: {
    disableMark() {
      this.$store.watch(() => this.$store.state.snackbar.showing, value => {
        if (!value) { this.disableMark = false }
      });
    },
  },
  methods: {
    markAction() {
      this.disableMark = true
      if (!this.$auth.loggedIn) {
        this.$store.dispatch('setSnackbar', { message: 'ログインすると、気になる項目に目印を付けられます' })
        return
      }

      switch (this.contentType) {
        case 'program':
          this.$auth.user.markedProgramIds.includes(this.content.id) ? this.unmarkProgram() : this.markProgram()
          break
        case 'variation':
          this.$auth.user.markedVariationIds.includes(this.content.id) ? this.unmarkProgram() : this.markProgram()
          break
        case 'step':
          this.$auth.user.markedStepIds.includes(this.content.id) ? this.unmarkProgram() : this.markProgram()
          break
        case 'dancer':
          this.$auth.user.markedDancerIds.includes(this.content.id) ? this.unmarkProgram() : this.markProgram()
          break
      }
      this.disableMark = false
    },
    markProgram() {
      const params = contentType => {
        switch (contentType) {
          case 'program':
            return { program_id: this.content.id }
          case 'variation':
            return { variation_id: this.content.id }
          case 'step':
            return { step_id: this.content.id }
          case 'dancer':
            return { dancer_id: this.content.id }
        }
      }

      this.$axios.post(`/api/v1/mark_${this.contentType}s`, params(this.contentType)).then(() => {
        this.$auth.fetchUser()
      }).catch(e => {
        this.$store.dispatch('setSnackbar', { message: '不具合が発生しました。時間をおいてお試しください' })
      })
    },
    unmarkProgram() {
      this.$axios.delete(`/api/v1/mark_${this.contentType}s/` + this.content.id).then(() => {
        this.$auth.fetchUser()
      }).catch(e => {
        this.$store.dispatch('setSnackbar', { message: '不具合が発生しました。時間をおいてお試しください' })
      })
    },
  },
}
</script>

<style>

</style>
