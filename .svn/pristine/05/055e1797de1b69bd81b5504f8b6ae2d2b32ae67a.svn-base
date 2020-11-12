<template>
  <div class="banner_wrap">
    <div class="banner">
      <img class="banner_bg" src="~static/images/overview_banner.png" alt="教学">
      <div class="banner_text">
        <h1 :class="$store.state.$fontClass + '-banner-text'">{{ title || '课程资源' }}</h1>
        <div class="text_en flex_box">
          <img src="~static/images/banner_left.png" alt="">
          <p>{{ enTittle || 'Course Resources' }}</p>
          <img src="~static/images/banner_right.png" alt="">
        </div>
      </div>
    </div>
    <div :class="['pages', { 'pages_background' : background}]">
      <section :class="['nav_wrap', $store.state.$fontClass + '-title-h3']">
        <nav>
          <li v-for="link in navList">
            <nuxt-link exact-active-class="active" :to="{ name: link.childName}">
              {{ link.name }}
            </nuxt-link>
          </li>
        </nav>
      </section>
      <nuxt-child></nuxt-child>
    </div>
  </div>
</template>

<script>
export default {
  name: "page-nav",
  props: [
    'backgroundPath',
    'title',
    'enTittle',
    'navList',
    'background'
  ],
  created() {
    console.log(this.$route.name)
  }
}
</script>

<style lang="scss" scoped>
$contentWidth: 14.6rem;
.banner_wrap{
  overflow: hidden;
}
.pages_background{
  background: #eef1f4;
}
.banner{
  height: 4.84rem;
  margin-top: 1rem;
  position: relative;
  .banner_bg{
    width: 100%;
  }
  .banner_text{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    h1{
      color: #fff;
      margin: .16rem;
    }
    .text_en p{
      color: #e3dfdd;
      margin: 0 .14rem;
    }
  }
}
.nav_wrap{
  position: relative;
  margin: 0 auto;
}
nav{
  $boxHeight: .74rem;
  $boxWidth: 2.23rem;
  $boxTop: -.37rem;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  line-height: $boxHeight;
  li{
    margin-left: .4rem;
    display: inline-block;
    a{
      box-shadow: 0 .3rem .3rem #f5f5f5;
    }
    //激活后
    .active{
      background: url("~static/images/overview_active.png");
      box-shadow: 0 .3rem .3rem #fadada;
      color: #fff;
    }
  }
  li:nth-of-type(1){
    margin-left: 0;
  }
  a{
    display: block;
    width: $boxWidth;
    height: $boxHeight;
    background: #fff;
    color: #333;
  }
}
.pages {
  position: relative;
  width: 100vw;
  margin: 0 auto;
  padding-bottom: 1.1rem;
}
/*
.pages{
  position: relative;
  width: 100vw;
  margin: 0 auto;
  padding-bottom: 1.1rem;
  .select_teacher{
    width: $contentWidth;
    margin: 0 auto;
    padding-top: .8rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .teacher_item{
      padding: .08rem;
      margin-bottom: .1rem;
      display: flex;
      border: 1px solid #d1d1d1;
      img{
        width: 1.1rem;
        height: 1.45rem;
        margin-right: .14rem;
        display: block;
      }
      .teacher_selected{
        width: 2rem;
        p{
          color: #a8a8a8;
          padding-bottom: .1rem;
          margin-bottom: .1rem;
          border-bottom: 1px dashed #a8a8a8;
        }
        .many-ellipsis{
          color: #666;
          -webkit-line-clamp: 2;
          padding: 0;
          margin: 0;
          border: 0;
        }
      }
    }
    .teacher_item:hover{
      border: 1px solid #cb2525;
    }
  }
}
*/
</style>
