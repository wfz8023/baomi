<template>
<section class="news_detail">
    <section class="context">
        <article>
            <div class="title">
                <h1 :class="[$store.state.$fontClass + '-title2', 'one-ellipsis']">
                    {{ title }}
                </h1>
                <div class="article_msg ">
                    <p>
                        <i :class="[$store.state.$fontClass + '-content', 'iconfont', 'icon-shijian']" />
                        <span>{{ timestampToTime(created_at) }}</span>
                    </p>
                </div>
            </div>
            <section class="content" v-html="content"></section>
        </article>
        <section class="turn_page">
            <nuxt-link v-if="last" :to="{name: 'teacher-info-id', params:{ id: last && last.id }}">
                <div class="turn_default">
                    <div>
                        <span>上一篇</span>
                        <i />
                        <p class="one-ellipsis">{{ last && last.title }}</p>
                    </div>
                    <img :src="last && last.img" alt="">
                </div>
            </nuxt-link>
            <div class="turn_default no_content" v-if="!last">
                <span>上一篇</span>
                <i />
                <p class="one-ellipsis">暂无内容</p>
            </div>
            <nuxt-link v-if="next" :to="{name: 'teacher-info-id', params:{ id: next && next.id }}">
                <div class="turn_next turn_default">
                    <div>
                        <span>下一篇</span>
                        <i />
                        <p class="one-ellipsis">{{ next && next.title }}</p>
                    </div>
                    <img :src="next && next.img" alt="">
                </div>
            </nuxt-link>
            <div class="turn_default no_content" v-if="!next">
                <span>下一篇</span>
                <i />
                <p class="one-ellipsis">暂无内容</p>
            </div>
        </section>
    </section>
</section>
</template>

<script>
export default {
    name: "teacher-info-id",
    scrollToTop: true,
    async asyncData({
        $axios,
        env,
        params
    }) {
        const {
            data
        } = await $axios.get(`/api/teachers/team/info/${params.id}`);
        const {
            author,
            content,
            created_at,
            read_num,
            title
        } = data.result.data[0];
      // console.log('teacher==>>>>', data.result.data[0])

        let {
            last,
            next
        } = data.result.page;
      // console.log(data.result.page)
        if (last) {
            last.img = env.BASE_URL + last.img;
        }
        if (next) {
            next.img = env.BASE_URL + next.img;
        }

        return {
            author,
            content,
            created_at,
            read_num,
            title,
            last,
            next
        }
    },
  methods:{
    timestampToTime(timestamp) {
      let date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      let Y = date.getFullYear() + '-';
      let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      let D = date.getDate() + ' ';
      let h = date.getHours() + ':';
      let m = date.getMinutes() + ':';
      let s = date.getSeconds();
      M = M < 10 ? '0' + M : M;
      D = D < 10 ? '0' + D : D;

      return Y + M + D;
    },
  }
}
</script>

<style lang="scss" scoped>
.news_detail {
    background: #eef1f4;
}

.banner {
    height: 4.84rem;
    position: relative;

    .banner_bg {
        width: 100%;
        display: block;
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

.context {
    $top: 1.92rem;
    position: relative;
    top: -$top;
    width: 14.6rem;
    margin: 0 auto;
    //padding: 0 1rem;
}

.no_content {
    cursor: not-allowed;

    p {
        width: 70%;
    }

    i {
        display: block;
        height: .24rem;
        width: 1px;
        background: #cbd0df;
        margin: 0 .16rem;
    }
}

article {
    $top: 1.92rem;
    //position: relative;
    //top: -$top;
    //width: 14.6rem;
    //margin: 0 auto;
    padding: 0 1rem .96rem 1rem;
    background: #fff;

    .title {
        padding: .7rem 0 .44rem 0;
        height: $top;
        border-bottom: 1px dashed #cbd0df;
        margin-bottom: .46rem;
    }

    .title .article_msg {
        color: #666;
        display: flex;
        margin-top: .3rem;

        p {
            margin-right: .5rem;
        }
    }

    .content {
        color: #666;
    }
}

.turn_page {
    width: 14.6rem;
    height: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: .4rem;

    .turn_default {
        background: #fff;
        width: 7.18rem;
        height: 1.4rem;
        display: flex;
        align-items: center;
        padding: 0 .26rem 0 .4rem;

        div {
            flex: 1;
            display: flex;
            align-items: center;

            p {
                width: 70%;
            }

            i {
                display: block;
                height: .24rem;
                width: 1px;
                background: #cbd0df;
                margin: 0 .16rem;
            }
        }
    }

    .turn_next {
        flex-direction: row-reverse;
        padding: 0 .4rem 0 .26rem;

        div {
            flex-direction: row-reverse;
        }
    }

    img {
        display: block;
        width: 2rem;
        height: .98rem;
    }
}

@media only screen and (max-width : 1024px) and (min-width: 300px) {
    .context {
        width: 100vw;

        article {
            padding: 0 .3rem;
            padding-bottom: .3rem;
        }

        .article_msg {
            p {
                margin: 0;
            }
        }
    }

    .turn_page {
        //display: f;
        flex-wrap: wrap;
        width: 100vw;
        margin: 0 auto;
        margin-top: .2rem;

        .turn_default {
            width: 100vw;
            margin-bottom: .2rem;
        }
    }
}
</style>
