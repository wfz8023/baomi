<template>
<div :class="$store.state.$fontClass + '-content'" @contextmenu.prevent>
    <Header :nav-list="navList" :top-logo="homeLogo" :other-logo="otherLogo" />
    <Nuxt />
    <!-- <loading v-show="first"></loading> -->
    <Footer v-show="$route.path != '/404.html'" :top-logo="otherLogo" :address="config.address" :copyright="config.copyright" :links="config.links" :phone="config.phone" :title="config.title" />
</div>
</template>

<script>
// import loading from "@/components/loading"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
    loading: false,
    components: {
        Header,
        Footer,
    },
    data() {
        return {
            navList: [{
                    name: '首页',
                    link: '/'
                },
                {
                    name: '培训中心概况',
                    link: '/overview'
                },
                {
                    name: '咨讯中心',
                    link: '/news'
                },
                {
                    name: '师资队伍',
                    link: '/teacher'
                },
                {
                    name: '课程资源',
                    link: '/resource'
                },
                {
                    name: '教学支撑',
                    link: '/support'
                },
            ],
            config: {},
            first: false,
            homeLogo: '',
            otherLogo: ''
        }
    },
    head() {
        return {
            // title: '保密学院',
            // meta: [{
            //     hid: 'description',
            //     name: 'description',
            //     content: 'desc'
            // }]
        }
    },
    async created() {
        const {
            data
        } = await this.$axios.get('/api/config');
        console.log(data)
        this.config = data.result;
        this.homeLogo = data.result.top_logo_home.url;
        this.otherLogo = data.result.top_logo_other.url
    },
    methods: {
        // 判断是否是首次打开页面; 如果是,则开启首次加载动画
        firstLoad() {
            let load = sessionStorage.getItem("load");
            if (!load) {
                this.first = true;
                sessionStorage.setItem("load", "true");
            }
        },
    }
}
</script>

<style>
html {
    height: 100vh;
    /*font-family:*/
    /*  'Source Sans Pro',*/
    /*  -apple-system,*/
    /*  BlinkMacSystemFont,*/
    /*  'Segoe UI',*/
    /*  Roboto,*/
    /*  'Helvetica Neue',*/
    /*  Arial,*/
    /*  sans-serif;*/
    /*font-size: 16px;*/
    /*word-spacing: 1px;*/
    /*-ms-text-size-adjust: 100%;*/
    /*-webkit-text-size-adjust: 100%;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*box-sizing: border-box;*/
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
}

.button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
}

.button--green:hover {
    color: #fff;
    background-color: #3b8070;
}

.button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
}

.button--grey:hover {
    color: #fff;
    background-color: #35495e;
}
</style>
