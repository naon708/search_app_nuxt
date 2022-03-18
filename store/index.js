export const state = () => ({
  searchResults: []
})

export const mutations = {
  searchBy (state, payload) {
    state.searchResults = payload
    console.log('mutationだよ')
    console.log(payload)
  }
}

export const actions = {
  async searchBy(context, word) {
    try {
      context.commit(
        'searchBy',
        await this.$axios.$get(`api/searches?q=${word}`, { withCredentials: true })
      )
      console.log('actions呼ばれた')
    } catch (e) {
      console.error("Error:", e);
    }
  },
}

export const getters = {
  searchResults(state) {
    return state.searchResults;
  }
}