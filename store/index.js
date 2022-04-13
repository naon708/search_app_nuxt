export const state = () => ({
  searchResults: [],
  snackbar: { showing: false, message: '' },
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
}

export const actions = {
  async searchBy(context, word) {
    try {
      context.commit(
        'searchBy',
        await this.$axios.$get(`api/search_results?q=${word}`, { withCredentials: true })
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
  }
}

export const getters = {
  searchResults(state) {
    return state.searchResults;
  }
}
