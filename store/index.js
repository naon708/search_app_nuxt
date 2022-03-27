export const state = () => ({
  searchResults: []
})

export const mutations = {
  resetState (state) {
    state.searchResults = []
  },
  searchBy (state, payload) {
    state.searchResults = payload
    console.log('mutationだよ')
  }
}

export const actions = {
  async searchBy(context, word) {
    try {
      context.commit(
        'searchBy',
        await this.$axios.$get(`api/search_results?q=${word}`, { withCredentials: true })
      )
      console.log('actions呼ばれた')
    } catch (e) {
      console.error("Error:", e);
    }
  },
}

export const getters = {
  searchResults(state) {
    console.log('gettersよばれた')
    return state.searchResults;
  }
}