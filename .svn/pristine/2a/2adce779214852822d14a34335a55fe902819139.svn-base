<template>
  <div class="environment">
    <h1>食宿环境</h1>
    <p class="summary">配有150间标准住宿环境，可支撑300名学员的住宿要求，并提供独立的学员就餐环境，构建一流的食宿环境。</p>
    <div class="decoration"></div>
    <div class="environment_swiper">
      <swiper
        class="swiper environment_swiper1"
        ref="swiperTop"
        :options="swiperOptionTop"
      >
        <swiper-slide class="swiper-slide">
          <section class="condition_item">
            <img src="~static/images/bed.png" alt="">
<!--            <p :class="$store.state.$fontClass + '-title-h3'">多功能教室1</p>-->
          </section>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <section class="condition_item">
            <img src="~static/images/bed.png" alt="">
<!--            <p :class="$store.state.$fontClass + '-title-h3'">多功能教室2</p>-->
          </section>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <section class="condition_item">
            <img src="~static/images/bed.png" alt="">
<!--            <p :class="$store.state.$fontClass + '-title-h3'">多功能教室3</p>-->
          </section>
        </swiper-slide>
      </swiper>
      <!-- swiper2 Thumbs 下方缩略图-->
      <swiper
        class="swiper gallery-thumbs"
        :options="swiperOptionThumbs"
        ref="swiperThumbs"
      >
        <swiper-slide class="swiper-slide">
          <img src="~static/images/bed.png" alt="">
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img src="~static/images/bed.png" alt="">
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img src="~static/images/bed.png" alt="">
        </swiper-slide>
        <div class="swiper-button-prev turn" slot="button-prev">
          <i class="iconfont icon-left-arrow"></i>
        </div>
        <div class="swiper-button-next turn" slot="button-next">
          <i class="iconfont icon-left-arrow"></i>
        </div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "support-environment",
  data(){
    return{
      swiperOptionTop:{
        loop: true,
        loopedSlides: 5,
      },
      swiperOptionThumbs:{
        loop: true,
        slidesPerView: 3,
        slidesPerGroup: 1,
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
      const swiperTop = this.$refs.swiperTop.$swiper
      const swiperThumbs = this.$refs.swiperThumbs.$swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  }
}
</script>

<style lang="scss" scoped>
$contentWidth: 14.6rem;
.environment {
  width: $contentWidth;
  margin: 0 auto;
  padding-top: 1.1rem;
  text-align: center;

  .summary {
    width: 6.9rem;
    color: #666;
    margin: 0 auto;
    padding-top: .44rem;
    padding-bottom: .5rem;
  }

  .decoration {
    width: .2rem;
    height: 2px;
    background: #cb2525;
    margin: 0 auto;
  }
}
.environment_swiper{
  overflow: hidden;
  .environment_swiper1{
    width: 100%;
    height: 5.82rem;
    margin: .54rem 0 .32rem 0;
  }
  .gallery-thumbs{
    width: 100%;
    .swiper-slide{
      width: 4.64rem;
      height: 1.85rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .swiper-slide-active{
      border: .04rem solid #cb2525;
    }
    .turn{
      width: .34rem;
      height: .6rem;
      position: absolute;
      line-height: .6rem;
      top: .62rem;
      left: 0;
      z-index: 999;
      text-align: center;
      background: rgba(255, 0, 0, .6);
      color: #fff;
      font-weight: bold;
    }
    .swiper-button-prev{
    }
    .swiper-button-next{
      right: 0;
      left: unset;
      transform: rotate(180deg);
    }
  }
}
</style>
