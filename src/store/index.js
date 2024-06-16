import { createStore } from 'vuex'

export default createStore({
  state: {
    pageTitle: '',
    menu: [
      {
        id: 1,
        title: 'Эспрессо',
        price: 110,
        type: 'drink'
      },
      {
        id: 2,
        title: 'Доппио',
        price: 120,
        type: 'drink'
      },
      {
        id: 3,
        title: 'Американо',
        price: 125,
        type: 'drink'
      },
      {
        id: 4,
        title: 'Капучино',
        price: 150,
        type: 'drink'
      },
      {
        id: 5,
        title: 'Латте',
        price: 170,
        type: 'drink'
      },
      {
        id: 6,
        title: 'Раф',
        price: 190,
        type: 'drink'
      },
      {
        id: 7,
        title: 'Мокачино',
        price: 235,
        type: 'drink'
      },
      {
        id: 8,
        title: 'Карамельный латте',
        price: 250,
        type: 'drink'
      },
      {
        id: 9,
        title: 'Флет-уайт',
        price: 195,
        type: 'drink'
      },
      {
        id: 10,
        title: 'Горячий шоколад',
        price: 230,
        type: 'drink'
      },
      {
        id: 11,
        title: 'Какао',
        price: 170,
        type: 'drink'
      },
      {
        id: 12,
        title: 'Матча-латте',
        price: 180,
        type: 'drink'
      },
      {
        id: 13,
        title: 'Матча',
        price: 150,
        type: 'drink'
      },
      {
        id: 14,
        title: 'Глинтвейн',
        price: 190,
        type: 'drink'
      },
      {
        id: 15,
        title: 'Грог',
        price: 190,
        type: 'drink'
      },
      {
        id: 16,
        title: 'Глёг',
        price: 190,
        type: 'drink'
      },
      {
        id: 17,
        title: 'Круассан с творожным сыром и вялеными томатами',
        price: 320,
        type: 'croissant'
      },
      {
        id: 18,
        title: 'Круассан с говядиной в брусничном соусе',
        price: 290,
        type: 'croissant'
      },
      {
        id: 19,
        title: 'Круассан с лососем',
        price: 260,
        type: 'croissant'
      },
      {
        id: 20,
        title: 'Круассан с креветками',
        price: 260,
        type: 'croissant'
      },
      {
        id: 21,
        title: 'Круассан с говяжьей котлетой',
        price: 235,
        type: 'croissant'
      },
      {
        id: 22,
        title: 'Круассан с ветчиной и сыром',
        price: 215,
        type: 'croissant'
      },
      {
        id: 23,
        title: 'Круассан Цезарь',
        price: 210,
        type: 'croissant'
      },
      {
        id: 24,
        title: 'Круассан классический',
        price: 120,
        type: 'croissant'
      },
      {
        id: 25,
        title: 'Круассан с клубникой',
        price: 260,
        type: 'croissant'
      },
      {
        id: 26,
        title: 'Круассан миндальный',
        price: 250,
        type: 'croissant'
      },
      {
        id: 27,
        title: 'Круассан фисташковый',
        price: 260,
        type: 'croissant'
      },
      {
        id: 28,
        title: 'Круассан манго-маракуйя',
        price: 225,
        type: 'croissant'
      },
      {
        id: 29,
        title: 'Круассан Рафаэлло',
        price: 180,
        type: 'croissant'
      },
      {
        id: 30,
        title: 'Круассан крем-чиз',
        price: 170,
        type: 'croissant'
      },
      {
        id: 31,
        title: 'Круассан шоколадный',
        price: 150,
        type: 'croissant'
      },
      {
        id: 32,
        title: 'Вензель с творогом',
        price: 130,
        type: 'bakery'
      },
      {
        id: 33,
        title: 'Вензель с яблоком',
        price: 140,
        type: 'bakery'
      },
      {
        id: 34,
        title: 'Вензель с вишней',
        price: 140,
        type: 'bakery'
      },
      {
        id: 35,
        title: 'Кленовый пекан',
        price: 210,
        type: 'bakery'
      },
      {
        id: 36,
        title: 'Даниш с клубникой',
        price: 210,
        type: 'bakery'
      },
      {
        id: 37,
        title: 'Даниш с персиками',
        price: 170,
        type: 'bakery'
      },
      {
        id: 38,
        title: 'Даниш с черникой',
        price: 160,
        type: 'bakery'
      },
      {
        id: 39,
        title: 'Сосиска в тесте',
        price: 110,
        type: 'bakery'
      },
      {
        id: 40,
        title: 'Слойка с сыром',
        price: 100,
        type: 'bakery'
      },
      {
        id: 41,
        title: 'Овсяная каша',
        price: 170,
        type: 'breakfast'
      },
      {
        id: 42,
        title: 'Сырники со сметаной',
        price: 250,
        type: 'breakfast'
      },
      {
        id: 43,
        title: 'Сырники со сгущенным молоком и бананом',
        price: 300,
        type: 'breakfast'
      },
      {
        id: 44,
        title: 'Глазунья с круассаном',
        price: 315,
        type: 'breakfast'
      },
      {
        id: 45,
        title: 'Глазунья с беконом',
        price: 355,
        type: 'breakfast'
      },
      {
        id: 46,
        title: 'Глазунья с креветкой',
        price: 325,
        type: 'breakfast'
      },
      {
        id: 47,
        title: 'Глазунья с лососем',
        price: 475,
        type: 'breakfast'
      },
      {
        id: 48,
        title: 'Омлет с ветчиной и сыром',
        price: 365,
        type: 'breakfast'
      },
      {
        id: 49,
        title: 'Скрембл с беконом',
        price: 365,
        type: 'breakfast'
      },
      {
        id: 50,
        title: 'Скрембл с креветкой',
        price: 435,
        type: 'breakfast'
      },
      {
        id: 51,
        title: 'Скрембл с лососем',
        price: 475,
        type: 'breakfast'
      },
      {
        id: 52,
        title: 'Салат Цезарь с курицей',
        price: 285,
        type: 'salad'
      },
      {
        id: 53,
        title: 'Салат Цезарь с креветками',
        price: 385,
        type: 'salad'
      },
      {
        id: 54,
        title: 'Салат греческий',
        price: 305,
        type: 'salad'
      },
      {
        id: 55,
        title: 'Салат с лососем и авокадо',
        price: 435,
        type: 'salad'
      },
      {
        id: 56,
        title: 'Кусок торта красный бархат',
        price: 280,
        type: 'desert'
      },
      {
        id: 57,
        title: 'Кусок торта Шоколад-банан',
        price: 280,
        type: 'desert'
      },
      {
        id: 58,
        title: 'Кусок торта миндальный',
        price: 280,
        type: 'desert'
      },
      {
        id: 59,
        title: 'Кусок торта чизкейк',
        price: 210,
        type: 'desert'
      },
      {
        id: 60,
        title: 'Десерт киви',
        price: 180,
        type: 'desert'
      },
      {
        id: 61,
        title: 'Десерт клубничный',
        price: 200,
        type: 'desert'
      },
      {
        id: 62,
        title: 'Десерт карамельный',
        price: 150,
        type: 'desert'
      },
      {
        id: 63,
        title: 'Десерт Наполеон',
        price: 170,
        type: 'desert'
      },
      {
        id: 64,
        title: 'Десерт сникерс',
        price: 165,
        type: 'desert'
      },
      {
        id: 65,
        title: 'Десерт лимон-имбирь',
        price: 150,
        type: 'desert'
      },
      {
        id: 66,
        title: 'Тирамису',
        price: 170,
        type: 'desert'
      }
    ],
    basket: [],
    basketPrice: 0
  },
  mutations: {
    pageTitle(state, title) {
      state.pageTitle = title
      document.title = title
    },
    addToBasket(state, id) {
      state.basket.push(state.menu[id - 1])
      state.basketPrice += state.menu[id - 1].price
    },
    removeFromBasket(state, id) {
      const basket = state.basket

      for (let i = 0; i < basket.length; i++) {
        if (basket[i].id === id) {
          state.basketPrice -= basket[i].price
          basket.splice(i, 1)
          break
        }
      }
    }
  },
  getters: {
    getMenu(state) {
      return state.menu
    },
    getBasket(state) {
      return state.basket
    },
    getItemCount: (state) => (id) => {
      return state.basket.filter((item) => item.id === id).length
    }
  }
})
