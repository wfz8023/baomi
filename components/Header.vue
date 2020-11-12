<template>
<!--    头部-->
<header :class="{'background': routePath !== 'index'}">
    <a href="/">
        <!--      <img :src="routePath !== 'index'? require('~/static/images/logo.png') : require('~/static/images/index_logo.png')" alt="" class="logo">-->
        <img :src="routePath !== 'index'? otherLogo : topLogo" alt="" class="logo">
    </a>
    <i :class="['iconfont',  'menu', isShowMenu ? 'icon-cuohao' : 'icon-caidan' ]" :style="{ 'color': routePath !== 'index' ? '#003a8f' : '#fff' }" @click="showPhoneMenu"></i>
    <nav :class="{'menu_active': isShowMenu}">
        <li v-for="(item, index) in navList" :key="index" @click="showPhoneMenu">
            <nuxt-link :class="{ 'active' : item.link !== '/' && $route.path.indexOf(item.link) > -1 }" :to="item.link">
                {{ item.name }}
            </nuxt-link>
        </li>
        <li>
            <i @click="showSearch(true)" :style="{color: routePath !== 'index' ? '#333' : '#fff'}" class="iconfont icon-search"></i>
        </li>
    </nav>
    <section :class="['search_wrap', { 'search_show': isShowSearch}]">
        <button class="close" @click="showSearch(false)">
            <i class="iconfont icon-cuohao" />
        </button>
        <div class="search_content">
            <input type="text" autocomplete="off" v-model="searchVal" placeholder="请输入搜索内容">
            <button class="search_btn" @click="goSearch">
                <i class="iconfont icon-search" />
            </button>
        </div>
    </section>
</header>
</template>

<script>
export default {
    name: "Header",
    props: [
        'navList',
        'topLogo',
        'otherLogo'
    ],
    data() {
        return {
            isShowMenu: false,
            headerBackground: this.routePath !== 'index',
            routePath: this.$route.name,
            searchVal: '',
            isShowSearch: false
        }
    },
    created() {
        console.log('topLogo', this.topLogo, 'otherLogo', this.otherLogo)
    },
    watch: {
        $route() {
            this.routePath = this.$route.name;
        }
    },
    methods: {
        //关闭手机端菜单
        showPhoneMenu() {
            this.isShowMenu = !this.isShowMenu
        },
        // 显示搜索
        showSearch(flag) {
            console.log('showSearch', flag)
            this.isShowSearch = flag
            console.log(this.isShowSearch)
        },
        // 搜索
        goSearch() {
            if (!this.searchVal) {
                return
            }
            console.log(11111111)
            window.location.href = `/search/${this.searchVal}`
        }
    }
}
</script>

<style lang="scss" scoped>
$width: 19.2rem;
$headerHeight: 1rem;

.search_wrap {
    width: 0;
    height: 100vh;
    overflow: hidden;
    position: fixed;
    right: 0;
    top: 0;
    // right: -1rem;
    z-index: 9999999999;
    background: #000;
    opacity: .9;
    transition: all 500ms ease-in-out;

    .close {
        width: 64px;
        height: 64px;
        position: absolute;
        right: 0;
        top: 0;
        background: none;
        outline: none;
        border: 0;

        i {
            font-size: .5rem !important;
            color: #fff;
        }
    }

    .search_content {
        width: 70%;
        height: .8rem;
        border-bottom: 1px solid #333;
        position: absolute;
        left: 15%;
        top: 50%;
        margin-top: -.4rem;

        input {
            width: 100%;
            height: 100%;
            background: none;
            padding-right: 80px;
            outline: none;
            font-size: 32px;
            color: #fff;
            border: 0;
        }

        input::placeholder {
            color: #fff;
        }

        .search_btn {
            width: .8rem;
            height: .8rem;
            position: absolute;
            right: 0;
            top: 0;
            background: none;
            outline: none;
            border: 0;
            display: flex;
            align-items: center;

            i {
                font-size: .6rem !important;
                color: #fff;
            }
        }
    }
}

.search_show {
    width: 100vw;
    // right: 0;
}

.active {
    color: #cb2525 !important;
}

.index_active {
    color: #fff !important;
}

.background {
    background: #fff;

    nav {
        li {
            a {
                color: #666;
            }
        }
    }
}

header {
    position: fixed;
    display: flex;
    justify-content: space-between;
    width: $width;
    padding: 0 2.2rem 0 2.3rem;
    text-align: center;
    align-items: center;
    background: url("~static/images/header_bg.png") no-repeat;
    background-size: cover;
    z-index: 99999999;

    .logo {
        height: 0.64rem;
    }

    nav {
        display: inline-flex;
        transition: all 500ms ease-in-out;

        li {
            margin-left: 0.8rem;
            height: $headerHeight;

            a {
                display: block;
                height: $headerHeight;
                width: 100%;
                line-height: $headerHeight;
                color: #fff;
            }

            i {
                color: #fff;
                font-size: .3rem !important;
                line-height: 1.02rem;
            }
        }
    }

    .menu {
        color: #fff;
        display: none;
        font-size: .4rem !important;
        line-height: $headerHeight;
    }
}

@media only screen and (max-width : 1024px) and (min-width: 300px) {
    $phoneWidth: 7.5rem;
    $phoneFontSize: .28rem;

    //.container {
    //  width: $phoneWidth;
    //头部
    header {
        width: $phoneWidth;
        padding: 0 .4rem;

        .menu_active {
            left: 0;
            opacity: 1;
        }

        nav {
            position: fixed;
            opacity: 0;
            flex-direction: column;
            width: 100%;
            left: $phoneWidth;
            top: $headerHeight;
            height: calc(100vh - 1rem);
            z-index: 999;
            background: #fff;
            font-size: $phoneFontSize;

            li {
                a {
                    color: #333;
                    text-align: left;
                }
            }
        }

        .menu {
            display: block;
            line-height: 1.1rem;
        }

        .icon-search {
            display: none;
        }
    }

    //}
}
</style>
