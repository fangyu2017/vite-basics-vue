import { defineStore } from 'pinia'

export const useCounterStore = defineStore('main', {
  state: () => {
    return {
      counter: 3
    }
  },
  getters: {
    doubleCount (state) {
      return state.counter * 2
    }
  },
  actions: {
    increment () {
      console.log('increment')
      this.counter++
    }
  }

})
