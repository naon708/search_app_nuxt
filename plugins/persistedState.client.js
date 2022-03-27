import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
    key: 'searchResults',
    paths: ['searchResults'],
    storage: window.sessionStorage
  })(store)
}