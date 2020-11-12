<template>
<section class="news">
    <div class="banner" :style="{ background: `url(${newsBanner}) no-repeat center`}">
        <div class="banner_text" v-if="$route.name !== 'news-detail-id'">
            <h1 :class="$store.state.$fontClass + '-banner-text'">资讯中心</h1>
            <div class="text_en flex_box">
                <img src="~static/images/banner_left.png" alt="">
                <p>News Center</p>
                <img src="~static/images/banner_right.png" alt="">
            </div>
        </div>
    </div>
    <div class="overview-nav">
        <section :class="['nav_wrap', $store.state.$fontClass + '-title-h3']">
            <nav>
                <li v-for="(item, index) in newsNavList" :key="item.id">
                    <nuxt-link :class="{'active-link': (!$route.params.id && index === 0) || ($route.params.id == item.id)}" :to="{name: 'news-id',params: { id: item.id }}">
                        {{ item.name }}
                    </nuxt-link>
                </li>
            </nav>
        </section>
        <nuxt-child></nuxt-child>
    </div>
</section>
</template>

<script>
import NewsItem from "@/components/NewsItem";
export default {
    name: "news",
    components: {
        NewsItem
    },
    async asyncData({
        $axios,
        env,
        params
    }) {
        const {
            data
        } = await $axios.get('/api/news/class');
        console.log(data)
        const {
            banner_img,
            banner_title_cn,
            banner_title_en
        } = data.result.index;
        const bannerImg = env.BASE_URL + banner_img.url;
        //新闻页导航列表
        const newsNavList = data.result.data;
        // 新闻列表    const newsList = await this.$axios.get(`/api/news/index/1?page=1&pszie=15`)

        // const newsListOption = await $axios.get(`/api/news/index/${newsNavList[0].id}?page=1&pszie=15`)

        // let newsList = newsListOption.data.result.data.data;

        // newsList.map(item => {
        //     item.picture = env.BASE_URL + item.picture;
        //     return item
        // })
        // //列表相关参数
        // const {
        //     total
        // } = newsListOption.data.result.data

        return {
            //banner
            bannerImg,
            // 中文标题
            banner_title_cn,
            // 英文标题
            banner_title_en,
            newsNavList,
            // total,
            // newsList
        }
    },
    head() {
        return {
            title: '新闻资讯',
        }
    },
    data() {
        return {
            newsBanner: require('~/static/images/overview_banner.png')
        }
    },
}
</script>

<style lang="scss" scoped>
.littleFont-banner-text {
    font-size: .4rem;
}

.news {
    padding-top: 1rem;
}

.banner {
    height: 4.84rem;
    position: relative;

    .banner_bg {
        width: 100%;
    }

    .banner_text {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-align: center;

        h1 {
            color: #fff;
            margin: .16rem;
        }

        .text_en {
            width: 100vw;
        }

        .text_en p {
            color: #e3dfdd;
            margin: 0 .14rem;
        }
    }
}

.overview-nav {
    .nav_wrap {
        position: relative;
        margin: 0 auto;
    }

    nav {
        $boxHeight: .74rem;
        $boxWidth: 2.23rem;
        $boxTop: -.37rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        line-height: $boxHeight;
        display: flex;

        li {
            margin-left: .4rem;
            box-shadow: 0 .3rem .3rem #f5f5f5;
            display: inline-block;

            a {
                border-right: 1px solid #ccc;
            }
        }

        li:last-of-type {
            a {
                border-right: 0;
            }
        }

        a {
            display: block;
            width: $boxWidth;
            height: $boxHeight;
            background: #fff;
            color: #333;
        }
    }

    .news_list {
        display: flex;
        width: 14.66rem;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 0 auto;
    }

    .pagination {
        width: 14.66rem;
        margin: 0 auto;
        padding: .86rem 0;

        // 修改element样式
        /deep/ .el-pagination {
            text-align: center;
            font-size: .16rem;
            margin: 0 auto;

            @mixin common() {
                height: .4rem;
                border: 1px solid #d1d1d1;
                line-height: .4rem;
                border-radius: 0;
                font-weight: normal;
                background: #fff;
            }

            .more {
                @include common;
                color: #666;
            }

            .more:hover {
                border: 1px solid #cb2525;
                color: #cb2525;
            }

            .el-pager .more::before {
                line-height: .4rem;
            }

            .number {
                @include common;
                color: #666;
                display: inline-flex;
                align-items: center;
                justify-content: center;
            }

            .number:hover {
                border: 1px solid #cb2525;
                color: #cb2525;
            }

            .active {
                background: #cb2525 !important;
                color: #fff !important;
                border: 0;
            }

            .btn-next,
            .btn-prev {
                //color: #666;
                min-width: .4rem;
                padding: 0 .1rem;
                overflow: hidden;
                @include common;

                span {
                    line-height: .4rem;
                    height: .4rem;
                }
            }
        }
    }

    .active-link {
        background: url("~static/images/overview_active.png") no-repeat center;
        background-size: cover;
        color: #fff;
    }
}

@media only screen and (max-width : 1024px) and (min-width: 300px) {
    .overview-nav {
        nav {
            // width: 90vw;
            justify-content: space-between;

            li {
                margin: 0;

                a {
                    border-left: 1px solid #333;
                }
            }

            li:nth-of-type(1) {
                a {
                    border-left: 0;
                }
            }
        }

        .news_list {
            width: 6.9rem;
            flex-wrap: wrap;
        }

        .pagination {
            width: 100%;

            .el-pagination {
                display: flex;
                justify-content: center;

                .number {
                    min-width: .2rem !important;
                    margin: 0 3px;
                }
            }
        }
    }
}
</style>
