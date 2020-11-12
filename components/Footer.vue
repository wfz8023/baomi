<template>
<footer>
    <div class="link_wrap">
        <section class="link">
            <div class="about_us">
                <div :class="['contract', $store.state.$fontClass + '-footer-text']">
                    <img class="footer_logo" :src="topLogo" alt="浙江保密学院培训中心">
                    <p class="text">联系电话：{{ phone }}</p>
                    <p class="text">联系地址：{{ address }}</p>
                </div>
            </div>
            <div :class="['web_content', $store.state.$fontClass + '-footer-text']">
                <nav class='footer_nav'>
                    <li :class="['first_link', $store.state.$fontClass + '-content']">
                        <nuxt-link to="/overview">培训中心概况</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/overview">培训中心介绍</nuxt-link>
                    </li>
                </nav>
                <nav class="footer_nav">
                    <li :class="['first_link', $store.state.$fontClass + '-content']">
                        <nuxt-link to="/news">咨讯中心</nuxt-link>
                    </li>
                    <li v-for="item in $store.state.newsClassList" :key="item.id">
                        <nuxt-link :to="{name: 'news-id', params:{id: item.id}}">{{ item.name }}</nuxt-link>
                    </li>
                </nav>
                <nav class="footer_nav">
                    <li :class="['first_link', $store.state.$fontClass + '-content']">
                        <nuxt-link to="/">课程资源</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/resource/business">业务实训</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/resource/skill">技能实训</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/resource">精品讲座</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/resource/typical">典型班次</nuxt-link>
                    </li>
                </nav>
                <nav class="footer_nav">
                    <li :class="['first_link', $store.state.$fontClass + '-content']">
                        <nuxt-link to="/teacher">师资简介</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/teacher">专家风采</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/teacher/team">教学团队</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/teacher/recruitment">招贤纳士</nuxt-link>
                    </li>
                </nav>
                <nav class="footer_nav">
                    <li :class="['first_link', $store.state.$fontClass + '-content']">
                        <nuxt-link to="/support">教学支撑</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/support/condition">教学设施</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/support/environment">食宿</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/support/sports">运动设施</nuxt-link>
                    </li>
                </nav>
            </div>
        </section>
        <div class="frlink">
            <div class="title_text">
                <h2 :class="$store.state.$fontClass + '-title-h3'">相关链接</h2>
                <div class="decoration" />
            </div>
            <!-- <div class="lk" v-for="link in links" :key="link.id" :style="{backgroundImage: `url(${link.img})`}">
                    <a class="lk" :href="link.url"></a>
                </div> -->
            <!-- <div class="many_link"> -->
            <client-only>
                <swiper class="many_link" ref="linkSwiper" :options="swiperLinkOption">
                    <swiper-slide v-for="link in links" :key="link.id">
                        <section class="lk" :style="{ backgroundImage: `url(${link.img})` }">
                            <a class="lk" target="_blank" :style="{ cursor: link.url ? 'pointer' : 'default' }" :href="link.url"></a>
                        </section>
                    </swiper-slide>
                    <div class="swiper-button-prev turn" slot="button-prev">
                        <i class="iconfont icon-left-arrow"></i>
                    </div>
                    <div class="swiper-button-next turn" slot="button-next">
                        <i class="iconfont icon-left-arrow"></i>
                    </div>
                </swiper>
            </client-only>
            <!-- </div> -->
        </div>
    </div>
    <section class="copyright">
        <div class="content_wrap">
            <div class="copyright-" v-html="copyright"></div>
        </div>
    </section>
</footer>
</template>

<script>
import {
    Swiper,
    SwiperSlide,
    directive
} from 'vue-awesome-swiper'

export default {
    name: "Footer",
    props: [
        'address',
        'copyright',
        'links',
        'phone',
        'title',
        'topLogo'
    ],
    directives: {
        swiper: directive
    },
    data() {
        return {
            swiperLinkOption: {
                slidesPerView: 4,
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
        // console.log("footer==>>>>>>", this.links)
    }
}
</script>

<style lang="scss" scoped>
$width: 19.2rem;
$headerHeight: 1rem;

.decoration {
    width: .2rem;
    height: 2px;
    background: #cb2525;
    //margin: 0 auto;
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

.frlink {
    width: 14.6rem;
    padding: .42rem 0;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;

    .title_text {
        h2 {
            margin-bottom: .1rem;
        }
    }

    .many_link {
        // flex: 1;
        // display: flex;
        // flex-wrap: wrap;
        // margin-right: 10px;
        // justify-content: flex-end;
        min-height: .94rem;
        width: 13rem;
      padding: 0 .36rem;

        .lk {
            width: 2.76rem;
            height: .94rem;
            //background: #fff;
            background-size: 100% 100%;
            display: flex;
            align-items: center;
            // margin-left: .64rem;
        }
    }
}

footer {
    $contentWidth: 14.6rem;
    width: $width;
    color: #333;

    .link_wrap {
        background: url("~static/images/footer-bg.png") no-repeat;
        background-size: cover;
        width: $width;
    }

    .link {
        width: $contentWidth;
        margin: 0 auto;
        padding-top: .82rem;
        height: 3.56rem;
        display: flex;
        border-bottom: 1px solid #dfdfdf;
        justify-content: space-between;

        .about_us {
            display: flex;
            margin-left: .3rem;
        }

        .contract {
            margin-right: 1rem;

            //font-size: .14rem;
            .footer_logo {
                height: .7rem;
                margin-bottom: .2rem;
            }

            .text {
                color: #7e7e7e;
            }
        }

        .web_content {
            width: 9.6rem;
            display: flex;
            justify-content: space-between;

            nav {
                li {
                    margin-bottom: .2rem;

                    // cursor: pointer;
                    a {
                        color: #7e7e7e;
                    }
                }

                .first_link {
                    margin-bottom: .28rem;

                    a {
                        color: #333;
                    }
                }
            }
        }
    }

    .copyright {
        width: 100vw;
        color: #696969;
        text-align: center;
        font-size: .12rem;

        .content_wrap {
            width: 13.3rem;
            height: .62rem;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}

@media only screen and (max-width : 1024px) and (min-width: 300px) {
    $phoneWidth: 7.5rem;
    $phoneFontSize: .28rem;
    $contentWidth: 7.2rem;

    .frlink {
        width: $contentWidth;
        display: none;

        .title_text {
            margin-right: .2rem;
            // width: ;
        }

        .many_link {
            margin: 0;
            justify-content: space-between;
            width: 13rem;

            .lk {
                margin: 0 0 .1rem 0;
            }
        }
    }

    //底部
    footer {
        width: $phoneWidth;
        height: auto;

        .link_wrap {
            width: $phoneWidth;
        }

        .link {
            width: $phoneWidth;
            height: auto;
            flex-direction: column;

            .about_us {
                justify-content: space-between;
                margin-bottom: .2rem;
                // margin: 0 auto;

                .contract {
                    margin-right: 0;

                    img {
                        display: block;
                        // margin: 0 auto;
                    }

                    .text {
                        margin: .1rem 0;
                    }
                }
            }

            .web_content {
                width: 7.2rem;
                padding-top: .2rem;
                margin: 0 auto;
                display: none;
            }

            .content_wrap {
                height: auto;
            }
        }

        .copyright {
            width: $phoneWidth;
            height: auto;
            padding: .3rem 0;

            .content_wrap {
                width: $contentWidth;
                height: auto;
                flex-direction: column;
                text-align: center;

                p:nth-of-type(2) {
                    margin-top: .3rem;
                }
            }
        }
    }
}
</style>
