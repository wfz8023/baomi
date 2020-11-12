<template>
<div class="business_wrap">
    <div class="business">
        <div class="banner">
            <img :src="banner" class="skill_banner" alt="">
            <div class="title">
                <h1 :class="$store.state.$fontClass + '-max'">{{ title }}</h1>
                <div class="decoration"></div>
            </div>
        </div>
        <article>
            <!--  -->
            <div class="summary_text">
                <h2 :class="$store.state.$fontClass + '-title2'"><span></span>课程简介</h2>
            </div>
            <div class="edit_content" v-html="desc"></div>
            <div class="summary_text">
                <h2 :class="$store.state.$fontClass + '-title2'"><span></span>课程框架</h2>
            </div>
            <div class="kuangjia" v-html="img"></div>
        </article>
    </div>
</div>
</template>

<script>
export default {
    name: "resource-business",
    async asyncData({
        $axios,
        env
    }) {
        const {
            data
        } = await $axios.get('/api/resource/business');
        console.log(data)
        const {
            banner,
            desc,
            home_bg,
            home_desc,
            home_icon,
            title,
            img
        } = data.result.data
        return {
            banner,
            desc,
            home_bg,
            home_desc,
            home_icon,
            title,
            img
        }
    },
    async created() {
        const {
            data
        } = await this.$axios.get('/api/resource/business');
        console.log(data)
    }
}
</script>

<style lang="scss" scoped>
$contentWidth: 14.6rem;

.business_wrap {
    padding-top: 1.1rem;
}

.summary_text {
    width: 4.76rem;

    h2 {
        display: flex;
        align-items: center;
        margin-bottom: .4rem;
    }

    span {
        width: 2px;
        display: block;
        height: .26rem;
        margin-right: .14rem;
        //background: red;
        background: #cb2525;
    }

}

.edit_content {
    color: #666;

    img {
        max-width: 100%;
    }
}

.business {
    width: 14.6rem;
    background: #fff;
    padding: .26rem;
    margin: 0 auto;

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
            }
        }
    }

    article {
        padding-top: .6rem;

        .kuangjia {
            width: 100%;
            display: flex;

            /deep/ img {
                color: #666;
                width: 100%;
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
    .business {
        width: 6.9rem;

        .title {
            width: 100%;
            text-align: center;
        }
    }
}
</style>
