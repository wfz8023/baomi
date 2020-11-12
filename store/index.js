import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    $fontClass : 'littleFont',
    config: {}, // 网站配置文件
    navList:[], // 网站导航列表
    loaded: false, // 网站是否加载完毕
    mode: 'pc', // 网站模式
    menuShow: false, // 是否显示菜单
    statement: true, // 是否显示严正声明
    isIE:false, // 是否为ie
    newsClassList:[]
  },
  mutations: {
    setNewsClassList(state, list){
      state.newsClassList = list;
    },
    //改变字体大小
    changeFontSize(state, index) {
      state.$fontClass = Vue.prototype.$changeFontClass[index]
      // console.log(index, state.$fontClass)
    },
      // 网站加载完毕
      loaded(state) {
        state.loaded = true
      },
      // 设置网站配置文件
      setConfig(state, config) {
        state.config = {
          ...config,
        }
      },
      // 设置网站导航
      setNavData(state, list) {
        state.navList = list
      },
      // 隐藏严正声明
      hideStatement(state) {
        state.statement = false
      },

  },
  actions: {
    async nuxtServerInit(store) {
      await axios.get('/api/config').then( res => {
        if (res.data.code === 200) {
          const config = {
            ...res.data.data,
          }
          console.log(res)
          store.commit('setConfig', config)
        } else {
          console.log('%c 请求失败：' + res.data.result, 'color:#ff0000;')
        }
      }).catch((error) => {
        console.log('%c 请求失败：' + error, 'color:#ff0000;')
      });
    },
  }
})


export default store
