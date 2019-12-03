const itemsData = [
  {id: 1, name: 'Меловая краска', price: '590Р', info: 'Цвет: красный, 210 мл', img: '../img/goods/photo.png', inStock: true}, /* TODO: Пути к изображения не определяются корректно с локальными данными */
  {id: 2, name: 'Меловые маркеры', price: '800Р', info: 'Цвет: синий, 5 шт.', img: '../img/goods/photo.png', inStock: true},
  {id: 3, name: 'Меловая маркеры', price: '800Р', info: 'Цвет: красный, 5шт.', img: '../img/goods/photo.png', inStock: true},
  {id: 4, name: 'Меловая краска', price: '590Р', info: 'Цвет: синий, 210 мл', img: '../img/goods/photo.png', inStock: true},
  {id: 5, name: 'Меловая краска', price: '590Р', info: 'Цвет: красный, 210 мл', img: '../img/goods/photo.png', inStock: true},
  {id: 6, name: 'Меловая краска', price: '590Р', info: 'Цвет: красный, 210 мл', img: '../img/goods/photo.png', inStock: true},
  {id: 7, name: 'Меловая краска', price: '590Р', info: 'Цвет: красный, 210 мл', img: '../img/goods/photo.png', inStock: false},
  {id: 8, name: 'Меловая краска', price: '590Р', info: 'Цвет: красный, 210 мл', img: '../img/goods/photo.png', inStock: true},
  {id: 9, name: 'Меловая краска', price: '590Р', info: 'Цвет: красный, 210 мл', img: '../img/goods/photo.png', inStock: true},
  {id: 10, name: 'Меловая краска', price: '590Р', info: 'Цвет: красный, 210 мл', img: '../img/goods/photo.png', inStock: true},
  {id: 11, name: 'Меловая краска', price: '590Р', info: 'Цвет: красный, 210 мл', img: '../img/goods/photo.png', inStock: false},
  {id: 12, name: 'Меловая краска', price: '590Р', info: 'Цвет: красный, 210 мл', img: '../img/goods/photo.png', inStock: false},
  {id: 13, name: 'Меловая краска', price: '590Р', info: 'Цвет: красный, 210 мл', img: '../img/goods/photo.png', inStock: true},
]

const basketData = [
  {id: 1, name: 'Меловая краска', price: '590', descript: 'Краткое описание', color: 'красный', img: '../img/goods/photo.png', count: 7}, /* TODO: Пути к изображения не определяются корректно с локальными данными */
  {id: 2, name: 'Меловые маркеры', price: '800', descript: 'Краткое описание', color: 'синий', img: '../img/goods/photo.png', count: 3},
  {id: 3, name: 'Меловая маркеры', price: '800', descript: 'Краткое описание', color: 'красный', img: '../img/goods/photo.png', count: 5},
  {id: 4, name: 'Меловая краска', price: '590', descript: 'Краткое описание', color: 'синий', img: '../img/goods/photo.png', count: 5}
]

const partnersData = [
  {
    id: 1,
    name: 'Сергей',
    city: 'г. Благовещенск',
    rating: '+135',
    img: '../img/goods/photo.png',
    socials: {
      vk: 'https://vk.com/',
      instagram: 'https://instagram.com',
      whatsapp: '8 800 000 00 00',
      telegram: 'https://t.me/'
    }}, /* TODO: Пути к изображения не определяются корректно с локальными данными */
  {
    id: 2,
    name: 'Антон',
    city: 'г. Москва',
    rating: '+125',
    img: '../img/goods/photo.png',
    socials: {
      vk: 'https://vk.com/',
      instagram: 'https://instagram.com',
      whatsapp: '8 800 000 00 00',
      telegram: 'https://t.me/'
    }},
  {
    id: 3,
    name: 'Василий',
    city: 'г. Сочи',
    rating: '+185',
    img: '../img/goods/photo.png',
    socials: {
      vk: 'https://vk.com/',
      instagram: 'https://instagram.com',
      whatsapp: '8 800 000 00 00',
      telegram: 'https://t.me/'
    }},
  {
    id: 4,
    name: 'Дмитрий',
    city: 'г. Санкт-Петербург',
    rating: '+165',
    img: '../img/goods/photo.png',
    socials: {
      vk: 'https://vk.com/',
      instagram: 'https://instagram.com',
      whatsapp: '8 800 000 00 00',
      telegram: 'https://t.me/'
    }},
  {
    id: 5,
    name: 'Виктория',
    city: 'г. Минск',
    rating: '+110',
    img: '../img/goods/photo.png',
    socials: {
      vk: 'https://vk.com/',
      instagram: 'https://instagram.com',
      whatsapp: '8 800 000 00 00',
      telegram: 'https://t.me/'
    }},
  {
    id: 6,
    name: 'Владимир',
    city: 'г. Владивосток',
    rating: '+135',
    img: '../img/goods/photo.png',
    socials: {
      vk: 'https://vk.com/',
      instagram: 'https://instagram.com',
      whatsapp: '8 800 000 00 00',
      telegram: 'https://t.me/'
    }},
  {
    id: 7,
    name: 'Александр',
    city: 'г. Благовещенск',
    rating: '+135',
    img: '../img/goods/photo.png',
    socials: {
      vk: 'https://vk.com/',
      instagram: 'https://instagram.com',
      whatsapp: '8 800 000 00 00',
      telegram: 'https://t.me/'
    }},
  {
    id: 8,
    name: 'Меловая краска',
    city: 'г. Москва',
    rating: '+135',
    img: '../img/goods/photo.png',
    socials: {
      vk: 'https://vk.com/',
      instagram: 'https://instagram.com',
      whatsapp: '8 800 000 00 00',
      telegram: 'https://t.me/'
    }},
  {
    id: 9,
    name: 'Меловая краска',
    city: 'г. Сочи',
    rating: '+135',
    img: '../img/goods/photo.png',
    socials: {
      vk: 'https://vk.com/',
      instagram: 'https://instagram.com',
      whatsapp: '8 800 000 00 00',
      telegram: 'https://t.me/'
    }},
  {
    id: 10,
    name: 'Меловая краска',
    city: 'г. Минск',
    rating: '+135',
    img: '../img/goods/photo.png',
    socials: {
      vk: 'https://vk.com/',
      instagram: 'https://instagram.com',
      whatsapp: '8 800 000 00 00',
      telegram: 'https://t.me/'
    }},
  {
    id: 11,
    name: 'Меловая краска',
    city: 'г. Владивосток',
    rating: '+135',
    img: '../img/goods/photo.png',
    socials: {
      vk: 'https://vk.com/',
      instagram: 'https://instagram.com',
      whatsapp: '8 800 000 00 00',
      telegram: 'https://t.me/'
    }},
  {
    id: 12,
    name: 'Меловая краска',
    city: 'г. Брест',
    rating: '+135',
    img: '../img/goods/photo.png',
    socials: {
      vk: 'https://vk.com/',
      instagram: 'https://instagram.com',
      whatsapp: '8 800 000 00 00',
      telegram: 'https://t.me/'
    }},
  {
    id: 13,
    name: 'Меловая краска',
    city: 'г. Борисов',
    rating: '+135',
    img: '../img/goods/photo.png',
    socials: {
      vk: 'https://vk.com/',
      instagram: 'https://instagram.com',
      whatsapp: '8 800 000 00 00',
      telegram: 'https://t.me/'
    }},
]
export default {
  itemsData,
  partnersData,
  basketData
}
