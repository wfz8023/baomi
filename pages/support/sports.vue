<template>
<div class="sports">
    <h1 :class="$store.state.$fontClass + '-title-h2'">{{ sportSeo.seo_t || '体育运动'}}</h1>
    <p class="summary">{{ sportSeo.desc || '培训校区有足球场、篮球场、羽毛球场、乒乓球室等，为学员在学习之余提供了丰富的运动环境和条件。' }}</p>
    <div class="decoration"></div>
    <section class="site_wrap">
        <div class="site" v-for="item in sportsSwiperList" :key="item.id">
            <h2 :class="$store.state.$fontClass + '-title2'">{{ item.title }}</h2>
            <div class="decoration"></div>
            <swiper class="site_swiper" :options="siteSwiperOption">
                <swiper-slide class="swiper-slide" v-for="swiper in item.children" :key="swiper.id">
                    <section class="img_wrap">
                        <img :src="swiper.img" :alt="swiper.img">
                        <div class="desc_wrap">
                            <div class="desc">
                                <h2>{{ swiper.name }}</h2>
                                <p class="many-ellipsis">
                                    {{ swiper.desc }}
                                </p>
                            </div>
                        </div>
                    </section>
                </swiper-slide>
                <div v-if="item.children.length > 1" class="swiper-button-prev turn" slot="button-prev">
                    <i class="iconfont icon-left-arrow"></i>
                </div>
                <div v-if="item.children.length > 1" class="swiper-button-next turn" slot="button-next">
                    <i class="iconfont icon-left-arrow"></i>
                </div>
            </swiper>
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
    name: "sports",
    components: {
        Swiper,
        SwiperSlide,
        directive
    },
    async asyncData({
        $axios,
        env
    }) {
        //获取体育运动数据
        const {
            data
        } = await $axios.get('/api/support/sport');
        const {
            code,
            msg,
            result
        } = data;
        // console.log(data)
        const bannerImg = result.index.banner_img;
        const banner_title_cn = result.index.banner_title_cn;
        const banner_title_en = result.index.banner_title_en;
        let sportsSwiperList = result.data.list;
        const sportSeo = result.data.seo
        //数组存在时进行 数组操作 显示对应服务上的图片
        // sportsSwiperList.forEach(item => {
        //     item.children && item.children.map(child => {
        //         child.img.url = child.img ? env.BASE_URL + child.img.url : child.img.url
        //         return child
        //     })
        // })
        // console.log('sportsSwiperList', sportsSwiperList)

        return {
            bannerImg,
            banner_title_cn,
            banner_title_en,
            sportsSwiperList,
            sportSeo
        }
    },
    data() {
        return {
            siteSwiperOption: {
                // loop: true,
                spaceBetween: 30,
                touchRatio: 0.2,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
        }
    },
    created() {
        // this.$axios.get('/api/support/sport').then( res =>{
        //   console.log(res)
        // })
    }
}
</script>

<style lang="scss" scoped>
$contentWidth: 14.6rem;

.sports {
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
    .site_wrap {
        padding-top: .8rem;
        text-align: center;
        display: flex;
        justify-content: space-between;
        position: relative;
        flex-wrap: wrap;

        .site {
            width: 7.2rem;
            margin-bottom: .84rem;

            img {
                width: 100%;
                height: 4.24rem;
                display: block;
            }

            h2 {
                margin-bottom: .24rem;
            }

            .site_swiper {
                margin-top: .3rem;

                section {
                    width: 100%;
                    height: 4.24rem;
                    position: relative;

                    img {
                        width: 100%;
                        height: 100%;
                        display: block;
                        transition: all 500ms ease-in-out;
                    }

                    .desc_wrap {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        width: 0;
                        height: 0;
                        background: #0004;
                        color: #fff;
                        opacity: 0;
                        transition: all 500ms ease-in-out;
                    }

                    .desc {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);

                        p {
                            -webkit-line-clamp: 8
                        }
                    }
                }
            }

            .img_wrap:hover {
                .desc_wrap {
                    opacity: 1;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}

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
}

.swiper-button-prev {
    top: 50%;
    left: 0;
    transform: translateY(-50%);
}

.swiper-button-next {
    right: 0;
    bottom: 50%;
    transform: rotate(180deg) translateY(-50%);
}

@media only screen and (max-width : 1024px) and (min-width: 300px) {
    .sports {
        width: 6.9rem;

        .site_wrap {
            .site {
                width: 100%;
            }
        }
    }
}
</style>
