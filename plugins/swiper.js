import Vue from 'vue'
import 'swiper/swiper.scss'
import VueAwesomeSwiper from 'vue-awesome-swiper'

export default () => {
  if (process.browser) {
    Vue.use(VueAwesomeSwiper)
  }
  // Vue.use(VueAwesomeSwiper)
}
