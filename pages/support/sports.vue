<template>
  <div class="sports">
    <h1>体育运动</h1>
    <p class="summary">培训校区有足球场、篮球场、羽毛球场、乒乓球室等，为学员在学习之余提供了丰富的运动环境和条件。</p>
    <div class="decoration"></div>
    <section class="site_wrap">
      <div class="site">
        <h2 :class="$store.state.$fontClass + '-title2'">足球场</h2>
        <div class="decoration"></div>
        <swiper
          class="site_swiper"
          :options="siteSwiperOption"
        >
          <swiper-slide class="swiper-slide">
            <img src="~static/images/basketboll.png" alt="">
          </swiper-slide>
          <div class="swiper-button-prev turn" slot="button-prev">
            <i class="iconfont icon-left-arrow"></i>
          </div>
          <div class="swiper-button-next turn" slot="button-next">
            <i class="iconfont icon-left-arrow"></i>
          </div>
        </swiper>
      </div>
      <div class="site">
        <h2 :class="$store.state.$fontClass + '-title2'">篮球场</h2>
        <div class="decoration"></div>
        <swiper
          class="site_swiper"
          :options="siteSwiperOption"
        >
          <swiper-slide class="swiper-slide">
            <img src="~static/images/basketboll.png" alt="">
          </swiper-slide>
          <div class="swiper-button-prev turn" slot="button-prev">
            <i class="iconfont icon-left-arrow"></i>
          </div>
          <div class="swiper-button-next turn" slot="button-next">
            <i class="iconfont icon-left-arrow"></i>
          </div>
        </swiper>
      </div>
      <div class="site">
        <h2 :class="$store.state.$fontClass + '-title2'">羽毛球场</h2>
        <div class="decoration"></div>
        <swiper
          class="site_swiper"
          :options="siteSwiperOption"
        >
          <swiper-slide class="swiper-slide">
            <img src="~static/images/basketboll.png" alt="">
          </swiper-slide>
          <div class="swiper-button-prev turn" slot="button-prev">
            <i class="iconfont icon-left-arrow"></i>
          </div>
          <div class="swiper-button-next turn" slot="button-next">
            <i class="iconfont icon-left-arrow"></i>
          </div>
        </swiper>
      </div>
    </section>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
export default {
  name: "sports",
  components:{Swiper, SwiperSlide, directive },
  data(){
    return{
      siteSwiperOption:{
        // loop: true,
        spaceBetween: 30,
        touchRatio: 0.2,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$contentWidth: 14.6rem;
.sports{
  width: $contentWidth;
  margin: 0 auto;
  padding-top: 1.1rem;
  text-align: center;
  //文字详情
  .summary {
    width: 7rem;
    color: #666;
    margin: 0 auto;
    padding-top: .44rem;
    padding-bottom: .5rem;
  }
  //红色横线装饰
  .decoration {
    width: .2rem;
    height: 4px;
    background: #cb2525;
    margin: 0 auto;
  }
  //体育场地
  .site_wrap{
    padding-top: .8rem;
    text-align: center;
    display: flex;
    justify-content: space-between;
    position: relative;
    flex-wrap: wrap;
    .site{
      width: 7.2rem;
      margin-bottom: .84rem;
      img{
        width: 100%;
        height: 4.24rem;
        display: block;
      }
      h2{
        margin-bottom: .24rem;
      }
      .site_swiper{
        margin-top: .3rem;
      }
    }
  }
}
//翻页
.turn{
  width: .36rem;
  height: .6rem;
  position: absolute;
  line-height: .6rem;
  z-index: 999;
  text-align: center;
  background: #0005;
  color: #fff;
  font-weight: bold;
}
.swiper-button-prev{
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
.swiper-button-next{
  right: 0;
  bottom: 50%;
  transform: rotate(180deg) translateY(-50%);
}
</style>
