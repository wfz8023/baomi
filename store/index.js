import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    $fontClass : 'littleFont'
  },
  mutations: {
    changeFontSize(state, index) {
      state.$fontClass = Vue.prototype.$changeFontClass[index]
      console.log(index, state.$fontClass)
    }
  }
})

export default store
