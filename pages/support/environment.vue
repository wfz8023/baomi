<template>
<div class="environment">
    <h1 :class="$store.state.$fontClass + '-title-h2'">{{ title }}</h1>
    <p class="summary">配有150间标准住宿环境，可支撑300名学员的住宿要求，并提供独立的学员就餐环境，构建一流的食宿环境。</p>
    <div class="decoration" />
    <section class="environment_swiper">
        <!-- <client-only> -->
        <swiper class="swiper environment_swiper_top" ref="envSwiperTop" :options="envSwiperOptionTop">
            <swiper-slide class="swiper-slide" v-for="(item, index) in environmentList" :key="index">
                <div class="condition_item">
                    <img :src="item.img.url" :alt="item.img.alt">
                </div>
            </swiper-slide>
            <div class="swiper-button-prev1 turn" slot="button-prev">
                <i class="iconfont icon-left-arrow" />
            </div>
            <div class="swiper-button-next1 turn" slot="button-next">
                <i class="iconfont icon-left-arrow" />
            </div>

        </swiper>
        <!-- </client-only> -->
         <client-only>
        <swiper class="swiper gallery-thumbs" v-swiper="envSwiperOptionThumbs" ref="envSwiperThumbs" :options="envSwiperOptionThumbs" v-if="environmentList.length < 4">
            <swiper-slide class="swiper-slide" v-for="(item, index) in environmentList" :key="index">
                <img :src="item.img.url" alt="">
            </swiper-slide>
            <div class="swiper-button-prev turn" slot="button-prev">
                <i class="iconfont icon-left-arrow" />
            </div>
            <div class="swiper-button-next turn" slot="button-next">
                <i class="iconfont icon-left-arrow" />
            </div>
        </swiper>
         </client-only>
    </section>
</div> <!-- swiper2 Thumbs 下方缩略图-->
</template>

<script>
import {
    Swiper,
    directive,
    SwiperSlide
} from 'vue-awesome-swiper'
export default {
    name: "support-environment",
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
        } = await $axios.get('/api/support/environment');
        const {
            seo_t,
            list,
            desc,
            keyword
        } = data.result.data;
        let environmentList = list;
        environmentList.map(item => {
            item.img.url = env.BASE_URL + item.img.url
            return item
        })
        // console.log('asyncData', environmentList)
        return {
            title: seo_t,
            desc,
            environmentList
        }
    },
    data() {
        return {
            envSwiperOptionTop: {
                loop: true,
                loopedSlides: 5,
                navigation: {
                    nextEl: '.swiper-button-next1',
                    prevEl: '.swiper-button-prev1'
                }

            },
            envSwiperOptionThumbs: {
                loop: true,
                loopedSlides: 5,
                slidesPerView: 3,
                // slidesPerGroup: 1,
                spaceBetween: 30,
                // touchRatio: 0.2,
                //点击切换
                slideToClickedSlide: true,
                centeredSlides: true,
                touchRatio: 0.2,
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
            const swiperTop = this.$refs.envSwiperTop.$swiper
            const swiperThumbs = this.$refs.envSwiperThumbs.$swiper

            swiperTop.controller.control = swiperThumbs
            swiperThumbs.controller.control = swiperTop
        })
    },
}
</script>

<style lang="scss" scoped>
$contentWidth: 14.6rem;

.environment {
    width: $contentWidth;
    margin: 0 auto;
    padding-top: 1.1rem;
    text-align: center;

    img {
        display: block;
        width: 100%;
    }

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

.environment_swiper {
    overflow: hidden;

    .environment_swiper_top {
        width: 100%;
        height: 5.82rem;
        margin: .54rem 0 .32rem 0;

        .turn {
            display: none;
            width: .34rem;
            height: .6rem;
            position: absolute;
            line-height: .6rem;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            z-index: 999;
            text-align: center;
            background: rgba(255, 0, 0, .6);
            color: #fff;
            font-weight: bold;
        }

        .swiper-button-next1 {
            right: 0;
            left: unset;
            transform: rotate(180deg);
        }

        // .swiper-button-next{

        // }
    }

    .gallery-thumbs {
        width: 100%;

        .swiper-slide {
            width: 4.64rem;
            height: 1.85rem;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .swiper-slide-active {
            border: .04rem solid #cb2525;
        }

        .turn {
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

        .swiper-button-next {
            right: 0;
            left: unset;
            transform: rotate(180deg);
        }
    }
}

@media only screen and (max-width : 1024px) and (min-width: 300px) {
    .environment {
        width: 6.9rem;

        .swiper-slide {
            width: 100%;
            height: fit-content;
        }

        .condition_item {
            width: 6.9rem;

            img {
                width: 100%;
                display: block;
            }
        }

        .environment_swiper1 {
            height: 100%;
        }
    }

    .environment_swiper {
        .environment_swiper_top {
            height: auto;
          .turn {
            display: block;
          }
        .swiper-button-next1{
          transform: rotate(180deg) translateY(.3rem);
        }
        }
    }

    .gallery-thumbs {
        display: none;
    }
}
</style>
