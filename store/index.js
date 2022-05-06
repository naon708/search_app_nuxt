export const state = () => ({
  searchResults: [],
  snackbar: { showing: false, message: '' },
  programResults: [],
  dancerResults: [],
  stepResults: [],
  variationResults: [],
})

export const mutations = {
  searchBy (state, payload) {
    state.searchResults = payload
  },
  setSnackbar (state, snackbar) {
    state.snackbar = snackbar
  },
  closeSnackbar (state) {
    state.message = ""
    state.snackbar.showing = false
  },
  inAppSearch (state, payload) {
    state.programResults = payload.programs
    state.dancerResults = payload.dancers
    state.stepResults = payload.steps
    state.variationResults = payload.variations
  }
}

export const actions = {
  async searchBy(context, word) {
    try {
      context.commit(
        'searchBy',
        await this.$axios.$get(`/api/v1/search_results?q=${word}`)
      )
    } catch (e) {
      console.error("Error:", e);
    }
  },
  setSnackbar(context, snackbar) {
    snackbar.showing = true
    context.commit('setSnackbar', snackbar)
  },
  closeSnackbar(context) {
    context.commit('closeSnackbar')
  },
  async inAppSearch(context, word) {
    try {
      context.commit(
        'inAppSearch',
        await this.$axios.$get(`/api/v1/in_app_searches?q=${word}`)
      )
    } catch (e) {
      console.error("Error:", e);
    }
  }
}

export const getters = {
  searchResults(state) {
    return state.searchResults;
  }
}
