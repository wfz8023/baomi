<template>
  <footer>
    <div class="link_wrap">
      <section class="link">
        <div class="about_us">
          <div :class="['contract', $store.state.$fontClass + '-footer-text']" >
            <!--          <h5>联系我们</h5>-->
            <img class="footer_logo" src="~static/images/footer-logo.png" alt="浙江保密学院培训中心">
            <p class="text">联系电话：(0571)86915114</p>
            <p class="text">联系地址：浙江省杭州市江干区2号大街1158号</p>
          </div>
        </div>
        <div :class="['web_content', $store.state.$fontClass + '-footer-text']">
          <nav class='footer_nav' >
            <li :class="['first_link', $store.state.$fontClass + '-content']" >
              <nuxt-link to="/">培训中心概况</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">培训中心介绍</nuxt-link>
            </li>
          </nav>
          <nav class="footer_nav">
            <li :class="['first_link', $store.state.$fontClass + '-content']" >
              <nuxt-link to="/">咨讯中心</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">新闻动态</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">培训动态</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">知识分享</nuxt-link>
            </li>
          </nav>
          <nav class="footer_nav">
            <li :class="['first_link', $store.state.$fontClass + '-content']" >
              <nuxt-link to="/">课程资源</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">业务时讯</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">技能实训</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">精品讲座</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">典型班次</nuxt-link>
            </li>
          </nav>
          <nav class="footer_nav">
            <li :class="['first_link', $store.state.$fontClass + '-content']" >
              <nuxt-link to="/">师资简介</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">师资队伍</nuxt-link>
            </li>
          </nav>
          <nav class="footer_nav">
            <li :class="['first_link', $store.state.$fontClass + '-content']" >
              <nuxt-link to="/">教学支撑</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">教学设施</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">食宿</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">运动设施</nuxt-link>
            </li>
          </nav>
        </div>
      </section>
    </div>
    <section class="copyright">
      <div class="content_wrap">
        <p>Copyright©2018   浙江保密学院培训中心浙ICP备14004274号</p>
<!--        <p>浙江保密学院培训中心</p>-->
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss" scoped>
$width: 19.2rem;
$headerHeight: 1rem;
footer{
  $contentWidth: 14.6rem;
  width: $width;
  //height: fit-content;
  //background: #282828;
  //background: url("~static/images/header_bg.png") no-repeat;
  color: #333;
  .link_wrap{
    background: url("~static/images/footer-bg.png") no-repeat;
    background-size: cover;
    width: $width;
  }
  .link{
    width: $contentWidth;
    margin: 0 auto;
    padding-top: .82rem;
    height: 3.56rem;
    display: flex;
    justify-content: space-between;
    .about_us{
      display: flex;
    }
    .contract{
      margin-right: 1rem;
      //font-size: .14rem;
      .footer_logo{
        height: .7rem;
        margin-bottom: .2rem;
      }
      .text{
        color: #7e7e7e;
      }
    }
    .web_content{
      width: 7.06rem;
      display: flex;
      justify-content: space-between;
      nav{
        li{
          margin-bottom: .2rem;
          a{
            color: #7e7e7e;
          }
        }
        .first_link{
          margin-bottom: .28rem;
          a{
            color: #333;
          }
        }
      }
    }
  }
  .copyright{
    width: 100vw;
    //height: .62rem;
    //border-top: 1px solid #3e3e3e;
    color: #696969;
    text-align: center;
    font-size: .12rem;
    .content_wrap{
      width: 13.3rem;
      height: .62rem;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
@media only screen and (max-width : 1024px) and (min-width: 300px) {
  $phoneWidth: 7.5rem;
  $phoneFontSize: .28rem;
  $contentWidth: 7.2rem;

  //底部
  footer{
    width: $phoneWidth;
    height: auto;
    .link_wrap{
      width: $phoneWidth;
    }
    .link{
      width: $phoneWidth;
      height: auto;
      flex-direction: column;
      .about_us{
        justify-content: space-between;
        //margin-bottom: .3rem;
        margin: 0 auto;
        .contract{
          margin-right: 0;
          img{
            display: block;
            margin: 0 auto;
          }
          .text{
            margin: .1rem 0;
          }
        }
      }
      .web_content{
        padding-top: .2rem;
        margin: 0 auto;
      }
      .content_wrap{
        height: auto;
      }
    }
    .copyright{
      width: $phoneWidth;
      height: auto;
      padding: .3rem 0;
      .content_wrap{
        width: $contentWidth;
        height: auto;
        flex-direction: column;
        text-align: center;
        p:nth-of-type(2){
          margin-top: .3rem;
        }
      }
    }
  }
}

</style>
