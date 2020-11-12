<template>
<dl :class="[$store.state.$fontClass + '-content', className]">
    <dt>
        <img :style="{'height': picHeight}" :src="picPath" alt="">
        <span v-if="date">
            {{ date }}
        </span>
    </dt>
    <dd>
        <h3 :class="[$store.state.$fontClass + '-title-h3', 'one-ellipsis']">{{ title }} </h3>
        <p class="many-ellipsis">{{ summary === 'null' ? '' : summary }}</p>
        <know-more href="/" :name="linkMsg ? linkMsg.name : 'news-detail-id'" :title="link_title" :params="{ id: id }" class-name="white"></know-more>
    </dd>
    <nuxt-link class="push_pages" :to="{name: linkMsg ? linkMsg.name : 'news-detail-id', params: {id: id}}"></nuxt-link>
</dl>
</template>

<script>
import KnowMore from "~/components/KnowMore";
export default {
    name: "news-item",
    components: {
        KnowMore
    },
    props: [
        'date',
        'link_title',
        'title',
        'summary',
        'active',
        'className',
        'picPath',
        'picHeight',
        'id',
        'linkMsg'
    ],
    created() {
        console.log(this.linkMsg ? this.linkMsg.name : 'news-detail-id')
    }
}
</script>

<style lang="scss" scoped>
$width: 7.18rem;

dl {
    cursor: pointer;
    width: $width;
    margin-bottom: .2rem;
    position: relative;

    .push_pages {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        z-index: 10;
    }

    dt {
        width: 100%;
        position: relative;

        img {
            width: 100%;
            height: 3.5rem;
            display: block;
        }

        span {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 1.8rem;
            height: .74rem;
            line-height: .74rem;
            text-align: center;
            color: #fff;
            font-family: "宋体", serif;
            font-weight: bold;
            background: rgba(203, 37, 37, .8);
        }
    }

    dd {
        width: 100%;
        padding: 0 .3rem .3rem .3rem;
        background: #fff;
        border: 1px solid #e2e2e2;
        border-top: 0;
        overflow: hidden;
        height: 2.4rem;

        h3 {
            margin-top: .24rem;
            color: #333;
        }

        .many-ellipsis {
            margin: .2rem 0 .3rem;
            color: #666;
            height: .64rem;
            -webkit-line-clamp: 2
        }
    }

    .white {
        background: #fff;
        color: #cb2525;
        border: 1px solid #cb2525;
    }
}

dl:hover {
    box-shadow: 0 0 .6rem #f0f0f0;

    dd {
        border-bottom: 1px solid #cb2525;

        a {
            background: #cb2525;
            border: 0;
            color: #fff;
        }
    }
}

@media only screen and (max-width : 1024px) and (min-width: 300px) {
    dl {
        width: 100%;
      dt{
        img{
          height: 3.5rem!important;
        }
      }
      dd{
        height: auto;
        .many-ellipsis {
          margin: .2rem 0 .3rem;
          color: #666;
          height: .8rem;
          -webkit-line-clamp: 2
        }
      }
    }
}
</style>
