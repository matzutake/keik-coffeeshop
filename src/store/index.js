import { createStore } from 'vuex'

export default createStore({
  state: {
    pageTitle: '',
    menu: [
      {
        title: 'Капучино',
        price: '150',
        img: 'capuchino'
      }
    ]
  },
  mutations: {
    pageTitle(state, title) {
      state.pageTitle = title
      document.title = title
    }
  }
})
