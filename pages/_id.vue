<template>
<div class="container">
    <div class="_pic">
        <img src="~static/images/404.png" alt="">
    </div>
    <h1 v-if="error && error.statusCode === 404">页面不存在</h1>
    <h1 v-else>应用发生错误异常</h1>
    <nuxt-link to="/">返 回 首 页</nuxt-link>
</div>
</template>

<script>
export default {
    props: ['error'],
    layout: 'error', // 你可以为错误页面指定自定义的布局
    head() {
        return {
            title: "404",
            meta: [{
                    name: "keywords",
                    content: this.sdk ? this.sdk.keywords : "页面找不到了"
                },
                {
                    name: "description",
                    content: this.sdk ? this.sdk.description : "页面找不到了"
                }
            ]
        };
    },
    created() {
        console.log(this.error)
    }
}
</script>

<style scoped>
.container {
    padding-top: 200px;
}

._pic {
    width: 560px;
    height: 428px;
    margin: 0 auto;
}

h1 {
    margin: 20px 0;
    text-align: center;
}

a {
    width: 120px;
    height: 50px;
    padding: 0 10px;
    margin: 0 auto;
    display: block;
    line-height: 50px;
    text-align: center;
    background: #003a8f;
    color: #fff;
    border-radius: 50px;
}

a:hover {
    border-radius: 25px 0 25px 0;
}

@media only screen and (max-width : 1024px) and (min-width: 300px) {
    ._pic {
        width: 6.9rem;
        height: auto;
    }

    ._pic img {
        width: 100%
    }

    a {
        margin-bottom: .3rem;
    }
}
</style>
