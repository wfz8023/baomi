// element-ui.js
import Vue from 'vue'
import {
  Pagination,
} from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

const components = [
  Pagination
];

const Element = {
  install (Vue) {
    components.forEach(component => {
      Vue.component(component.name, component)
    })
  }
}

Vue.use(Element, { locale })
