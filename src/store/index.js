import { createStore } from 'vuex'

export default createStore({
  state: {
    pageTitle: '',
    menu: [
      {
        id: 3,
        title: 'Американо',
        price: 125,
        type: 'drink',
        img: 'americano'
      },
      {
        id: 4,
        title: 'Капучино',
        price: 150,
        type: 'drink',
        img: 'capucino'
      },
      {
        id: 5,
        title: 'Латте',
        price: 170,
        type: 'drink',
        img: 'capucino'
      },
      {
        id: 6,
        title: 'Раф',
        price: 190,
        type: 'drink',
        img: 'raf'
      },
      {
        id: 7,
        title: 'Мокачино',
        price: 235,
        type: 'drink',
        img: 'capucino'
      },
      {
        id: 8,
        title: 'Карамельный латте',
        price: 250,
        type: 'drink',
        img: 'caremelLatte'
      },
      {
        id: 9,
        title: 'Флет-уайт',
        price: 195,
        type: 'drink',
        img: 'capucino'
      },
      {
        id: 10,
        title: 'Горячий шоколад',
        price: 230,
        type: 'drink',
        img: 'raf'
      },
      {
        id: 11,
        title: 'Какао',
        price: 170,
        type: 'drink',
        img: 'raf'
      },
      {
        id: 12,
        title: 'Матча-латте',
        price: 180,
        type: 'drink',
        img: 'matchaLatte'
      },
      {
        id: 13,
        title: 'Лавандовый раф',
        type: 'drink',
        price: 255,
        img: 'lavandaRaf'
      },
      {
        id: 14,
        title: 'Шоколадно-апельсиновый латте',
        price: 265,
        type: 'drink',
        img: 'orangeLatte'
      },
      {
        id: 15,
        title: 'Попкорн Раф',
        price: 265,
        type: 'drink',
        img: 'popcornRaf'
      },
      {
        id: 17,
        title: 'Круассан с творожным сыром и вялеными томатами',
        price: 320,
        type: 'croissant',
        img: 'tomato'
      },
      {
        id: 18,
        title: 'Круассан с говядиной в брусничном соусе',
        price: 290,
        type: 'croissant',
        img: 'bruce'
      },
      {
        id: 19,
        title: 'Круассан с лососем',
        price: 260,
        type: 'croissant',
        img: 'fish'
      },
      {
        id: 21,
        title: 'Круассан с говяжьей котлетой',
        price: 235,
        type: 'croissant',
        img: 'beef'
      },
      {
        id: 22,
        title: 'Круассан с ветчиной и сыром',
        price: 215,
        type: 'croissant',
        img: 'vetchina'
      },
      {
        id: 23,
        title: 'Круассан Цезарь',
        price: 210,
        type: 'croissant',
        img: 'cezar'
      },
      {
        id: 24,
        title: 'Круассан классический',
        price: 120,
        type: 'croissant',
        img: 'classic'
      },
      {
        id: 25,
        title: 'Круассан с клубникой',
        price: 260,
        type: 'croissant',
        img: 'straw'
      },
      {
        id: 26,
        title: 'Круассан миндальный',
        price: 250,
        type: 'croissant',
        img: 'mindal'
      },
      {
        id: 27,
        title: 'Круассан фисташковый',
        price: 260,
        type: 'croissant',
        img: 'phistash'
      },
      {
        id: 28,
        title: 'Круассан манго-маракуйя',
        price: 225,
        type: 'croissant',
        img: 'mango'
      },
      {
        id: 29,
        title: 'Круассан Рафаэлло',
        price: 180,
        type: 'croissant',
        img: 'rafaello'
      },
      {
        id: 30,
        title: 'Круассан крем-чиз',
        price: 170,
        type: 'croissant',
        img: 'cremCheeze'
      },
      {
        id: 31,
        title: 'Круассан шоколадный',
        price: 150,
        type: 'croissant',
        img: 'chokolate'
      },
      {
        id: 37,
        title: 'Даниш с персиками',
        price: 170,
        type: 'bakery',
        img: 'danPersik'
      },
      {
        id: 38,
        title: 'Даниш с черникой',
        price: 160,
        type: 'bakery',
        img: 'danChernika'
      },
      {
        id: 39,
        title: 'Даниш с ежевикой',
        price: 160,
        type: 'bakery',
        img: 'danEjevika'
      },
      {
        id: 41,
        title: 'Овсяная каша',
        price: 170,
        type: 'breakfast',
        img: 'kasha'
      },
      {
        id: 43,
        title: 'Сырники со сгущенным молоком и бананом',
        price: 300,
        type: 'breakfast',
        img: 'cheezes'
      },
      {
        id: 44,
        title: 'Глазунья с круассаном',
        price: 315,
        type: 'breakfast',
        img: 'eggCroissant'
      },
      {
        id: 45,
        title: 'Глазунья с беконом',
        price: 355,
        type: 'breakfast',
        img: 'eggBacon'
      },
      {
        id: 46,
        title: 'Глазунья с креветкой',
        price: 325,
        type: 'breakfast',
        img: 'eggShrimps'
      },
      {
        id: 47,
        title: 'Глазунья с лососем',
        price: 475,
        type: 'breakfast',
        img: 'eggFish'
      },
      {
        id: 48,
        title: 'Омлет с ветчиной и сыром',
        price: 365,
        type: 'breakfast',
        img: 'omlet'
      },
      {
        id: 49,
        title: 'Скрембл с беконом',
        price: 365,
        type: 'breakfast',
        img: 'sqrBacon'
      },
      {
        id: 50,
        title: 'Скрембл с креветкой',
        price: 435,
        type: 'breakfast',
        img: 'sqrShrimps'
      },
      {
        id: 51,
        title: 'Скрембл с лососем',
        price: 475,
        type: 'breakfast',
        img: 'sqrFish'
      },
      {
        id: 52,
        title: 'Салат Цезарь с курицей',
        price: 285,
        type: 'salad',
        img: 'saladChicken'
      },
      {
        id: 53,
        title: 'Салат Цезарь с креветками',
        price: 385,
        type: 'salad',
        img: 'saladCrevetka'
      },
      {
        id: 54,
        title: 'Салат греческий',
        price: 305,
        type: 'salad',
        img: 'saladGrecia'
      },
      {
        id: 55,
        title: 'Салат с лососем и авокадо',
        price: 435,
        type: 'salad',
        img: 'saladFish'
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
      state.basket.push(state.menu.filter((item) => item.id === id)[0])
      state.basketPrice += state.menu.filter((item) => item.id === id)[0].price
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
