import axios from 'axios'
import {arrayFindIndex} from "element-ui/src/utils/util";

export const state = () => ({
    apiServer: 'http://hpapi.fobesko.com/public',
    user: {
        info:{},
        socials:{ ids:{}, active:{} }
    },
    request: [],
    list: [],
    cities: [],
    promocodes: [],
    discount: 0,
    colors: [],
    markers: [],
    partners: [],
    settings: [],
    content: [],
    shownProducts: [],
    searchString: '',
    products: [],
    products_photos: [],
    userphoto: [],
    showAvailable: false,
    showType: [],
    showSubType: [],
    showSize: 0,
    showSale: false,
    showColor: [],
    currentCity: '',
    currentPromocode: null,
    basket: [],
    isLoaded: false,
    noPhoto: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACNCAIAAADq/gXMAAAAA3NCSVQICAjb4U/gAAAFWklEQVR4nO3d61MTVwDG4ZPdhGxIbC4grToVRCkXMzCMtjqIdNRSpo6Obf/QjtO7DqUVixesAlG5WCiEi1YCSSTJkmTZ3X7Ysd1CRERY8jrv8yksZ89Z9sduFr7EZZqmoPIm7fUB0Ou5U6nUXh8DvYZbCOELvLfXh0GvtJpd4e0OACMBYCQAjASAkQAwEgBGAsBIABgJACMBYCQAjASAkQAwEgBGAsBIABgJACMBYCQAjASAkQAwEgBGAsBIABgJACMBYCQAjASAkQAwEgBGAsBIABgJACMBYCQAjASAkQAwEgBGAsBIABgJACMBYCQAjASAkQAwEgBGAsBIABgJACMBYCQAjASAkQAwEgBGAsBIABgJACMBYCQAjASAkQAwEoB3JNJSIrH4/PleH8VucSiSmst9d/UbXdftGwfv3Jp8MrEj8y8tJRKLjkbSNK33+s8vXqQdWOsduZKc92RivLp6fzAYcmAttwNrbIVhGKOPHi7Mzwkhat7/INra5vF4fvj2qmEY9mGXv/x6475qLpfNZEzTWFVVX2Wlfc6x0ccLc7OapoXCkWhrazAYSiaXB/pv2Hevqt7f0Xm25OB1Cw3c7K+pqWlobNJ1fS4+c6rjzI79/Jsql0gT42Oqmus6d0GSpEex4djw0ImPP7l4+YoQ4vHDmGma0da2jXsVi8WRofvpdFqWZdM0f+//LRyJtLWf8Hg8QojxsdHU8nJHZ5dXUWbjM3dvDZzv7olEqi5d+UoI0f9rX0Nj44GDh6ypSg52u/93fmRZkt1uIcTy0pIsy+FwZLdPi8XRSNd+/N7+pWEYkUiV9WJ6avLchW6fzyeE+Kip+UbfL4ZhSJIkhHC5XKZpulyujRPGhockSb7Q3fNkYlxfW2s+Hn3wx+Cj2Ej7iZPWnB1nuwL79gkhjh5r+PvZs9n4TP3RY7apXNbrTQbblzvd0Wm9SKWSoXB4Z0/OJhyNdPbTc9Z5t4wMP7BerKqqrut9vdftgwv5vP3etZGmac+eLpz/7PN/55Qkqbkl2td7PdraVsjnDcOw37KCoVA2kyk5lZrLbX2wdcA+32bHtrMcjVTp98uy/N/aL28m1gcS91y8tO72sjlVzVlz2jf6AwGXy6WquY1XXokr8SXDNNZt2WSwEELX1xSfb+uH+pbK4umu0u+XJCmVTL7RXl6vIoQoFov2jZqmmabp9Sp+f0CWZfsjcjqd9gcCJad6o8FCCFl2r2naGx3t2yiLSJIk1R9reBgbTi4vaZq2svJifm72tXspihIKhedn4/aNs/GZYDCkKIosy7VH6h/HYtlMRtO0qck/s5mVw7V1Jafa4uB7d2//NTUphPAqSj6/ur0fdhvK5emusalZCHH/3mChUPAqyqvO5jqt7e2Dd25nMplCIW8YxsjQg8Ti85OnTlvfbTkeHR8bvT1ws1gshsKRUx1nrKe+krYyuJAvGLouhAiHI+t+OXaVK5lMQn9ic7FYfLowH5+eFkLU1dcfOHiooqJitxfVNK332k+nz3Q68BS+ml0plytp2yoqKuqO1OeyWSFEbd0RZxb1eDwfHq6NT08786dSWbwnIWpsbkkkFp353x38lbRXPB5Pd88XzqwF/570zlvNrvB2B4CRADASAEYCwEgAGAkAIwFgJACMBICRADASAEYCwEgAGAkAIwFgJACMBICRADASAEYCwEgAGAkAIwFgJACMBICRADASAEYCwEgAGAkAIwFgJACMBICRADASAEYCwEgAGAkAIwFgJACMBICRADASAEYCwEgAGAkAIwFgJACMBICRADASAEYCwEgAGAkAIwFgJACMBICRADASgH8A4wDbCRoU9yoAAAAASUVORK5CYII=',
    items: [
        {id: 1, name: 'Меловая краска', price: '590', color: '0', info: '210 мл', img: '../img/goods/photo.png', inStock: true}, /* TODO: Пути к изображения не определяются корректно с локальными данными */
        {id: 2, name: 'Меловые маркеры', price: '800', color: '0', info: '5 шт.', img: '../img/goods/photo.png', inStock: true},
    ]

})

export const getters = {
    basketCount (state) { return state.app.basketCount },
    basketSum (state) { return state.app.basketSum },
    basketInfo (state) { return state.basket },
    citiesInfo (state) { return state.cities },
    currentCity (state) { return state.currentCity },
    shownProductsInfo (state) { return state.shownProducts },
    productsInfo (state) { return state.products },
    colorsInfo (state) { return state.colors },
    partnersInfo (state) { return state.partners },
    userInfo (state) { return state.user },
    userInfoId (state) {return state.user.info.id},
    requestInfo (state) { return state.request },
    isLoaded (state) { return state.isLoaded },
    filters (state) { return [
        state.showAvailable,
        state.showSale,
        state.showType,
        state.showColor
    ]}
}

export const mutations = {
    saveRequestInfo(state, info){
        console.log("CLIENT")
        console.log(info)
        state.request = info
    },

    checkShownProducts(state, [item, status]) {
        if (status == true && !state.shownProducts.includes(item)) state.shownProducts.push(item)
        if (status == false) {
            let index = state.shownProducts.findIndex(element => element.id === item.id)
            state.shownProducts.splice(index, 1)
        }
        console.log(state.shownProducts)
    },

    flushFilter(state) {
        state.showAvailable = false
        state.showSale = false
        state.showSize = 0
        state.showType = []
        state.showColor = []
        state.shownProducts = []
        $nuxt.$router.replace('/catalog/')
    },

    addCities(cities) {
        cities.forEach(function (element) {
            this.cities.push(element.city);
        });

        console.log(localStorage.getItem('cityindex'));
        if (localStorage.getItem('cityindex') > this.cities.length) {
            localStorage.removeItem('cityindex');
        }
        if (localStorage.getItem('cityindex') != null) {
            this.selectedIndex = localStorage.getItem('cityindex');
        } else {
            this.selectedIndex = 0;
        }
    },

    filterSearch (state, string) {
        state.searchString = string
        console.log(state.searchString)
    },

    filterAvailable (state) {
        state.showAvailable = !state.showAvailable
    },
    filterType (state, type) {
        if (state.showType.includes(type)) {
            let index = state.showType.findIndex(element => element === type)
            state.showType.splice(index, 1)
        }
        else state.showType.push(type)
        if (state.showType.length == 0) {
          $nuxt.$router.replace('/catalog/')
        }
        else if (state.showType.length > 1) {
          $nuxt.$router.replace('/catalog/')
        }
        else $nuxt.$router.replace('/catalog/?category='+state.showType)
    },
    filterSubType (state, type) {
        if (state.showSubType.includes(type)) {
            let index = state.showSubType.findIndex(element => element === type)
            state.showSubType.splice(index, 1)
        }
        else state.showSubType.push(type)
        if (state.showSubType.length == 1) $nuxt.$router.replace('/catalog/?subcategory='+state.showSubType)
    },
    filterColor (state, color) {
        if (state.showColor.includes(color)) {
            let index = state.showColor.findIndex(element => element === color)
            state.showColor.splice(index, 1)
        }
        else state.showColor.push(color)
        console.log(state.showColor)
    },
    filterSale (state) {
        state.showSale = !state.showSale
    },
    filterSize (state, size) {
        state.showSize = size
    },
    addRequest (state, request) {
        request.type = 2
        if (state.currentPromocode != null) request.promocode = state.currentPromocode.id
        console.log(request);
        axios
            .post(state.apiServer + '/api/requests', request)
            .then(function(response) {
                console.log('addRequest RESPONSE');
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error)
            });

        /*
        axios
            .post(API_SERVER + '/api/user/notify', request)
            .then(function(response) {
              console.log('notify RESPONSE');
              console.log(response.data)
            })
            .catch(function (error) {
              console.log(error)
            })

         */
    },



    // BASKET
    basketFlush (state) {
        state.basket = [];
        localStorage.removeItem('basket')
    },
    basketPull (state, item) {
        let index = state.basket.findIndex(product => product.id === item.id);
        if (item.quantity == 1) {
            state.basket[index].quantity--;
            state.basket.splice(index, 1)
        } else {
            state.basket[index].quantity--
        }
        localStorage.setItem('basket', JSON.stringify(state.basket))
    },
    basketDel (state, item) {
        let index = state.basket.findIndex(product => product.id === item.id && product.color == item.color);
        state.basket[index].quantity--;
        state.basket.splice(index, 1)
        localStorage.setItem('basket', JSON.stringify(state.basket))
    },
    basketPush (state, item) {
        if (item.category != 4) {
            var index = state.basket.findIndex(product => product.id === item.id && product.color == item.color);
        }
        else {
            var index = state.basket.findIndex(product => product.id === item.id && product.size == item.size);
        }
        if (index != -1 && state.basket[index].color == item.color) {
            state.basket[index].quantity++
        }
        else if (index != -1 && state.basket[index].size == item.size) {
            state.basket[index].quantity++
        }
        else {
            var clonedObj = { ...item }
            clonedObj.color = item.color
            clonedObj.quantity = 1
            console.log(clonedObj)
            state.basket.push(clonedObj)
        }
        localStorage.setItem('basket', JSON.stringify(state.basket))
    },
    setDiscount (state, discount) {
        state.discount = discount
    },
    setCurrentPromocode (state, code) {
        state.currentPromocode = code
    },
    getData (state, response) {
        state.isLoaded = false
        // Getting cities
        state.cities = []
        response.data['cities'].forEach(function (element) {
            state.cities.push(element.city);
        })
        state.currentCity = state.cities[0]

        if (localStorage.getItem('basket') != null) {
            state.basket = JSON.parse(localStorage.getItem('basket'))
        }

        // Getting other data
        response.data['products'].forEach((item) => {
            if (typeof item.colors == "string") item.colors = JSON.parse(item.colors)
            if (typeof item.sizes == "string") item.sizes = JSON.parse(item.sizes)
            if (typeof item.sold == "string") item.sold = JSON.parse(item.sold)
            if (typeof item.images == "string") item.images = JSON.parse(item.images)
            for (let x of response.data['coordinates']) {
                if (typeof item[x.id] === "string") item[x.id] = JSON.parse(item[x.id])
            }
        })
        state.products = response.data['products']
        //state.products_photos = response.data['products_photo']
        //state.discounts.posts = response.data['discounts']
        let saleproducts = []

        response.data['content'].forEach(function (item) {
            item.images = JSON.parse(item.images)
        });

        state.colors = response.data['colors']
        state.markers = response.data['coordinates']
        state.partners = response.data['partners']
        state.settings = response.data['settings']
        state.categories = response.data['categories']
        state.content = response.data['content']
        response.data['promocodes'].forEach((item) => {

            if (item.items != null && item.items !== 'null') {
                if (typeof item.items == "string") item.items = JSON.parse(item.items)
                item.items.forEach((subitem) => {
                    saleproducts.push(subitem)
                })
            }
        })
        state.saleproducts = saleproducts
        state.promocodes = response.data['promocodes']
        state.showAvailable = false
        state.showSale = false
        state.showType = []
        state.showSubType = []
        state.showColor = []
        state.showSize = 0
        state.isLoaded = true
                console.log(state)
    },
    setCurrentCity(state, city) {
        localStorage.setItem('city', city)
            state.currentCity = city
    },
    updatePartnerInfo (state, info) {
        state.user = info
    },


}
export const actions = {
    setIndex({rootState}) {
        let index = rootState.apiServer
    },
    async getPartnerInfo({commit}, city) {
        console.log(city)
        await axios.get(this.state.apiServer + '/api/user/city/' + city)
            .then(function (response) {
                console.log(response.data);
                commit('updatePartnerInfo', response.data)
                console.log('1 data is ready!!!')

            })
            .catch(function (error) {
                console.log(error)
            });
    },
    async getData({commit, dispatch, state}) {
        console.log('Getting data...')
        await axios
            .get(state.apiServer + '/api/data/1')
            .then(async function (response) {
                commit('getData', response)
                await dispatch('getPartnerInfo', state.currentCity);
                console.log('2 data is ready!!!')
            })
            .catch(function (error) {
                console.log(error)
            })
    }
}
