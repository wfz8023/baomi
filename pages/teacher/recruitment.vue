<template>
<div class="teacher_recruitment">
    <section class="letter">
        <img :src="isMobile ? letterBg2 : letterBg1" alt="">
        <section class="invite">
            <h2>{{ seo_k }}</h2>
            <article class="rich_content" v-html="content"></article>
        </section>
    </section>
</div>
</template>

<script>
export default {
    name: "teacher-recruitment",
    // teachers/recruit
    async asyncData({
        $axios,
        env
    }) {
        const {
            data
        } = await $axios.get('/api/teachers/recruit?page=1&pszie=15');
        console.log(data)
        const {
            content,
            seo_k
        } = data.result.data

        return {
            content,
            seo_k
        }
    },
    data() {
        return {
            isMobile: false,
            // letterBg: this.isMobile ? '~static/images/mobile_letter.png' : '~static/images/letter.png',
            letterBg2: require('../../static/images/mobile_letter.png'),
            letterBg1: require('../../static/images/letter.png')
        }
    },
    methods: {
        isMobileMS() {
            if (typeof global != "undefined") return false

            let flag = navigator.userAgent.match(
                /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
            );
            return flag;
        }
    },
    created() {
        console.log(process.browser);
    },
    mounted() {
        // this.isMobile = this.isMobileMS();
        // console.log(process.browser)
        if (process.browser) {
            let flag = navigator.userAgent.match(
                /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
            );
            this.isMobile = flag;
        }
    },
}
</script>

<style lang="scss" scoped>
$contentWidth: 14.6rem;

.teacher_recruitment {
    background: url("~static/images/envelope.png") no-repeat center;
    background-size: cover;
    // height: 11.8rem;
    width: 100%;
    overflow: hidden;
    padding-top: 1rem;

    .letter {
        width: $contentWidth;
        margin: 0 auto;
        height: 9.23rem;
        padding-top: 1.1rem;
        position: relative;
        box-shadow: 0 0 .4rem+ #f1f1f1;

        .invite {
            width: 11.76rem;
            height: 4rem;
            position: relative;
            z-index: 999;
            margin: 0 auto;
            overflow: scroll;

            h2 {
                text-align: center;
                color: #cb2525;
                line-height: 1;
                margin-bottom: .6rem;
            }

            .rich_content {
                color: #666;
            }
        }

        ::-webkit-scrollbar {
            width: 3px;
            height: 1px;
        }

        ::-webkit-scrollbar-thumb {
            position: absolute;
            border-radius: 10px;
            background: rgba(0, 0, 0, .3);
            -webkit-box-shadow: none;
        }

        ::-webkit-scrollbar-track {
            border-radius: 10px;
            background: rgba(0, 0, 0, 0);
            -webkit-box-shadow: none;
        }

        img {
            position: absolute;
            top: 0;
            left: 0;
        }
    }

    img {
        width: 100%;
        height: 9.23rem;
    }
}

@media only screen and (max-width : 1024px) and (min-width: 300px) {
    .teacher_recruitment {
        .letter {
            width: 6.9rem;

            .invite {
                width: 5.5rem;
            }

        }

        img {
            height: 8.23rem;
        }
    }
}
</style>
