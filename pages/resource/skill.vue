<template>
<div class="skill_wrap">
    <div class="skill">
        <div class="banner">
            <img :src="banner_img" class="skill_banner" alt="技能实训">
            <div class="title">
                <h1 :class="[$store.state.$fontClass + '-max', 'one-ellipsis']">{{banner_title }}</h1>
                <div class="decoration"></div>
            </div>
        </div>
        <div class="summary">
            <div class="summary_text">
                <h2 :class="$store.state.$fontClass + '-title2'"><span></span>课程简介</h2>
                <p>{{ desc }}</p>
                <div class="point">
                    <div>
                        <mark>{{ direction }}</mark>
                        <p>个技能方向</p>
                    </div>
                    <div>
                        <mark>{{ knowledge }}</mark>
                        <p>个技能知识点</p>
                    </div>
                    <div>
                        <mark>{{ question }}</mark>
                        <p>套仿真实战题库</p>
                    </div>
                </div>
            </div>
            <img :src="desc_img.url" :alt="desc_img.alt">
        </div>
        <div class="pic_and_text">
            <img :src="mid_img_left" alt="'mid_img_left'">
            <div class="text" :style="{ backgroundImage: `url(${ mid_img_right })`}">
                <h2 :class="[$store.state.$fontClass + '-title2', 'many-ellipsis']">{{ mid_title }}</h2>
                <!--          <h2 :class="$store.state.$fontClass + '-title2'">与技能大赛完全一致的人机操作界面，学员更易熟悉比赛环境，快速掌握竞赛要求。</h2>-->
            </div>
        </div>
        <div class="pof_teach">
            <h1 :class="$store.state.$fontClass + '-max'">{{ '网络安全专家授课' }} </h1>
            <div class="rich_text" v-html="specialist"></div>
            <div class="decoration"></div>
        </div>
        <div class="can_do">
            <div class="bottom_background">
                <section v-for="(item, index) in list" :key="item.id">
                    <span class="icon_wrap">
                        <i :class="['iconfont', item.icon]"></i>
                    </span>
                    <h3 :class="$store.state.$fontClass + '-title-h3'">{{ item.title }}</h3>
                    <div class="many-ellipsis" v-html="item.desc"></div>
                    <div class="number">{{ '0' + (index + 1) }} </div>
                </section>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "resource-skill",
    async asyncData({
        $axios,
        env
    }) {
        const {
            data
        } = await $axios.get('/api/resource/skill');
        let {
            banner_img,
            banner_title,
            desc,
            desc_img,
            direction,
            home_bg,
            home_desc,
            home_icon,
            home_img,
            knowledge,
            list,
            mid_img_left,
            mid_img_right,
            mid_title,
            question,
            specialist
        } = data.result.data;
        console.log(banner_img)
        return {
            banner_img,
            banner_title,
            desc,
            desc_img,
            direction,
            home_bg,
            home_desc,
            home_icon,
            home_img,
            knowledge,
            list,
            mid_img_left,
            mid_img_right,
            mid_title,
            question,
            specialist
        }
    },
    data() {
        return {
            backgroundPic: require('~/static/images/test_bg_text.png')
        }
    },
}
</script>

<style lang="scss" scoped>
$contentWidth: 14.6rem;

.skill_wrap {
    padding-top: 1.1rem;
}

.icon_wrap {
    width: .7rem;
    height: .7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    i {
        color: #cb2525;
        width: auto;
        line-height: 1rem;
        font-size: 1rem !important;
    }

}

.skill {
    width: 14.6rem;
    background: #fff;
    padding: .26rem;
    margin: 0 auto;

    //margin-top: 1.1rem;
    .skill_banner {
        width: 100%;
        margin: 0 auto;
        display: block;
    }

    .banner {
        position: relative;

        .title {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);

            h1 {
                width: 100%;
                font-weight: bold;
                margin-bottom: .2rem;
                color: #cb2525;
                line-height: 1;
            }
        }
    }

    //课程简介
    .summary {
        width: 100%;
        display: flex;
        align-items: center;
        margin: 1rem 0;
        justify-content: space-between;
        flex-wrap: wrap;

        .summary_text {
            width: 4.76rem;

            h2 {
                display: flex;
                align-items: center;
                margin-bottom: .4rem;

                span {
                    width: 2px;
                    display: block;
                    height: .26rem;
                    margin-right: .14rem;
                    //background: red;
                    background: #cb2525;
                }
            }

            p {
                color: #666;
                margin-bottom: .8rem;
            }

            .point {
                display: flex;
                text-align: center;
                justify-content: space-between;

                mark {
                    background: none;
                    color: #cb2525;
                    font-weight: bolder;
                    font-size: .48rem;
                }
            }
        }

        img {
            width: 8.4rem;
        }
    }

    //  下方圖文
    .pic_and_text {
        display: flex;
        margin-bottom: 1.1rem;

        img {
            width: 6.04rem;
            height: 3.42rem;
        }

        .text {
            text-align: center;
            width: 8rem;
            height: 3.42rem;
            background-size: cover;
            background-position: center;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;

            h2 {
                font-weight: normal;
                width: 6.3rem;
                line-height: 1.4;
            }
        }
    }

    //教授授课
    .pof_teach {
        text-align: center;
        padding: 0 1rem;

        .rich_text {
            color: #666;
            margin: .32rem 0;
        }
    }

    .can_do {
        width: 100%;
        height: 3.08rem;
        background: url("~static/images/bottom_bg.png") no-repeat center;
        background-size: cover;
        margin-top: 2.38rem;
        position: relative;

        .bottom_background {
            display: flex;
            position: absolute;
            top: -1.47rem;
            width: 100%;
            justify-content: space-around;

            section {
                width: 3.2rem;
                height: 3.8rem;
                background: #fff;
                box-shadow: 0 -10px .3rem #f2efef;
                // padding: .6rem .6rem 0 .6rem;
                padding: .5rem .4rem 0 .4rem;
                text-align: center;
                position: relative;
                overflow: hidden;
                z-index: 3;

                h3 {
                    margin: .24rem 0;
                    // line-height: 1.2;
                }

                .many-ellipsis {
                    -webkit-line-clamp: 5;
                    color: #666;
                }

                .number {
                    position: absolute;
                    left: 50%;
                    font-weight: bold;
                    transform: translateX(-50%);
                    bottom: .2rem;
                    color: #efefef;
                    font-size: 2rem;
                    z-index: -1;
                }
            }
        }
    }
}

.decoration {
    width: .2rem;
    height: 3px;
    background: #cb2525;
    margin: 0 auto;
}

@media only screen and (max-width : 1024px) and (min-width: 300px) {
    .skill {
        width: 6.9rem;

        .title {
            width: 100%;
            text-align: center;

            h1 {
                width: 100%;
            }
        }

        .summary {
            .summary_text {
                width: 100%;
            }

            img {
                width: 100%;
            }
        }

        .pic_and_text {
            flex-wrap: wrap;
            justify-content: center;

            .text h2 {
                width: 5.3rem;
                // padding: .2rem 0;
            }

            img {
                width: 100%;
            }
        }

        .can_do {
            height: 14.5rem;

            .bottom_background {
                position: no-set;
                flex-wrap: wrap;

                section {
                    width: 100%;
                    margin-bottom: .2rem;

                    .many-ellipsis {
                        -webkit-line-clamp: 3;
                        color: #666;
                    }

                }
            }
        }
    }
}
</style>
