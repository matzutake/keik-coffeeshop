import { createStore } from 'vuex'

export default createStore({
  state: {
    pageTitle: '',
    menu: [
      {
        id: 1,
        title: 'Эспрессо',
        price: '110',
        type: 'drink'
      },
      {
        id: 2,
        title: 'Доппио',
        price: '120',
        type: 'drink'
      },
      {
        id: 3,
        title: 'Американо',
        price: '125',
        type: 'drink'
      },
      {
        id: 4,
        title: 'Капучино',
        price: '150',
        type: 'drink'
      },
      {
        id: 5,
        title: 'Латте',
        price: '170',
        type: 'drink'
      },
      {
        id: 6,
        title: 'Раф',
        price: '190',
        type: 'drink'
      },
      {
        id: 7,
        title: 'Мокачино',
        price: '235',
        type: 'drink'
      },
      {
        id: 8,
        title: 'Карамельный латте',
        price: '250',
        type: 'drink'
      },
      {
        id: 9,
        title: 'Флет-уайт',
        price: '195',
        type: 'drink'
      },
      {
        id: 10,
        title: 'Горячий шоколад',
        price: '230',
        type: 'drink'
      },
      {
        id: 11,
        title: 'Какао',
        price: '170',
        type: 'drink'
      },
      {
        id: 12,
        title: 'Матча-латте',
        price: '180',
        type: 'drink'
      },
      {
        id: 13,
        title: 'Матча',
        price: '150',
        type: 'drink'
      },
      {
        id: 14,
        title: 'Глинтвейн',
        price: '190',
        type: 'drink'
      },
      {
        id: 15,
        title: 'Грог',
        price: '190',
        type: 'drink'
      },
      {
        id: 16,
        title: 'Глёг',
        price: '190',
        type: 'drink'
      },
      {
        id: 17,
        title: 'Круассан с творожным кремом и вялеными томатами',
        price: '275',
        type: 'croissant'
      },
      {
        id: 18,
        title: 'Круассан с говядиной и брусничным соусом',
        price: '245',
        type: 'croissant'
      },
      {
        id: 19,
        title: 'Круассан c лососем',
        price: '260',
        type: 'croissant'
      },
      {
        id: 20,
        title: 'Круассан с креветкой',
        price: '260',
        type: 'croissant'
      },
      {
        id: 21,
        title: 'Круассан говяжьей котлетой',
        price: '245',
        type: 'croissant'
      },
      {
        id: 22,
        title: 'Круассан цезарь',
        price: '215',
        type: 'croissant'
      },
      {
        id: 23,
        title: 'Круассан с ветчиной и сыром',
        price: '210',
        type: 'croissant'
      }
    ]
  },
  mutations: {
    pageTitle(state, title) {
      state.pageTitle = title
      document.title = title
    }
  },
  getters: {
    getMenu(state) {
      return state.menu
    }
  }
})
