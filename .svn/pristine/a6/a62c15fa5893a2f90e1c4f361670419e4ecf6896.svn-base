<template>
  <!--    头部-->
  <header :class="{'background': routePath !== 'index'}">
    <img :src="routePath !== 'index'? require('~/static/images/logo.png') : require('~/static/images/index_logo.png')" alt="" class="logo">
    <i
      :class="['iconfont',  'menu', isShowMenu ? 'icon-cuohao' : 'icon-caidan' ]"
      :style="{'color': routePath ? '#003a8f' : '#fff'}"
      @click="showPhoneMenu"
    ></i>
    <nav :class="{'menu_active': isShowMenu}">
      <li v-for="(item, index) in navList" :key="index">
        <nuxt-link :exact-active-class="$route.name !== 'index' ? 'active' : '' " :to="item.link">
          {{ item.name }}
        </nuxt-link>
      </li>
      <li>
        <i class="iconfont icon-search"></i>
      </li>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  props:[
    'navList'
  ],
  data(){
    return{
      isShowMenu: false,
      headerBackground: this.routePath !== 'index',
      routePath: this.$route.name
    }
  },
  created() {
    console.log(this.$route.name)
  },
  watch:{
    $route(){
      this.routePath = this.$route.name;
    }
  },
  methods:{
    showPhoneMenu(){
      this.isShowMenu = !this.isShowMenu
    },
  }
}
</script>

<style lang="scss" scoped>
  $width: 19.2rem;
  $headerHeight: 1rem;
  .active{
    color: #cb2525!important;
  }
  .index_active{
    color: #fff!important;
  }
  .background {
    background: #fff;
    nav {
      li {
        a {
          color: #666;
        }
      }
    }
  }
  header{
    position: fixed;
    display: flex;
    justify-content: space-between;
    width: $width;
    padding: 0 2.2rem 0 2.3rem;
    text-align: center;
    align-items: center;
    background: url("~static/images/header_bg.png") no-repeat;
    background-size: cover;
    z-index: 9999;
    .logo{
      height: 0.64rem;
    }
    nav{
      display: inline-flex;
      transition: all 500ms ease-in-out;
      li{
        margin-left: 0.8rem;
        height: $headerHeight;
        a{
          display: block;
          height: $headerHeight;
          width: 100%;
          line-height: $headerHeight;
          color: #fff;
        }
        i{
          color: #fff;
          font-size: .3rem;
          line-height: $headerHeight;
        }
      }
    }
    .menu{
      color: #fff;
      display: none;
      font-size: .4rem;
      line-height: $headerHeight;
    }
  }
  @media only screen and (max-width : 1024px) and (min-width: 300px) {
    $phoneWidth: 7.5rem;
    $phoneFontSize: .28rem;
    //.container {
    //  width: $phoneWidth;
      //头部
      header {
        width: $phoneWidth;
        padding: 0 .4rem;

        .menu_active {
          left: 0;
          opacity: 1;
        }

        nav {
          position: fixed;
          opacity: 0;
          flex-direction: column;
          width: 100%;
          left: $phoneWidth;
          top: $headerHeight;
          height: calc(100vh - 1rem);
          z-index: 999;
          background: #fff;
          font-size: $phoneFontSize;

          li {
            a {
              color: #333;
              text-align: left;
            }
          }
        }

        .menu {
          display: block;
        }
      }
    //}
  }
</style>
