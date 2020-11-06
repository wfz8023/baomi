<template>
  <section class="news_detail">
    <div class="banner">
      <img class="banner_bg" src="~/static/images/overview_banner.png" alt="咨询中心">
    </div>
    <section class="context">
      <article>
        <div class="title">
          <h1 :class="[$store.state.$fontClass + '-title2', 'one-ellipsis']">
            我校研究生杨平安以第一作者第一单位在Journal of Materials Chemistry C发表论文
          </h1>
          <div class="article_msg ">
            <p>
              <i :class="[$store.state.$fontClass + '-content', 'iconfont', 'icon-shijian']"/>
              <span>2020-09-30</span>
            </p>
            <p>
              <i class="iconfont icon-guankanshezhi"/>
              <span>3666</span>
            </p>
            <p>
              <i class="iconfont icon-yonghu"/>
              <span>电子信息学院</span>
            </p>
          </div>
        </div>
        <section class="content">
          近日，我校电子信息学院智能传感器和微系统教育部工程中心王高峰教授团队研究生杨平安以第一作者第一单位在Journal of Ma
          近日，我校电子信息学院智能传感器和微系统教育部工程中心王高峰教授团队研究生杨平安以第一作者第一单位在Journal of Ma
          近日，我校电子信息学院智能传感器和微系统教育部工程中心王高峰教授团队研究生杨平安以第一作者第一单位在Journal of Ma
          近日，我校电子信息学院智能传感器和微系统教育部工程中心王高峰教授团队研究生杨平安以第一作者第一单位在Journal of Ma
          近日，我校电子信息学院智能传感器和微系统教育部工程中心王高峰教授团队研究生杨平安以第一作者第一单位在Journal of Ma
          近日，我校电子信息学院智能传感器和微系统教育部工程中心王高峰教授团队研究生杨平安以第一作者第一单位在Journal of Ma
          近日，我校电子信息学院智能传感器和微系统教育部工程中心王高峰教授团队研究生杨平安以第一作者第一单位在Journal of Ma
          近日，我校电子信息学院智能传感器和微系统教育部工程中心王高峰教授团队研究生杨平安以第一作者第一单位在Journal of Ma
        </section>
      </article>
      <section class="turn_page">
        <div class="turn_default">
          <div>
            <span>上一篇</span>
            <i/>
            <p class="one-ellipsis">校信息经济中心多项研究成果获得</p>
          </div>
          <img src="~static/images/news_show.png" alt="">
        </div>
        <div class="turn_next turn_default">
          <div>
            <span>下一篇</span>
            <i/>
            <p class="one-ellipsis">校信息经济中心多项研究成果获得</p>
          </div>
          <img src="~static/images/news_show.png" alt="">
        </div>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  name: "news-detail",

}
</script>

<style lang="scss" scoped>
.news_detail{
  background: #eef1f4;
  padding-top: 1rem;
}
.banner{
  height: 4.84rem;
  position: relative;
  .banner_bg{
    width: 100%;
    display: block;
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
.context{
  $top: 1.92rem;
  position: relative;
  top: -$top;
  width: 14.6rem;
  margin: 0 auto;
  //padding: 0 1rem;
}
article{
  $top: 1.92rem;
  //position: relative;
  //top: -$top;
  //width: 14.6rem;
  //margin: 0 auto;
  padding: 0 1rem .96rem 1rem;
  background: #fff;
  .title{
    padding: .7rem 0 .44rem 0;
    height: $top;
    border-bottom: 1px dashed #cbd0df;
    margin-bottom: .46rem;
  }
  .title .article_msg{
    color: #666;
    display: flex;
    margin-top: .3rem;
    p{
      margin-right: .5rem;
    }
  }
  .content{
    color: #666;
  }
}
.turn_page{
  width: 14.6rem;
  height: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: .4rem;
  .turn_default{
    background: #fff;
    width: 7.18rem;
    height: 1.4rem;
    display: flex;
    align-items: center;
    padding: 0 .26rem 0 .4rem;
    div{
      flex: 1;
      display: flex;
      align-items: center;
      p{
        width: 70%;
      }
      i{
        display: block;
        height: .24rem;
        width: 1px;
        background: #cbd0df;
        margin: 0 .16rem;
      }
    }
  }
  .turn_next{
    flex-direction: row-reverse;
    padding: 0 .4rem 0 .26rem;
    div{
      flex-direction: row-reverse;
    }
  }
  img{
    display: block;
    width: 2rem;
    height: .98rem;
  }
}
</style>
