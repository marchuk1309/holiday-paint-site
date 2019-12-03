var chunk = require('lodash.chunk');

export default {
  data() {
    return {
      page: +this.$route.query.page || 1,
      pageSize: 8,
      pageCount: 0,
      allItems: [],
      items: []
    }
  },
  methods: {
    pageChangeHandler(page){
      this.items = this.allItems[page - 1] || this.allItems[0]
      this.$router.push(`${this.$route.path}?page=${page}`)
    },
    setupPagination(allItems){
      this.allItems = chunk(allItems, this.pageSize)
      this.pageCount = this.allItems.length
      this.items = this.allItems[this.page - 1] || this.allItems[0]
    }
  }
}