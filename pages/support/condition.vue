<template>
  <div class="condition">
    <section class="teach_condition flex_box">
      <div class="text_description">
        <h1 :class="$store.state.$fontClass + '-title-h2'">教学条件</h1>
        <p>
          通过云计算虚拟化技术，搭建4间保密业务实训、保密技能实训教室，可同时容纳4个班级240人开展实训。同时配有可容纳180人的理论教师4间及可容纳160人的学术报告厅
        </p>
        <div class="decoration"></div>
      </div>
      <div class="support_swiper">
        <swiper
          class="swiper condition_swiper"
          ref="swiperLeft"
          :options="swiperOptionTop"
        >
          <swiper-slide class="swiper-slide">
            <section class="condition_item">
              <img src="~static/images/condition.png" alt="">
              <p :class="$store.state.$fontClass + '-title-h3'">多功能教室1</p>
            </section>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <section class="condition_item">
              <img src="~static/images/condition.png" alt="">
              <p :class="$store.state.$fontClass + '-title-h3'">多功能教室2</p>
            </section>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <section class="condition_item">
              <img src="~static/images/condition.png" alt="">
              <p :class="$store.state.$fontClass + '-title-h3'">多功能教室3</p>
            </section>
          </swiper-slide>
        </swiper>
        <!-- swiper2 Thumbs 下方缩略图-->
        <swiper
          class="swiper gallery-thumbs"
          :options="swiperOptionThumbs"
          ref="swiperThumbs"
        >
          <swiper-slide class="swiper-slide1">
            <img src="~static/images/condition.png" alt="">
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <img src="~static/images/condition.png" alt="">
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <img src="~static/images/condition.png" alt="">
          </swiper-slide>
          <div class="swiper-button-prev turn" slot="button-prev">
            <i class="iconfont icon-top"></i>
          </div>
          <div class="swiper-button-next turn" slot="button-next">
            <i class="iconfont icon-top"></i>
          </div>
        </swiper>
      </div>
    </section>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

export default {
  name: "support-condition",
  components:{Swiper, SwiperSlide},
  directives: {
    swiper: directive
  },
  data(){
    return {
      swiperOptionTop:{
        loop: true,
        loopedSlides: 5,
      },
      swiperOptionThumbs:{
        loop: true,
        loopedSlides: 5,
        slidesPerView: 2,
        slidesPerGroup: 1,
        //竖向切换
        direction : 'vertical',
        // loopFillGroupWithBlank: true,
        spaceBetween: 30,
        touchRatio: 0.2,
        //点击切换
        slideToClickedSlide: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      const swiperLeft = this.$refs.swiperLeft.$swiper
      const swiperThumbs = this.$refs.swiperThumbs.$swiper
      swiperLeft.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperLeft
    })
  }
}
</script>

<style lang="scss" scoped>
$imgHeight: 5.2rem;
.condition{
  padding-top: 1.57rem;
  width: 14.6rem;
  margin: 0 auto;
  .teach_condition{
    justify-content: space-between;
    .support_swiper{
      flex: 1;
      display: flex;
      justify-content: space-between;
    }
  }
  .text_description{
    width: 4.1rem;
    text-align: center;
    margin-right: .8rem;
    .decoration{
      width: .2rem;
      height: 2px;
      background: #cb2525;
      margin: 0 auto;
    }
  }
  .text_description h1{
    margin-bottom: .4rem;
  }
  .text_description p{
    color: #666;
    margin-bottom: .52rem;
  }
}
.condition_item{
  position: relative;
  width:6.37rem;
  height: $imgHeight;
  p{
    position: absolute;
    bottom: 0;
    z-index: 99;
    left: 0;
    color: #fff;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    background: #0008;
    padding-left: .4rem;
  }
}
.swiper-slide{
  img{
    width: 100%;
    height: 100%;
  }
}
.condition_swiper{
  width:6.37rem;
  height: $imgHeight;
}
.gallery-thumbs{
  width: 3rem;
  height: $imgHeight;
  position: relative;
  //当前swiper的样式（active）
  .swiper-slide-active{
    border: .04rem solid #cb2525;
  }
  .turn{
    width: .6rem;
    height: .34rem;
    position: absolute;
    top: 0;
    left: 1.2rem;
    z-index: 999;
    text-align: center;
    background: rgba(255, 0, 0, .6);
    color: #fff;
    font-weight: bold;
  }
  .swiper-button-prev{
    transform: rotate(180deg);
  }
  .swiper-button-next{
    bottom: 0;
    top: unset;
  }
}
</style>
