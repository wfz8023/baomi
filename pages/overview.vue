<template>
<div class="overview">
    <div class="banner" :style="{ backgroundImage: `url(${topBanner})` }">
        <div class="banner_text">
            <h1 :class="$store.state.$fontClass + '-banner-text'">{{cnTitle}}</h1>
            <div class="text_en flex_box">
                <img src="~static/images/banner_left.png" alt="">
                <p>{{ enTitle }}</p>
                <img src="~static/images/banner_right.png" alt="">
            </div>
        </div>
    </div>
    <section class="center_summary">
        <div class="summary">
            <h1 :class="$store.state.$fontClass + '-title-h2'">{{ home_title || '中心简介' }}</h1>
            <section v-html="introduction">
            </section>
        </div>
        <img src="~static/images/overview_test.png" alt="">
    </section>
    <div class="mission_wrap" :style="{ backgroundImage: `url(${mission_pic})` }">
        <div class="context">
            <h1>我们的使命</h1>
            <div class="many-ellipsis mission_class" v-html="mission"></div>
        </div>
    </div>
    <div class="odds">
        <h1 :class="$store.state.$fontClass + '-title-h2'">我们的优势</h1>
        <div :class="['example']">
            <div class="case active" v-for="(item, index) in advantage" :key="index">
                <i :class="['iconfont', item.icon]" />
                <h2 :class="$store.state.$fontClass + '-title-h3'">{{ item.title }}</h2>
                <div class="advance_content" v-html="item.content">
                </div>
            </div>
        </div>
    </div>
    <div class="agency_setting">
        <h1 :class="$store.state.$fontClass + '-title-h2'">机构设置</h1>
        <div class="setting_wrap">
            <aside>
                <div class="agency">
                    <h2 :class="[$store.state.$fontClass + '-title-h3', 'one-ellipsis']">{{ organization.first_title }}</h2>
                    <div class="text" v-html="organization.committee">
                        <!-- {{organization.committee}} -->
                    </div>
                </div>
                <div class="agency">
                    <div class="dashed"></div>
                    <h2 :class="[$store.state.$fontClass + '-title-h3', 'one-ellipsis']">{{ organization.second_title }}</h2>
                    <div class="text" v-html="organization.director">
                        <!-- {{organization.director}} -->
                    </div>
                    <div class="dashed"></div>
                </div>
                <div class="agency">
                    <h2 :class="[$store.state.$fontClass + '-title-h3', 'one-ellipsis']">{{ organization.third_title }}</h2>
                    <div class="text" v-html="organization.department">
                        <!-- {{organization.department}} -->
                    </div>
                </div>
            </aside>
            <img :src="organization.mechanism_pic" alt="">
        </div>
    </div>
    <div class="concat_wrap">
        <div class="concat">
            <h1 :class="$store.state.$fontClass + '-title-h2'">联系方式</h1>

            <div class="branch_concat">
                <div class="item" v-for="(item, index) in contact" :key="index">
                    <h2 :class="$store.state.$fontClass + '-title-h3'">{{ item.title }}</h2>
                    <p>联系电话：{{ item.phone }} </p>
                    <p>电子邮箱：{{ item.email }} </p>
                </div>
                <!--
          <div class="item">
            <h2 :class="[$store.state.$fontClass + '-title-h3', 'one-ellipsis']">管委会</h2>
            <p>联系电话：(0571)86915114 </p>
            <p>电子邮箱：baomi@baomi.com  </p>
          </div>
          <div class="item">
            <h2 :class="[$store.state.$fontClass + '-title-h3', 'one-ellipsis']">管委会</h2>
            <p>联系电话：(0571)86915114 </p>
            <p>电子邮箱：baomi@baomi.com  </p>
          </div>
          <div class="item">
            <h2 :class="[$store.state.$fontClass + '-title-h3', 'one-ellipsis']">管委会</h2>
            <p>联系电话：(0571)86915114 </p>
            <p>电子邮箱：baomi@baomi.com  </p>
          </div>
          <div class="item">
            <h2 :class="[$store.state.$fontClass + '-title-h3', 'one-ellipsis']">管委会</h2>
            <p>联系电话：(0571)86915114 </p>
            <p>电子邮箱：baomi@baomi.com  </p>
          </div>
          <div class="item">
            <h2 :class="[$store.state.$fontClass + '-title-h3', 'one-ellipsis']">管委会</h2>
            <p>联系电话：(0571)86915114 </p>
            <p>电子邮箱：baomi@baomi.com  </p>
          </div>
-->
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "overview",
    async asyncData({
        $axios,
        env
    }) {
        const {
            data
        } = await $axios.get('/api/situation');
        const {
            top_titile_en,
            top_title_cn,
            top_pic,
            introduction,
            home_title,
            mission_pic,
            mission
        } = data.result.index;

        const {
            advantage,
            contact,
            organization
        } = data.result;
        console.log('概况中信===>?>>>>>>>>>>', data.result)
        return {
            // 顶部banner
            topBanner: env.BASE_URL + top_pic.url,
            // 顶部英文标题
            enTitle: top_titile_en,
            //  顶部中文
            cnTitle: top_title_cn,
            //  中心简介内容
            introduction,
            //  中心简介标题
            home_title,
            //我的使命背景图
            mission_pic: env.BASE_URL + mission_pic,
            //  我的使命 文本
            mission,
            //  我们的优势
            advantage,
            //   联系我们电列表
            contact,
            //  组织架构
            organization
        }
    },
    data() {
        return {
            banner: require('~/static/images/overview_banner.png'),
            missionBg: require('~/static/images/mission.png')
        }
    },
    // async created() {
    //   const { data } = await this.$axios.get('/api/situation');
    //   console.log('created=?????????', data)
    // }
}
</script>

<style lang="scss" scoped>
.overview {
    overflow: hidden;
}

.banner {
    height: 4.84rem;
    position: relative;
    margin-top: 1rem;
    background-position: center;
    background-size: cover;

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

        .text_en p {
            color: #e3dfdd;
            margin: 0 .14rem;
        }
    }
}

.center_summary {
    display: flex;

    .summary {
        flex: 1;
        flex-direction: column;
        display: flex;
        justify-content: center;
        padding-left: 2.3rem;
        padding-right: .56rem;
        background: #fff;

        h1 {
            font-weight: normal;
            line-height: 1;
            margin-bottom: .56rem;
        }

        section {
            color: #666666;
        }
    }

    img {
        width: 9.48rem;
        height: 6.32rem;
    }
}

.mission_wrap {
    position: relative;
    text-align: center;
    padding: .3rem;
    height: 4.72rem;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    .mission {
        width: 100vw;
        display: block;
    }

    .context {
        width: 10.68rem;
        // position: absolute;
        // left: 50%;
        // top: 50%;
        // transform: translate(-50%, -50%);

        .mission_class {
            color: #d9e6f3;
            margin-top: .5rem;
            -webkit-line-clamp: 6;
        }
    }
}

.odds {
    width: 14.6rem;
    padding-bottom: 1.48rem;
    margin: 0 auto;
    text-align: center;

    .example {
        width: 14.6rem;
        height: 5.27rem;
        text-align: center;
        display: flex;
        justify-content: space-around;

        .case {
            border: 1px solid #d1d1d1;
            width: 2.73rem;
            height: 5.27rem;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            transition: all 500ms ease-in-out;
            overflow: hidden;

            i {
                display: flex;
                // width: .5rem;
                // height: .56rem;
                font-size: .8rem !important;
                margin-bottom: .3rem;
                color: #cb2525;
            }

            h2 {
                padding: 0 .4rem;
                font-weight: normal;
                margin-bottom: .26rem;
            }

            /deep/ .advance_content {
                padding: 0 .2rem;
                color: #ffd8d8;
                width: 80%;
                max-height: 0;
                display: flex;
                word-break: break-word;
                opacity: 0;
                transition: all 500ms ease-in-out;
            }
        }

        .case:hover {
            background: url("~static/images/example_bg.png") no-repeat center;
            background-size: cover;
            border: 0;

            h2 {
                color: #fff;
                font-weight: bold;
            }

            i {
                color: #fff;
            }

            .advance_content {
                opacity: 1;
                max-height: 2.3rem;
            }
        }
    }

    h1 {
        font-weight: normal;
        margin: 1.06rem 0 .7rem 0;
    }

    .active {
        h2 {}
    }
}

.agency_setting {
    padding: 1.2rem 0 1.28rem 0;
    background: url("~static/images/agency_bg.png") no-repeat;
    background-size: cover;

    .dashed {
        border-top: 1px dashed #d1d1d1;
        width: 14.6rem;
        position: absolute;
        bottom: 0;
        left: 0;
    }

    .dashed:nth-of-type(2) {
        border-top: 1px dashed #d1d1d1;
        width: 14.6rem;
        position: absolute;
        top: 0;
        left: 0;
    }

    h1 {
        font-weight: normal;
        text-align: center;
        margin-bottom: 1rem;
    }

    .setting_wrap {
        width: 14.6rem;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .agency {
            position: relative;
            width: 5.7rem;

            h2 {
                margin-bottom: .3rem;
            }

            .text {
                color: #666;
            }
        }

        .agency:nth-of-type(1) {
            padding-bottom: .54rem;
        }

        .agency:nth-of-type(2) {
            padding: .64rem 0;
        }

        .agency:nth-of-type(3) {
            padding-top: .4rem;
        }

        img {
            max-width: 7.2rem;
            max-height: 6.13rem;
            position: relative;
            z-index: 1;
        }
    }
}

.concat_wrap {
    height: 6.8rem;
    background: url("~static/images/concat.png") no-repeat center center;
    background-size: cover;

    .concat {
        width: 14.6rem;
        margin: 0 auto;
        overflow: hidden;

        h1 {
            font-weight: normal;
            text-align: center;
            margin: 1.06rem 0;
        }

        .branch_concat {
            display: flex;
            flex-wrap: wrap;
            //justify-content: space-between;
            margin-bottom: .8rem;

            .item {
                margin-bottom: .6rem;
                width: 25%;
            }

            h2 {
                line-height: .64rem;
            }

            p {
                line-height: .4rem;
            }
        }
    }
}

@media only screen and (max-width : 1024px) and (min-width: 300px) {
    .banner {
        .banner_text {
            .text_en {
                width: 100vw;
            }
        }
    }

    .center_summary {
        flex-wrap: wrap;
        flex-direction: column-reverse;
        text-align: center;
        margin-top: .4rem;

        .summary {
            padding: .4rem .3rem;
        }

        img {
            width: 6.9rem;
            height: auto;
            margin: 0 auto;
        }
    }

    .mission_wrap {
        position: relative;
        // text-align: center;
        padding: .3rem;
        height: auto;
        // color: #fff;

        .mission {
            width: 100vw;
            display: block;
        }

        .context {
            width: 86%;

            .many-ellipsis {
                -webkit-line-clamp: 100
            }
        }

    }

    .odds {
        width: 100vw;

        .example {
            width: 6.9rem;
            flex-wrap: wrap;
            height: auto;
            margin: 0 auto;
            justify-content: space-around;

            .case {
                width: 100%;
                margin-bottom: .3rem;

            }

            .case {
                background: url("~static/images/example_bg.png") no-repeat center;
                background-size: cover;
                border: 0;

                h2 {
                    color: #fff;
                    font-weight: bold;
                }

                i {
                    color: #fff;
                    font-size: .9rem !important;
                }

                .advance_content {
                    opacity: 1;
                    max-height: 2.3rem;
                }
            }
        }
    }

    .agency_setting {
        .setting_wrap {
            width: 6.9rem;
            flex-wrap: wrap;
            flex-direction: column-reverse;
            text-align: center;

            aside {
                padding-top: .2rem;
                border-top: 1px dashed #ccc;
            }

            img {
                margin-bottom: .3rem;
            }
        }
    }

    .concat_wrap {
        height: auto;

        .concat {
            width: 100%;

            .branch_concat {
                text-align: center;
                flex-wrap: wrap;

                .item {
                    width: 100%;

                    h2 {
                        width: 80%;
                        margin: 0 auto;
                    }

                    p {
                        width: 60%;
                        margin: 0 auto;
                        text-align: left;
                    }
                }
            }
        }
    }
}
</style>
