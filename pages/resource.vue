<template>
<div class="resource">
    <page-nav :nav-list="resourceLinkNav" :background="$route.name === 'resource-skill' || $route.name === 'resource-business'" :params="$route.params" :en-title="enTittle" :title="cnTittle" :background-path="bannerImg"></page-nav>
</div>
</template>

<script>
import PageNav from "@/components/PageNav";
export default {
    name: "resource",
    components: {
        PageNav
    },
    async asyncData({
        $axios,
        env
    }) {
        const {
            data
        } = await $axios.get('/api/resource/chair/class');
        const {
            banner_img,
            banner_title_cn,
            banner_title_en
        } = data.result.index;

        return {
            bannerImg: env.BASE_URL + banner_img.url,
            cnTittle: banner_title_cn,
            enTittle: banner_title_en,
        }
    },
    data() {
        return {
            resourceLinkNav: [{
                    name: '精品讲座',
                    childName: 'resource'
                },
                {
                    name: '典型班次',
                    childName: 'resource-typical'
                },
                {
                    name: '技能实训',
                    childName: 'resource-skill'
                },
                {
                    name: '业务实训',
                    childName: 'resource-business'
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
$contentWidth: 14.6rem;

.support {
    overflow: hidden;
}

.banner {
    height: 4.84rem;
    margin-top: 1rem;
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

        .text_en p {
            color: #e3dfdd;
            margin: 0 .14rem;
        }
    }
}

.nav_wrap {
    position: relative;
    margin: 0 auto;
}

nav {
    $boxHeight: .74rem;
    $boxWidth: 2.23rem;
    $boxTop: -.37rem;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    line-height: $boxHeight;

    li {
        margin-left: .4rem;
        display: inline-block;

        a {
            box-shadow: 0 .3rem .3rem #f5f5f5;
        }

        //激活后
        .active {
            background: url("~static/images/overview_active.png");
            box-shadow: 0 .3rem .3rem #fadada;
            color: #fff;
        }
    }

    li:nth-of-type(1) {
        margin-left: 0;
    }

    a {
        display: block;
        width: $boxWidth;
        height: $boxHeight;
        background: #fff;
        color: #333;
    }
}

.teacher {
    position: relative;
    width: 100vw;
    margin: 0 auto;
    padding-bottom: 1.1rem;
}
</style>
