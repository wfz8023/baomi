<template>
<div class="condition">
    <section class="teach_condition flex_box">
        <div class="text_description">
            <h1 :class="$store.state.$fontClass + '-title-h2'">{{ title }}</h1>
            <p>
                {{ desc }}
            </p>
            <div class="decoration"></div>
        </div>
        <div class="support_swiper">
            <client-only>
                <swiper class="swiper condition_swiper" ref="swiperLeft" :options="swiperOptionTop">
                    <swiper-slide v-for="(condition, index) in conditionList" class="swiper-slide" :key="index">
                        <section class="condition_item">
                            <img :src="condition.img" :alt="condition.img">
                            <p :class="$store.state.$fontClass + '-title-h3'">{{ condition.title }}</p>
                        </section>
                    </swiper-slide>
                    <div class="swiper-button-prev1 turn" slot="button-prev">
                        <i class="iconfont icon-left-arrow"></i>
                    </div>
                    <div class="swiper-button-next1 turn" slot="button-next">
                        <i class="iconfont icon-left-arrow"></i>
                    </div>
                </swiper>
            </client-only>
            <!-- swiper2 Thumbs 下方缩略图-->
            <client-only>
                <swiper class="swiper gallery-thumbs" ref="swiperThumbs" :options="swiperOptionThumbs">
                    <swiper-slide v-for="(thumbs, index) in conditionList" :key="index" class="swiper-slide">
                        <img :src="thumbs.img" :alt="thumbs.img">
                    </swiper-slide>
                    <div class="swiper-button-prev turn" slot="button-prev">
                        <i class="iconfont icon-top"></i>
                    </div>
                    <div class="swiper-button-next turn" slot="button-next">
                        <i class="iconfont icon-top"></i>
                    </div>
                </swiper>
            </client-only>
        </div>
    </section>
</div>
</template>

<script>
import {
    Swiper,
    SwiperSlide,
    directive
} from 'vue-awesome-swiper'

export default {
    name: "support-condition",
    components: {
        Swiper,
        SwiperSlide
    },
    directives: {
        swiper: directive
    },
    async asyncData({
        $axios,
        env
    }) {
        const {
            data
        } = await $axios.get('/api/support/condition');
        const {
            seo_t,
            list,
            desc,
            keyword
        } = data.result.data;

        // console.log('data====>>>>', data);

        return {
            title: seo_t,
            desc,
            conditionList: list,
        }
    },
    data() {
        return {
          swiperOptionTop: {},
          swiperOptionThumbs:{}
/*            swiperOptionTop: {
                loop: true,
                loopedSlides: 5,
                navigation: {
                    nextEl: '.swiper-button-next1',
                    prevEl: '.swiper-button-prev1'
                },
            },
            swiperOptionThumbs: {
                loop: true,
                loopedSlides: 5,
                slidesPerView: 2,
                slidesPerGroup: 1,
                //竖向切换
                direction: 'vertical',
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
                },
            }*/
        }
    },
    mounted() {
      this.swiperOptionTop={
        loop: true,
          loopedSlides: 5,
          navigation: {
          nextEl: '.swiper-button-next1',
            prevEl: '.swiper-button-prev1'
        },
      }
      this.swiperOptionThumbs= {
          loop: true,
          loopedSlides: 5,
          slidesPerView: 2,
          slidesPerGroup: 1,
          //竖向切换
          direction: 'vertical',
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
          },
      }

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

.condition {
    padding-top: 1.1rem;
    width: 14.6rem;
    margin: 0 auto;

    .teach_condition {
        justify-content: space-between;

        .support_swiper {
            flex: 1;
            display: flex;
            justify-content: space-between;
        }
    }

    .text_description {
        width: 4.1rem;
        text-align: center;
        margin-right: .8rem;

        .decoration {
            width: .2rem;
            height: 2px;
            background: #cb2525;
            margin: 0 auto;
        }
    }

    .text_description h1 {
        margin-bottom: .4rem;
    }

    .text_description p {
        color: #666;
        margin-bottom: .52rem;
    }
}

.condition_item {
    position: relative;
    width: 6.37rem;
    height: $imgHeight;

    p {
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

.swiper-slide {
    img {
        width: 100%;
        height: 100%;
    }
}

.condition_swiper {
    width: 6.37rem;
    height: $imgHeight;

    //翻页
    .turn {
        width: .36rem;
        height: .6rem;
        position: absolute;
        line-height: .6rem;
        z-index: 999;
        text-align: center;
        background: #0005;
        color: #fff;
        font-weight: bold;
        display: none;
    }

    .swiper-button-prev1 {
        top: 50%;
        left: 0;
        transform: translateY(-50%);
    }

    .swiper-button-next1 {
        right: 0;
        bottom: 50%;
        transform: rotate(180deg) translateY(-50%);
    }
}

.gallery-thumbs {
    width: 3rem;
    height: $imgHeight;
    position: relative;

    //当前swiper的样式（active）
    .swiper-slide-active {
        border: .04rem solid #cb2525;
    }

    .turn {
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

    .swiper-button-prev {
        transform: rotate(180deg);
    }

    .swiper-button-next {
        bottom: 0;
        top: unset;
    }
}

@media only screen and (max-width : 1024px) and (min-width: 300px) {
    .condition {
        width: 6.9rem;

        .teach_condition {
            flex-direction: column;

            .text_description {
                width: 80%;
                margin: 0 0 .2rem 0;
            }

            .support_swiper {
                width: 100%;
            }
        }

        .condition_swiper .turn {
            display: block;

        }

    }

    .gallery-thumbs {
        display: none;
    }
}
</style>
