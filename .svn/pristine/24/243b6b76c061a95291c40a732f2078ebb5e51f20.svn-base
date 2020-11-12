import Vue from 'vue' // vue 文件引入 - 方便在vue方法内容直接 this 调取

const changeFontClass = {
  0: 'littleFont',
  1: 'middleFont',
  2: 'maxFont',
};
//默认字号
Vue.prototype.$classIndex = 0;
Vue.prototype.$changeFontClass = changeFontClass;

let setFontSize = {
  install(Vue) {
    Vue.prototype.$fontClass = changeFontClass[Vue.prototype.$classIndex];
  }
};

Vue.use(setFontSize); // 这里不能丢
