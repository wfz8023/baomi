<template>
  <section class="news">
    <div class="banner">
      <img class="banner_bg" src="~/static/images/overview_banner.png" alt="咨询中心">
      <div class="banner_text">
        <h1 :class="$store.state.$fontClass + '-banner-text'">资讯中心</h1>
        <div class="text_en flex_box">
          <img src="~static/images/banner_left.png" alt="">
          <p>News Center</p>
          <img src="~static/images/banner_right.png" alt="">
        </div>
      </div>
    </div>
    <div class="overview-nav">
      <section :class="['nav_wrap', $store.state.$fontClass + '-title-h3']">
        <nav>
          <li>
            <nuxt-link to="/">
              新闻动态
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              培训动态
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              知识分享
            </nuxt-link>
          </li>
        </nav>
      </section>
      <section class="news_list">
        <NewsItem
          link_title="了解更多"
          picPath="~/static/images/teacher_569.png"
          title="教学团队青龙队"
          summary="9月18日至20日，第十六届全国敏感元件与传感器学术会议在辽宁沈阳隆重召开，我校和杭州师范我校和杭州师范"
          :active="true"
        />
        <NewsItem
          link_title="了解更多"
          picPath="~/static/images/teacher_569.png"
          title="教学团队青龙队"
          summary="9月18日至20日，第十六届全国敏感元件与传感器学术会议在辽宁沈阳隆重召开，我校和杭州师范我校和杭州师范"
        />
        <NewsItem
          link_title="了解更多"
          picPath="~/static/images/teacher_569.png"
          title="教学团队青龙队"
          summary="9月18日至20日，第十六届全国敏感元件与传感器学术会议在辽宁沈阳隆重召开，我校和杭州师范我校和杭州师范"
        />
      </section>
      <section class="pagination">
        <el-pagination
          :class="$store.state.$fontClass + '-footer-text'"
          background
          layout="prev, pager, next"
          :total="1000"
          prev-text="上一页"
          next-text="下一页"
        />
      </section>
    </div>
  </section>
</template>

<script>
import NewsItem from "@/components/NewsItem";
export default {
  name: "overview",
  components:{
    NewsItem
  }
}
</script>

<style lang="scss" scoped>
.littleFont-banner-text{
  font-size: .4rem;
}

.news{
  padding-top: 1rem;
}
.banner{
  height: 4.84rem;
  position: relative;
  .banner_bg{
    width: 100%;
  }
  .banner_text{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    h1{
      color: #fff;
      margin: .16rem;
    }
    .text_en p{
      color: #e3dfdd;
      margin: 0 .14rem;
    }
  }
}
.overview-nav{
  .nav_wrap{
    position: relative;
    margin: 0 auto;
  }
  nav{
    $boxHeight: .74rem;
    $boxWidth: 2.23rem;
    $boxTop: -.37rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    line-height: $boxHeight;
    li{
      margin-left: .4rem;
      box-shadow: 0 .3rem .3rem #f5f5f5;
      display: inline-block;
    }
    li:nth-of-type(1){
      box-shadow: 0 .3rem .3rem #fadada;
      margin-left: 0;
      a{
        background: url("~static/images/overview_active.png");
        color: #fff;
      }
    }
    a{
      display: block;
      width: $boxWidth;
      height: $boxHeight;
      background: #fff;
      color: #333;
    }
  }
  .news_list{
    padding-top: 1.4rem;
    display: flex;
    width: 14.66rem;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
  }
  .pagination{
    width: 14.66rem;
    margin: 0 auto;
    padding: .86rem 0;
      // 修改element样式
    /deep/
    .el-pagination{
      text-align: center;
      font-size: .16rem;
      @mixin common(){
        height: .4rem;
        border: 1px solid #d1d1d1;
        //display: flex;
        //align-items: center;
        line-height: .4rem;
        border-radius: 0;
        font-weight: normal;
        background: #fff;
      }
      .more{
        @include common;
        color: #666;
      }
      .more:hover{
        border: 1px solid #cb2525;
        color: #cb2525;
      }
      .el-pager .more::before{
        line-height: .4rem;
      }
      .number{
        @include common;
        color: #666;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .number:hover{
        border: 1px solid #cb2525;
        color: #cb2525;
      }
      .active{
        background: #cb2525!important;
        color: #fff!important;
        border: 0;
      }
      .btn-next, .btn-prev{
        //color: #666;
        min-width: .4rem;
        padding: 0 .1rem;
        @include common;
        span{
          line-height: .4rem;
          height: .4rem;
        }
      }
    }
  }
}
</style>
