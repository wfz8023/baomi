<template>
<div :class="['container', $store.state.$fontClass + '-content']">
    <div class="swiper-banner">
        <swiper class="mobile_show" ref="mySwiper" :options="swiperBanner">
            <swiper-slide v-for="item in banner" class="swiper-slide" :key="item.id">
                <section class="index_banner" :style="{ backgroundImage: `url(${item.picture})`}">
                    <div class="index_banner_box">
                        <h1 v-html="item.title"></h1>
                        <a class="link_a" :href="item.link">{{ item.link_title }}</a>
                    </div>
                </section>
            </swiper-slide>
            <div class="swiper-pagination1" slot="pagination"></div>
        </swiper>
    </div>

    <!--    简介-->
    <section class="introduction_wrap">
        <div class="introduction" v-if="desc">
            <img :src="desc.home_img.url" :alt="desc.home_img.alt">
            <div class="white"></div>
            <section class="introduction_title">
                <h2 :class="$store.state.$fontClass + '-title2'">{{ desc.home_title }}</h2>
                <div class="many-ellipsis" v-html="desc.home_desc"></div>
                <div class="icon_title_wrap">
                    <div class="icon_title">
                        <span class="icon_wrap">
                            <i :class="['iconfont', desc.home_icon_tb_1]" />
                        </span>
                        <p :class="$store.state.$fontClass + '-bigger-content'">{{ desc.home_icon_wz_1 }}</p>
                    </div>
                    <i class="shu" />
                    <div class="icon_title">
                        <span class="icon_wrap">
                            <i :class="['iconfont', desc.home_icon_tb_2]" />
                        </span>
                        <p :class="$store.state.$fontClass + '-bigger-content'">{{ desc.home_icon_wz_2 }}</p>
                    </div>
                    <i class="shu" />
                    <div class="icon_title">
                        <span class="icon_wrap">
                            <i :class="['iconfont', desc.home_icon_tb_3]" />
                        </span>
                        <p :class="$store.state.$fontClass + '-bigger-content'">{{ desc.home_icon_wz_3 }}</p>
                    </div>
                </div>
                <know-more title="了解更多" href="/" name="overview" class-name="red_no_border"></know-more>
            </section>
        </div>
    </section>

    <!--    新闻资讯 class="news_wrap"-->
    <section :class="['news_wrap', $store.state.$fontClass + '-bigger-content']">
        <div class="news_title">
            <h2 :class="$store.state.$fontClass + '-title-h2'">新闻资讯</h2>
            <nav class="news_nav">
                <li v-for="(newClass, index) in news" @click="selectNewsClass(index)" :key="newClass.id" :style="{ color: index === newsIndex ? '#cb2525' : '#333'}">
                    {{ newClass.name }}
                </li>
            </nav>
        </div>
        <section class="news_graphic">
            <!--        <nuxt-link-->
            <!--          v-if="news[newsIndex].children[0]"-->
            <!--          :to="{name: 'news-detail-id', params:{id: news[newsIndex].children[0].id}}"-->
            <!--        >-->
            <dl v-if="news[newsIndex].children[0]" :class="$store.state.$fontClass + '-content'">
                <dt>
                    <img :src="news[newsIndex].children[0].picture" alt="">
                    <span>
                        {{ timestampToYear(news[newsIndex].children[0].created_at) }}
                    </span>
                </dt>
                <dd>
                    <h3 :class="[$store.state.$fontClass + '-title-h3', 'one-ellipsis']">{{ news[newsIndex].children[0].title }} </h3>
                    <p class="many-ellipsis">{{ news[newsIndex].children[0].abstract }}</p>
                    <know-more href="/" title="了解更多" :name="'news-detail-id'" :params="{ id: news[newsIndex].children[0].id }" class-name="red_no_border"></know-more>
                </dd>
                <nuxt-link class="first_news" v-if="news[newsIndex].children[0]" :to="{name: 'news-detail-id', params:{id: news[newsIndex].children[0].id}}">
                </nuxt-link>
            </dl>
            <section class='news_list'>
                <nav class="news">
                    <nuxt-link v-for="item in news[newsIndex].children" :to="{name: 'news-detail-id', params: { id: item.id }}" :key="item.id">
                        <li>
                            <section class="news_topic">
                                <div>
                                    <i class="circle" />
                                    <p class="one-ellipsis">{{ item.title }}</p>
                                </div>
                                <span class="time">{{ timestampToTime(item.created_at) }}</span>
                            </section>
                            <section class="one-ellipsis summary">
                                {{ item.abstract }}
                            </section>
                        </li>
                    </nuxt-link>
                </nav>
            </section>
        </section>
        <p class="look-all">
            <nuxt-link to="/news">查看全部资讯 ></nuxt-link>
        </p>
    </section>
    <!--    课程资源-->
    <section :class="['class_resource', $store.state.$fontClass + '-content']">
        <div class="resource">
            <div class="resource_title">
                <h2 :class="$store.state.$fontClass + '-title-h2'">课程资源</h2>
                <nuxt-link to="/resource" :class="$store.state.$fontClass + '-bigger-content'">全部资源 ></nuxt-link>
            </div>
            <!-- 精品课程 -->
            <div class="resource_main" style="margin-bottom: .24rem">
                <div class="left" :style="{backgroundImage: `url(${resource.business.home_bg || '~static/images/left_1.png'})`}">
                    <span class="icon_wrap">
                        <i :class="['iconfont', resource.business.home_icon]" />
                    </span>
                    <h3 :class="$store.state.$fontClass + '-title-h3'">业务实训</h3>
                    <p>{{ resource.business.home_desc }}</p>
                    <nuxt-link :to="{name: 'resource-business'}" class="arrow">
                        <i class="iconfont icon-changjiantou" />
                    </nuxt-link>
                </div>
                <div class="right">
                    <section class="title">
                        <h3 :class="$store.state.$fontClass + '-title-h3'">精品课程</h3>
                        <div class="list_nav">
                            <nav class="class_nav" v-if="resource.chair.info">
                                <li v-for="(resources, index) in resource.chair.info" @click="selectedResources(resources.id, index)" :key="resources.id" :style="{color: resources.id === selectedResourcesId ? '#cb2525' : '#333'}">
                                    {{ resources.title }}
                                </li>
                            </nav>
                        </div>
                    </section>
                    <!-- <div v-if="resource.chair.info[selectChairIndex].children"> -->
                    <course-shutters :home-bg="resource.chair.index.home_bg" :resource-id="selectedResourcesId" :background-path="resource.chair.index.home_bg" :icon="resource.chair.index.home_icon" :class-shutters="resource.chair.info"></course-shutters>
                    <!-- </div> -->
                </div>
            </div>
            <div class="resource_main">
                <div class="left" :style="{backgroundImage: `url(${resource.skill.home_bg || '~static/images/left_1.png'})`}">
                    <span class="icon_wrap">
                        <i :class="['iconfont', resource.skill.home_icon]" />
                    </span>
                    <h3 :class="$store.state.$fontClass + '-title-h3'">{{ '技能实训' }}</h3>
                    <p class="many-ellipsis">{{ resource.skill.home_desc }}</p>
                    <nuxt-link to="/resource/skill" class="arrow">
                        <i class="iconfont icon-changjiantou" />
                    </nuxt-link>
                </div>
                <!-- 典型班次 -->
                <div class="right">
                    <section class="title">
                        <h3 :class="$store.state.$fontClass + '-title-h3'">典型班次</h3>
                        <nav class="class_nav" v-if="resource.classes.info">
                            <li v-for="(resources, index) in resource.classes.info" @click="selectedClasses(resources.id, index)" :key="resources.id" :style="{color: resources.id === selectedClassesId ? '#cb2525' : '#333'}">
                                {{ resources.title }}
                            </li>
                        </nav>
                    </section>
                    <!-- <div v-if="resource.classes.info[selectClassesIndex].children"> -->
                    <course-shutters :type="'class'" :home-bg="resource.classes.index.home_bg" :resource-id="selectedClassesId" :background-path="resource.classes.index.home_bg" :icon="resource.classes.index.home_icon" :class-shutters="resource.classes.info"></course-shutters>
                    <!-- </div> -->
                </div>
            </div>
        </div>
    </section>
    <!--    师资简介-->
    <section class="teacher_profile_wrap">
        <div class="teacher_profile">
            <div class="teacher_title">
                <h2 :class="$store.state.$fontClass + '-title-h2'">师资简介</h2>
                <nuxt-link :to="{name: 'teacher'}" :class="$store.state.$fontClass + '-bigger-content'">全部老师 ></nuxt-link>
            </div>
            <section :class="['profile_wrap', $store.state.$fontClass + '-content']">
                <div class="teacher_name">
                    <div class="teacher_summary_wrap">
                        <div class="other_teacher">
                            <img class="other_pic" :src="showTeacher.portrait" :alt="showTeacher.name">
                        </div>
                        <section class="teacher_pic_text">
                            <h3 :class="$store.state.$fontClass + '-title-h4'">{{ showTeacher.name }} <span style="color: #333;font-size: .24rem;">{{ showTeacher.job }}</span></h3>
<!--                            <p class="teacher_level"></p>-->
                            <div class="teacher_summary many-ellipsis" v-html="showTeacher.desc"></div>
                            <know-more href="/" title="了解更多" name="teacher" class-name="red_no_border"></know-more>
                        </section>
                    </div>
                    <section class="teachers">
                        <swiper class="swiper mobile_show directive" ref="teacherSwiper" :options="swiperTeacher" @clickSlide="handleSwiperSlideClick" @slideChange="handleSwiperChange">
                            <swiper-slide class="swiper-slide" v-for="teacher in teachers" :key="teacher.id">
                                <div class="other_pic_wrap">
                                    <img class="other_pic" :src="teacher.portrait" :alt="teacher.id">
                                </div>
                            </swiper-slide>
                        </swiper>
                        <span class="icon_wrap swiper-button-prev">
                            <i class="iconfont icon-right-arrow" />
                        </span>
                    </section>
                </div>
                <div class="teacher_pic">
                    <div class="other_teacher">
                        <img class="other_pic" :src="showTeacher.portrait" :alt="showTeacher.name">
                        <i class="right iconfont icon-right-arrow swiper-button-next" />
                    </div>
                </div>
            </section>
        </div>
    </section>
    <!--    教学支撑-->
    <section class="support_wrap">
        <div class="support">
            <h2 :class="$store.state.$fontClass + '-title-h2'">教学支撑</h2>
            <section class="present">
                <div class="support_item">
                    <div class="img_wrap">
                        <img :src="support.rim.home_bg" alt="">
                    </div>
                    <div class="topic">
                        <h4 :class="$store.state.$fontClass + '-title-h3'">校园周边</h4>
                        <p class="summary many-ellipsis">
                            {{ support.rim.home_desc }}
                        </p>
                        <nuxt-link to="/support" class="arrow">
                            <i class="iconfont icon-changjiantou" />
                        </nuxt-link>
                    </div>
                </div>
                <div class="support_item">
                    <div class="img_wrap">
                        <img :src="support.hall.home_bg" alt="">
                    </div>
                    <div class="topic">
                        <h4 :class="$store.state.$fontClass + '-title-h3'">整洁卫生的食堂</h4>
                        <p class="summary many-ellipsis">
                            {{ support.hall.home_desc }}
                        </p>
                        <nuxt-link to="/support/environment" class="arrow">
                            <i class="iconfont icon-changjiantou" />
                        </nuxt-link>
                    </div>
                </div>
                <div class="support_item reverse">
                    <div class="img_wrap">
                        <img :src="support.room.home_bg" alt="">
                    </div>
                    <div class="topic">
                        <h4 :class="$store.state.$fontClass + '-title-h3'">多功能教室</h4>
                        <p class="summary many-ellipsis">
                            {{ support.room.home_desc }}
                        </p>
                        <nuxt-link to="/support/condition" class="arrow">
                            <i class="iconfont icon-changjiantou" />
                        </nuxt-link>
                    </div>
                </div>
                <div class="support_item reverse">
                    <div class="img_wrap">
                        <img :src="support.fitness.home_bg" alt="">
                    </div>
                    <div class="topic">
                        <h4 :class="$store.state.$fontClass + '-title-h3'">体育健身场所</h4>
                        <p class="summary many-ellipsis">
                            {{ support.fitness.home_desc }}
                        </p>
                        <nuxt-link to="/support/sports" class="arrow">
                            <i class="iconfont icon-changjiantou" />
                        </nuxt-link>
                    </div>
                </div>
            </section>
        </div>
    </section>
    <!--
    <div>
      <button @click="$store.commit('changeFontSize', 0)">小</button>
      <button @click="$store.commit('changeFontSize', 1)">中</button>
      <button @click="$store.commit('changeFontSize', 2)">大</button>
    </div>
-->
</div>
</template>

<script>
import KnowMore from "~/components/KnowMore";
import CourseShutters from "@/components/CourseShutters";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    Swiper,
    SwiperSlide,
    directive
} from 'vue-awesome-swiper'
import axios from "axios";

export default {
    name: 'index',
    loading: false,
    components: {
        Header,
        KnowMore,
        CourseShutters,
        Footer,
        Swiper,
        SwiperSlide,
        directive
    },
    directives: {
        swiper: directive
    },
  fetch({ store, $axios, params, app }){
    console.log(store)
    $axios.get('/api/config').then( ({data}) => {
      if (data.code === 200) {
        const config = {
          ...data.result,
        }
        // console.log('fetch 首页 获取config', config)

        store.commit('setConfig', config)
      } else {
        console.log('%c 请求失败：' + res.data.result, 'color:#ff0000;')
      }
    })
  },
    async asyncData({
        $axios,
        env,
        store,
        app
    }) {
        const {
            data
        } = await $axios.get('/api/home')
        console.log("data0sss", data)
      app.head.title = store.state.config.title
      // "浙江保密学院培训中心"
      let {
            banner,
            desc,
            news,
            resource,
            support,
            teachers
        } = data.result;
        //新闻列表 图片 加本机域名
        news.forEach(item => {
            item.children.map(newItem => {
                newItem.picture = env.BASE_URL + newItem.picture;
                return newItem
            })
        })
        const maxNewsList = news.slice(0, 4)
        // news.length = 5;
        console.log(data.result)
        // 新闻分类列表
        store.commit('setNewsClassList', news)
        // 老师简介 图片加域名
        teachers.map(item => {
            item.portrait = env.BASE_URL + item.portrait;
            return item
        })
        // 默认显示第一个老师
        let showTeacher = teachers[0];
        // console.log('index---->>>', teachers)
        // let showNewsCase = news[]
        let newsClassList = [{
                name: '新闻动态',
                id: 1
            },
            {
                name: '培训动态',
                id: 2
            },
            {
                name: '知识分享',
                id: 3
            },
        ];
        let resourceClassList = [{
                title: '精品课程分类一',
                id: 1
            },
            {
                title: '精品课程分类二',
                id: 2
            },
        ]

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
                    name: '咨询中心',
                    link: '/news'
                },
                {
                    name: '师资队伍',
                    link: '/teacher'
                },
                {
                    name: '课程资源',
                    link: '/resource/lecture'
                },
                {
                    name: '教学支撑',
                    link: '/support'
                },
            ],
            newsClassList: newsClassList,
            resourceClassList: resourceClassList,
            selectedNewsId: newsClassList[0].id,
            selectChairIndex: 0,
            selectClassesIndex: 0,
            selectedResourcesId: resource.chair.info[0].id || 0,
            selectedClassesId: resource.chair.info[0].id || 0,
            banner,
            desc,
            news,
            resource,
            support,
            teachers,
            showTeacher,
            title: '浙江保密学院培训中心'
        }
    },
    head() {
        return {
            title: this.$store.state.config.title,
            meta: [
              {
                hid: 'description',
                name: 'description',
                content: this.$store.state.config.desc
              },
              {
                hid: "keywords",
                name: "keywords",
                content: this.$store.state.config.keyword
              },
            ]
        }
    },
    data() {
        return {
          isShowMenu: false,
          activeShutters: 1,
          newsIndex: 0,
          shutters: [{
                  id: 1
              },
              {
                  id: 2
              },
              {
                  id: 3
              },
              {
                  id: 4
              },
          ],
          swiperBanner: {
              // loop: true,
              // autoplay: {
              //     delay: 3000
              // },
              pagination: {
                  el: '.swiper-pagination1',
                  // dynamicBullets: true
              }
          },
          swiperTeacher: {
              loop: true,
              slidesPerView: 4,
              spaceBetween: 15,
              // pagination: {
              //     el: '.swiper-pagination',
              //     clickable: true
              // },
              slideToClickedSlide: true,
              navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                  disabledClass: 'my-button-disabled'
              },
              on: {
                  slideChange: function () {

                  },
              },
          },
          activeIndex: 0
        }
    },
    mounted() {
      // console.log('ddddddddddddddddd', document.title)
      // document.title = "浙江保密学院培训中心"
      // document
        // .title = this.$store.state.config.title
    },
    methods: {
          showPhoneMenu() {
              this.isShowMenu = !this.isShowMenu
          },
          selectNewsClass(newsIndex) {
              this.newsIndex = newsIndex;
          },
          // 精品课程分类id
          selectedResources(id, index) {
              this.selectChairIndex = index;
              this.selectedResourcesId = id;
          },
          // 典型班次
          selectedClasses(id, index) {
              this.selectedClassesId = id;
              this.selectClassesIndex = index;
          },
          switchShutter(id) {
              this.activeShutters = id
          },
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

              return M + D;
          },
          timestampToYear(timestamp) {
              let date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
              let Y = date.getFullYear() + '-';
              let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
              let D = date.getDate() + ' ';
              let h = date.getHours() + ':';
              let m = date.getMinutes() + ':';
              let s = date.getSeconds();
              Y = Y < 10 ? '0' + Y : Y;
              M = M < 10 ? '0' + M : M;
              D = D < 10 ? '0' + D : D;

              return Y + M + D;
          },
          handleSwiperSlideClick(index, reallyIndex) {
            // console.log(reallyIndex)
            this.showTeacher = this.teachers[reallyIndex]
          },
          handleSwiperChange(index) {
              console.log(index)
          },
      }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/index.scss";
</style>
