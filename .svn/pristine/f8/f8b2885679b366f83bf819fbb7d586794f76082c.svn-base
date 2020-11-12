<template>
  <div :class="['container', $store.state.$fontClass + '-content']">
    <section class="index_banner">
      <div class="index_banner_box">
        <h1>引领保密教育</h1>
        <h1>筑梦辉煌人生</h1>
        <know-more
          title="了解更多"
          href="/"
        ></know-more>
      </div>
    </section>
<!--    简介-->
    <section class="introduction_wrap">
      <div class="introduction">
        <img src="~static/images/test_03.png" alt="">
        <div class="white"></div>
        <section class="introduction_title">
          <h2 :class="$store.state.$fontClass + '-title2'">浙江保密学院培训中心</h2>
          <p class="many-ellipsis">
            保密是一门科学，具有自身的规律和特点。随着社会主义市场经济深入发展和信息化建设的快速推进，保密工作的对象、领域、环境和手段发生
            保密是一门科学，具有自身的规律和特点。随着社会主义市场经济深入发展和信息化建设的快速推进，保密工作的对象、领域、环境和手段发生
          </p>
          <div class="icon_title_wrap">
            <div class="icon_title">
              <img src="../static/images/icon_01.png" alt="">
              <p :class="$store.state.$fontClass + '-bigger-content'">更专业</p>
            </div>
            <i/>
            <div class="icon_title">
              <img src="../static/images/icon_02.png" alt="">
              <p :class="$store.state.$fontClass + '-bigger-content'">更权威</p>
            </div>
            <i/>
            <div class="icon_title">
              <img src="../static/images/icon_03.png" alt="">
              <p :class="$store.state.$fontClass + '-bigger-content'">更负责</p>
            </div>
          </div>
          <know-more
            title="了解更多"
            href="/"
            class-name="red_no_border"
          ></know-more>
        </section>
      </div>
    </section>
<!--    新闻资讯 class="news_wrap"-->
<!--
    <div>
      <button @click="$store.commit('changeFontSize', 0)">小</button>
      <button @click="$store.commit('changeFontSize', 1)">中</button>
      <button @click="$store.commit('changeFontSize', 2)">大</button>
    </div>
-->
    <section :class="['news_wrap', $store.state.$fontClass + '-bigger-content']" >
      <div class="news_title">
        <h2 :class="$store.state.$fontClass + '-title-h2'">新闻资讯</h2>
        <nav class="news_nav">
          <li
            v-for="(newClass, index) in newsClassList"
            @click="selectNewsClass(newClass.id)"
            :key="newClass.id"
            :style="{color: newClass.id === selectedNewsId ? 'red' : '#333'}"
          >
            {{ newClass.name }}
          </li>
        </nav>
      </div>
      <section class="news_graphic">
        <dl :class="$store.state.$fontClass + '-content'">
          <dt>
            <img src="~static/images/news_show.png" alt="">
            <span>
              {{ '2020-08-08' }}
            </span>
          </dt>
          <dd>
            <h3 :class="[$store.state.$fontClass + '-title-h3', 'one-ellipsis']">我校承办第十六届全国敏感元件与传感器学术会议分论坛 </h3>
            <p class="many-ellipsis">9月18日至20日，第十六届全国敏感元件与传感器学术会议在辽宁沈阳隆重召开，我校和杭州师范大学联合承办了汽车、轨道交通传感器及应用分论坛</p>
            <know-more
              href="/"
              title="了解更多"
              class-name="red_no_border"
            ></know-more>
          </dd>
        </dl>
        <section class='news_list'>
          <nav class="news">
            <li >
              <section class="news_topic">
                <div>
                  <i class="circle"/>
                  <p class="one-ellipsis">校信息经济中心多项研究成果获得省委省政府领导肯定性批示</p>
                </div>
                <span class="time">09-04</span>
              </section>
              <section class="one-ellipsis summary">
                近日，浙江省信息化发展研究院研究人员撰写的《我省芯片核心软件产业发展面临的问题
                近日，浙江省信息化发展研究院研究人员撰写的《我省芯片核心软件产业发展面临的问题
                近日，浙江省信息化发展研究院研究人员撰写的《我省芯片核心软件产业发展面临的问题
                近日，浙江省信息化发展研究院研究人员撰写的《我省芯片核心软件产业发展面临的问题
              </section>
            </li>
            <li>
              <section class="news_topic">
                <div>
                  <i class="circle"/>
                  <p class="one-ellipsis">校信息经济中心多项研究成果获得省委省政府领导肯定性批示</p>
                </div>
                <span class="time">09-04</span>
              </section>
            </li>
            <li>
              <section class="news_topic">
                <div>
                  <i class="circle"/>
                  <p class="one-ellipsis">校信息经济中心多项研究成果获得省委省政府领导肯定性批示</p>
                </div>
                <span class="time">09-04</span>
              </section>
            </li>
            <li>
              <section class="news_topic">
                <div>
                  <i class="circle"/>
                  <p class="one-ellipsis">校信息经济中心多项研究成果获得省委省政府领导肯定性批示</p>
                </div>
                <span class="time">09-04</span>
              </section>
            </li>
          </nav>
        </section>
      </section>
      <p class="look-all">
        <nuxt-link to="/">查看全部资讯 ></nuxt-link>
      </p>
    </section>
<!--    课程资源-->
    <section :class="['class_resource', $store.state.$fontClass + '-content']">
      <div class="resource">
        <div class="resource_title">
          <h2 :class="$store.state.$fontClass + '-title-h2'">课程资源</h2>
          <nuxt-link to="/" :class="$store.state.$fontClass + '-bigger-content'">全部资源 ></nuxt-link>
        </div>
        <div class="resource_main" style="margin-bottom: .24rem">
          <div class="left">
            <img src="../static/images/presentation.png" alt="">
            <h3 :class="$store.state.$fontClass + '-title-h3'">业务实训</h3>
            <p>利用虚拟化云计算技术，构建互联网监管实训系统、涉密网监管实训系统和保密检查实训系统。</p>
            <nuxt-link to="/" class="arrow">
              <i class="iconfont icon-changjiantou"/>
            </nuxt-link>
          </div>
          <div class="right">
            <section class="title">
              <h3 :class="$store.state.$fontClass + '-title-h3'">精品课程</h3>
              <nav class="class_nav">
                <li
                  v-for="(resources, index) in resourceClassList"
                  @click="selectedResources(resources.id)"
                  :key="resources.id"
                  :style="{color: resources.id === selectedResourcesId ? 'red' : '#333'}"
                >
                  {{ resources.name }}
                </li>
              </nav>
            </section>
            <course-shutters></course-shutters>
          </div>
        </div>
        <div class="resource_main">
          <div class="left">
            <img src="../static/images/presentation.png" alt="">
            <h3 :class="$store.state.$fontClass + '-title-h3'">技能实训</h3>
            <p>利用虚拟化云计算技术，构建互联网监管实训系统、涉密网监管实训系统和保密检查实训系统。</p>
            <nuxt-link to="/" class="arrow">
              <i class="iconfont icon-changjiantou"/>
            </nuxt-link>
          </div>
          <div class="right">
            <section class="title">
              <h3>技能实训</h3>
            </section>
            <course-shutters></course-shutters>
          </div>
        </div>
      </div>
    </section>
<!--    师资简介-->
    <section class="teacher_profile_wrap">
      <div class="teacher_profile">
        <div class="teacher_title">
          <h2 :class="$store.state.$fontClass + '-title-h2'">师资简介</h2>
          <nuxt-link to="/" :class="$store.state.$fontClass + '-bigger-content'">全部老师 ></nuxt-link>
        </div>
        <section :class="['profile_wrap', $store.state.$fontClass + '-content']">
          <div class="teacher_name">
            <h3 :class="$store.state.$fontClass + '-title-h4'">李国强</h3>
            <p class="teacher_level">特级讲师</p>
            <p class="teacher_summary many-ellipsis">
              保密是一门科学，具有自身的规律和特点。随着社会主义市场经济深入发展和信息化建设的快速推进，
              保密工作的对象、领域、环境和手段发生保密是一门科学，具有自身的规律和特点。随着社会主义市场经济深入发展和信息化建设的快速推进，保密工作的对象、领域、环境和手段发生
            </p>
            <know-more
              href="/"
              title="了解更多"
              class-name="red_no_border"
            ></know-more>
            <section class="teachers">
              <img src="../static/images/teacher_pic.png" alt="">
              <img src="../static/images/teacher_pic.png" alt="">
              <img src="../static/images/teacher_pic.png" alt="">
              <img src="../static/images/teacher_pic.png" alt="">
              <i class="iconfont icon-right-arrow"/>
            </section>
          </div>
          <div class="teacher_pic">
            <div class="other_teacher">
              <img class="other_pic" src="../static/images/teacher_pic.png" alt="">
              <img class="other_pic" src="../static/images/teacher_pic.png" alt="">
              <img class="other_pic" src="../static/images/teacher_pic.png" alt="">
              <img class="other_pic" src="../static/images/teacher_pic.png" alt="">
            </div>
            <img src="../static/images/teacher_pic.png" alt="">
<!--            <i class="iconfont icon-right-arrow"/>-->
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
              <img src="../static/images/background1.png" alt="">
            </div>
            <div class="topic">
              <h4 :class="$store.state.$fontClass + '-title-h3'">校园周边</h4>
              <p class="summary many-ellipsis">
                保密是一门科学，具有自身的规律和特点。随着社会主义市场经济深入发展和信息化建设的快速推进，
              </p>
              <nuxt-link to="/" class="arrow">
                <i class="iconfont icon-changjiantou"/>
              </nuxt-link>
            </div>
          </div>
          <div class="support_item">
            <div class="img_wrap">
              <img src="../static/images/background1.png" alt="">
            </div>
            <div class="topic">
              <h4>校园周边</h4>
              <p class="summary many-ellipsis">
                保密是一门科学，具有自身的规律和特点。随着社会主义市场经济深入发展和信息化建设的快速推进，
              </p>
              <nuxt-link to="/" class="arrow">
                <i class="iconfont icon-changjiantou"/>
              </nuxt-link>
            </div>
          </div>
          <div class="support_item reverse">
            <div class="img_wrap">
              <img src="../static/images/background1.png" alt="">
            </div>
            <div class="topic">
              <h4>校园周边</h4>
              <p class="summary many-ellipsis">
                保密是一门科学，具有自身的规律和特点。随着社会主义市场经济深入发展和信息化建设的快速推进，
              </p>
              <nuxt-link to="/" class="arrow">
                <i class="iconfont icon-changjiantou"/>
              </nuxt-link>
            </div>
          </div>
          <div class="support_item reverse">
            <div class="img_wrap">
              <img src="../static/images/background1.png" alt="">
            </div>
            <div class="topic">
              <h4>校园周边</h4>
              <p class="summary many-ellipsis">
                保密是一门科学，具有自身的规律和特点。随着社会主义市场经济深入发展和信息化建设的快速推进，
              </p>
              <nuxt-link to="/" class="arrow">
                <i class="iconfont icon-changjiantou"/>
              </nuxt-link>
            </div>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import KnowMore from "~/components/KnowMore";
import CourseShutters from "@/components/CourseShutters";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: 'index',
  components:{
    Header,
    KnowMore,
    CourseShutters,
    Footer
  },
  async asyncData(){
    let newsClassList=[
        {name: '新闻动态', id: 1},
        {name: '培训动态', id: 2},
        {name: '知识分享', id: 3},
    ];
    let resourceClassList = [
      {name: '精品课程分类一', id: 1},
      {name: '精品课程分类二', id: 2},
    ]
    return {
      navList:[
        {
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
          link: '/resource'
        },
        {
          name: '教学支撑',
          link: '/support'
        },
      ],
      newsClassList:newsClassList,
      resourceClassList:resourceClassList,
      selectedNewsId : newsClassList[0].id,
      selectedResourcesId : resourceClassList[0].id
    }
  },
  data(){
    return {
      isShowMenu: false,
      activeShutters: 1,
      shutters:[
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
      ]
    }
  },
  mounted() {
    // console.log('字号', this.$store.state.$fontClass);
  },
  methods:{
    showPhoneMenu(){
      this.isShowMenu = !this.isShowMenu
    },
    selectNewsClass(id){
      this.selectedNewsId = id;
    },
    selectedResources(id){
      this.selectedResourcesId = id;
    },
    switchShutter(id){
      this.activeShutters = id
    },
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/index.scss";
</style>
