<template>
  <section class="shutters">
    <div
      v-for="shutter in shutters"
      :key="shutter.id"
      class="shutter_wrap"
      @mouseover="switchShutter(shutter.id)"
    >
      <div :class="[ activeShutters === shutter.id ? 'active' : 'default']">
        <div class="flex_box" v-if="activeShutters === shutter.id">
          <h4 :class="$store.state.$fontClass + '-title-h3'">精品讲座课程</h4>
          <p class="many-ellipsis">
            保密是一门科学，具有自身的规律和特点。随着社会主义市场经济深入发展和信息化建设的快速推进，保密教育保密是一门科学，具有自身的规律和特点。
          </p>
          <nuxt-link to="/" class="arrow">
            <i class="iconfont icon-changjiantou"/>
          </nuxt-link>
        </div>
        <div v-else >
          <img src="../static/images/podium.png" alt="">
          <p>精品课程讲座课题</p>
        </div>
      </div>
    </div>

    <swiper
      class="mobile_show"
      ref="mySwiper"
      :options="swiperOptions"
    >
      <swiper-slide class="swiper-slide" v-for="shutter in shutters" :key="shutter.id">
        <div class="active">
          <h4>精品讲座课程</h4>
          <p class="many-ellipsis">
            保密是一门科学，具有自身的规律和特点。随着社会主义市场经济深入发展和信息化建设的快速推进，保密教育保密是一门科学，具有自身的规律和特点。
          </p>
          <nuxt-link to="/" class="iconfont">
            <img src="../static/images/arrow.png" alt="">
          </nuxt-link>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

  </section>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

export default {
  name: "resource-shutter",
  components:{Swiper, SwiperSlide},
  directives: {
    swiper: directive
  },
  head() {
    return {
      title: '首页'
    }
  },
  data(){
    return {
      activeShutters: 1,
      shutters:[
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
      ],
      swiperOptions:{
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
          // clickable: true,
        }
      }
    }
  },
  created() {

  },
  methods:{
    switchShutter(id){
      this.activeShutters = id
    }
  }

}
</script>

<style lang="scss" scoped>
$shuttersHeight: 3.28rem;
//课程资源百叶窗
.shutters{
  width: 100%;
  height: 3.78rem;
  border: 1px solid #ccc;
  border-top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  font-size: .18rem;
  padding: 0 .17rem;
  .mobile_show{
    display: none;
  }
  .default{
    width: 1.59rem;
    height: $shuttersHeight;
    background: url("../static/images/close.png") no-repeat;
    background-size: cover;
    padding: 0 .26rem;
    transition: width 500ms ease-in-out;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      margin-bottom: .22rem;
    }
  }
  .active{
    width: 5.67rem;
    height: $shuttersHeight;
    background-size: cover;
    background: url("../static/images/right_open1.png") no-repeat;
    padding: 0 .64rem;
    text-align: center;
    align-items: center;
    transition: width 500ms ease-in-out;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-content: space-between;
    color: #fff;
    justify-content: space-between;
    .flex_box{
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
    h4{
      line-height: .5rem;
    }
    img{
      margin: 0;
    }
    p{
      margin-bottom: .4rem;
      overflow: hidden;
    }
    .arrow{
      border: 2px solid #fff;
      color: #fff;
    }
    //.iconfont{
    //  width: 1rem;
    //  height: .25rem;
    //  border: 2px solid #fff;
    //  border-radius: .25rem;
    //  display: flex;
    //  align-items: center;
    //  justify-content: center;
    //  img{
    //    width: .4rem;
    //    height: .1rem;
    //    margin: 0 auto;
    //  }
    //}
  }
  @media only screen and (max-width : 1024px) and (min-width: 300px) {
    .mobile_show{
      display: block;
    }
    .shutter_wrap{
      display: none;
    }
    .active{
      width: 6.16rem;
      padding: .64rem;
      padding-bottom: 0;
      h4{
      }
      .iconfont{
        width: 1.1rem;
        height: .4rem;
      }
    }
  }
}
</style>
