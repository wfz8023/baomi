<template>
<section class="news">
    <div class="overview-nav">
        <section class="news_list">
            <NewsItem link_title="了解更多" :picPath="news.picture" v-for="news in newsList" :key="news.id" :title="news.title" :summary="news.abstract" :id="news.id" :active="true" @click="goNewsDetail" />
        </section>
        <section class="pagination">
            <el-pagination hide-on-single-page :class="$store.state.$fontClass + '-footer-text'" background :pager-count="5" @current-change="handleCurrentChange" :page-size="pszie" layout="prev, pager, next" :total="total" prev-text="上一页" next-text="下一页" />
        </section>
    </div>
</section>
</template>

<script>
import NewsItem from "@/components/NewsItem";
export default {
    name: "news-id",
    components: {
        NewsItem
    },
    scrollToTop: true,
    key(route) {
        return route.fullPath
    },
    async asyncData({
        $axios,
        env,
        params
    }) {
        const {
            data
        } = await $axios.get('/api/news/class');
        const {
            banner_img,
            banner_title_cn,
            banner_title_en
        } = data.result.index;
        const bannerImg = env.BASE_URL + banner_img.url;
        //新闻页导航列表
        const newsNavList = data.result.data;
        const id = params.id || newsNavList[0].id;

        // 每页页数
        const pszie = 6;
        const newsListOption = await $axios.get(`/api/news/index/${id}?page=1&pszie=${pszie}`)

        const {
            total
        } = newsListOption.data.result.data

        let newsList = newsListOption.data.result.data.data;
        // 页数 向上取整
        const page = Math.ceil(total / pszie);

        newsList && newsList.map(item => {
            item.picture = env.BASE_URL + item.picture;
            return item
        })

        console.log('新闻列表', newsList)
        return {
            //banner
            bannerImg,
            // 中文标题
            banner_title_cn,
            // 英文标题
            banner_title_en,
            newsNavList,
            // 新闻列表
            newsList,
            // 页数
            page,
            // 每页显示个数
            pszie,
            // 分类id
            id,
            total
        }
    },
    data() {
        return {
            newsBanner: require('~/static/images/overview_banner.png')
        }
    },
    created() {
        console.log('页数页数页数页数', this.page)
    },
    methods: {
        async handleCurrentChange(val) {
            const {
                $axios,
                pszie,
                id
            } = this;
            const {
                data
            } = await $axios.get(`/api/news/index/${id}?page=${val}&pszie=${pszie}`);
            this.newsList = data.result.data.data
        },
        goNewsDetail(id) {

        }
    }
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
        }

        li:nth-of-type(1) {
            box-shadow: 0 .3rem .3rem #fadada;
            margin-left: 0;

            a {
                background: url("~static/images/overview_active.png");
                color: #fff;
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
        //padding-top: 1.4rem;
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
        background: url("~static/images/overview_active.png");
        color: #fff;
    }
}

@media only screen and (max-width : 1024px) and (min-width: 300px) {
    .overview-nav {
        nav {
            width: 90vw;
            justify-content: space-between;

            li {
                margin: 0;
            }
        }

        .news_list {
            padding-top: 0;
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
