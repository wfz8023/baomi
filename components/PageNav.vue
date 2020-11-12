<template>
<div class="banner_wrap">
    <div class="banner" :style="{ backgroundImage: `url(${ backgroundPath })`}">
        <div class="banner_text" v-if="$route.name !== 'resource-lecture-id' && $route.name !== 'teacher-info-id' && $route.name !== 'resource-classes-id'">
            <h1 :class="$store.state.$fontClass + '-banner-text'">{{ title || '课程资源' }}</h1>
            <div class="text_en flex_box">
                <img src="~static/images/banner_left.png" alt="">
                <p>{{ enTitle || 'Course Resources' }}</p>
                <img src="~static/images/banner_right.png" alt="">
            </div>
        </div>
    </div>
    <div :class="['pages', { 'pages_background' : background}]">
        <section v-if="$route.name !== 'teacher-info-id' && $route.name !== 'resource-lecture-id'" :class="['nav_wrap', $store.state.$fontClass + '-title-h3']">
            <nav>
                <li v-for="link in navList" :key="link.name">
                    <nuxt-link exact-active-class="active" :to="{ name: link.childName}">
                        {{ link.name }}
                    </nuxt-link>
                </li>
            </nav>
        </section>
        <nuxt-child></nuxt-child>
    </div>
</div>
</template>

<script>
export default {
    name: "page-nav",
    props: [
        'backgroundPath',
        'title',
        'enTitle',
        'navList',
        'background',
        'isShowNav'
    ],
    data() {
        return {
            pageNavBanner: require('~/static/images/overview_banner.png')
        }
    },
    created() {
        // console.log(this.$route.name)
    }
}
</script>

<style lang="scss" scoped>
$contentWidth: 14.6rem;

.banner_wrap {
    overflow: hidden;
}

.pages_background {
    background: #eef1f4;
}

.banner {
    height: 4.84rem;
    min-width: 100vw;
    margin-top: 1rem;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

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
            color: #fff;
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

.pages {
    position: relative;
    width: 100vw;
    margin: 0 auto;
    padding-bottom: 1.1rem;
    background: #eef1f4;
}

@media only screen and (max-width : 1024px) and (min-width: 300px) {
    .banner {
        .banner_text {
            .text_en {
                width: 100vw;
            }
        }
    }

    nav {
        // width: 100vw;
        display: flex;
        justify-content: center;

        li {
            margin: 0;

            a {
                width: 1.6rem;
                border-right: 1px solid #333;
            }
        }

        li:last-of-type {
            a {
                border-right: 0;
            }
        }

        // li:last-of-type(4) {
        //     a {
        //         border-right: 0;
        //     }
        // }
    }
}

/*
    .text_en{
      width: 100vw;
    }*/
</style>
