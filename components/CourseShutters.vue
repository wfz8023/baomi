<template>
<section class="shutters" v-if="classShutters[classIndex].children.length > 0">
    <div v-for="shutter in shutters" :key="shutter && shutter.id" class="shutter_wrap" @mouseover="switchShutter(shutter)">
        <div
          v-if="shutter"
          :class="[ shutter && activeShutters === shutter.id ? 'active' : 'default']"
          :style="{ backgroundImage: `url(${ shutter && activeShutters === shutter.id ? shutter.img.url : imgClose })` }"
        >
          <div class="flex_box" v-if="activeShutters === shutter.id">
                <h4 :class="$store.state.$fontClass + '-title-h4'">{{ shutter && shutter.title }}</h4>
                <p class="many-ellipsis">
                    {{ shutter && shutter.desc }}
                </p>
                <nuxt-link :to="{name: type ? 'resource-classes-id' : 'resource-lecture-id', params:{ id: shutter && shutter.id }}" class="arrow">
                    <i class="iconfont icon-changjiantou" />
                </nuxt-link>
            </div>
            <div v-else>
                <!--          <img src="../static/images/podium.png" alt="">-->
                <span class="icon_wrap">
                    <i :class="['iconfont', icon]" />
                </span>
                <p class="title_shutter">{{ shutter && shutter.title }}</p>
            </div>
        </div>
    </div>
    <client-only>
      <swiper v-if="shutters" class="mobile_show" ref="mySwiper" :options="swiperOptions">
        <swiper-slide class="swiper-slide" v-for="shutter in shutters" :key="shutter && shutter.id">
          <div
            class="active"
            :style="{backgroundImage: `url(${shutter && shutter.img.url})`}"
          >
            <h4 :class="[$store.state.$fontClass + '-title-h4', 'one-ellipsis']">{{ shutter && shutter.title }}</h4>
            <p class="many-ellipsis">
              {{ shutter && shutter.desc }}
            </p>
            <nuxt-link :to="{name:  type ? 'resource-classes-id' : 'resource-lecture-id', params:{ id: shutter && shutter.id }}" class="iconfont">
              <img src="../static/images/arrow.png" alt="">
            </nuxt-link>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </client-only>
</section>
</template>

<script>
import {
    Swiper,
    SwiperSlide,
    directive
} from 'vue-awesome-swiper'

export default {
    name: "resource-shutter",
    components: {
        Swiper,
        SwiperSlide
    },
    directives: {
        swiper: directive
    },
    props: [
        'classShutters',
        'icon',
        'backgroundPath',
        'resourceId',
        'type',
        'homeBg'
    ],
    // head() {
    //     return {
    //         title: '首页'
    //     }
    // },
    data() {
        return {
            activeShutters: 1,
            shutters: [],
            swiperOptions: {
                loop: true,
                // autoplay: {
                //     delay: 4000,
                //     disableOnInteraction: false,
                // },
                pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets: true
                }
            },
            classIndex: -1,
            imgClose: require('../static/images/close.png')
        }
    },
    created() {
        const {
            classShutters,
            resourceId
        } = this;
        const index = classShutters.findIndex(item => resourceId === item.id);
        this.classIndex = index;

        if (index < 0) return
        this.shutters = classShutters[index].children;
        // console.log(index, classShutters)
        this.activeShutters = classShutters[index].children ? classShutters[index].children[0].id : 0
        // if ()
        this.shutters.length = this.shutters.length > 4 ? 4 : this.shutters.length;
        console.log(this.shutters)
    },
    watch: {
        resourceId(newVal) {
            const {
                classShutters,
                resourceId
            } = this;

            const index = classShutters && classShutters.findIndex(item => resourceId === item.id);

            this.shutters = classShutters[index].children;
            // console.log('watch===>>>>>', index, this.shutters)
            // resourceId
            if (classShutters[index].children.length < 1) return
            this.activeShutters = classShutters[index].children[0].id

            this.shutters.length = 4;
        }
    },
    methods: {
        switchShutter(shutter) {
            this.activeShutters = shutter && shutter.id
        }
    }

}
</script>

<style lang="scss" scoped>
$shuttersHeight: 3.28rem;

//课程资源百叶窗
.shutters {
    width: 100%;
    height: 3.78rem;
    border: 1px solid #ccc;
    border-top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    font-size: .18rem;
    padding: 0 .17rem;

    .mobile_show {
        display: none;
    }

    .default {
        width: 1.59rem;
        height: $shuttersHeight;
        backgroundImage: url("../static/images/close.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 0 .26rem;
        transition: width 500ms ease-in-out;
        color: #333;
        display: flex;
        align-items: center;
        justify-content: center;

        .title_shutter {
            color: #333;
        }

        .icon_wrap {
            width: .4rem;
            height: .5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;

            i {
                color: #cb2525;
                font-size: .8rem !important;
            }
        }
    }

    .active {
        width: 5.67rem;
        height: $shuttersHeight;
        background-size: cover;
        background: url("../static/images/right_open1.png") no-repeat center;
        background-size: cover;
        padding: 0 .64rem;
        text-align: center;
        align-items: center;
        transition: width 500ms ease-in-out;
        display: flex;
        margin: 0 auto;
        flex-direction: column;
        align-content: space-between;
        color: #fff;
        justify-content: space-between;

        .flex_box,
        .a_wrap {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
        }

        h4 {
            line-height: .5rem;
          width: 80%;
        }

        img {
            margin: 0;
        }

        p {
            margin-bottom: .4rem;
            overflow: hidden;
        }

        .arrow {
            border: 2px solid #fff;
            color: #fff;
        }
    }

    @media only screen and (max-width : 1024px) and (min-width: 300px) {
        .mobile_show {
            display: block;
        }

        .shutter_wrap {
            display: none;
        }

        .active {
            width: 6.16rem;
            padding: .5rem .64rem .3rem .64rem;

            //padding-bottom: 0;
            .iconfont {
                width: 1.1rem;
                height: .4rem;
            }
        }
    }
}
</style>
