import { createStore } from 'vuex'

export default createStore({
  state: {
    pageTitle: ''
  },
  mutations: {
    pageTitle(state, title) {
      state.pageTitle = title
      document.title = title
    }
  }
})
