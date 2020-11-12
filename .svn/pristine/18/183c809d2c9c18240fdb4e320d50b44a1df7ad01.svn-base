<template>
  <div class="skill_wrap">
    <div class="skill">
      <div class="banner">
        <img src="~static/images/skill_banner.png" class="skill_banner" alt="">
        <div class="title">
          <h1 :class="$store.state.$fontClass + '-max'">网络保密技术技能实训</h1>
          <div class="decoration"></div>
        </div>
      </div>
      <div class="summary">
        <div class="summary_text">
          <h2 :class="$store.state.$fontClass + 'littleFont-title2'"><span></span>课程简介</h2>
          <p>围绕国家要求的6个技能方向30个技能知识点，提供四套仿真实战题库，学员举一反三，快速掌握网络保密技术技能。</p>
          <div class="point">
            <div>
              <mark>6</mark>
              <p>个技能方向</p>
            </div>
            <div>
              <mark>30</mark>
              <p>个技能知识点</p>
            </div>
            <div>
              <mark>4</mark>
              <p>套仿真实战题库</p>
            </div>
          </div>
        </div>
        <img src="~static/images/resource_test.png" alt="">
      </div>
      <div class="pic_and_text">
        <img src="~static/images/test_bg.png" alt="">
        <div class="text" :style="{ backgroundImage: `url(${backgroundPic})`}">
          <h2 >与技能大赛完全一致的人机操作界面，学员更易熟悉比赛环境，快速掌握竞赛要求。</h2>
<!--          <h2 :class="$store.state.$fontClass + '-title2'">与技能大赛完全一致的人机操作界面，学员更易熟悉比赛环境，快速掌握竞赛要求。</h2>-->
        </div>
      </div>
      <div class="pof_teach">
        <h1 :class="$store.state.$fontClass + '-max'">网络安全专家授课 </h1>
        <p>
          重点突出，针对性强，培训效果好还可提供渗透测试课程，按照国际上惯用的PTES标准，对渗透测试的流程、步骤、方法和技术逐步展开讲重点突出，针对性强，
          培训效果好还可提供渗透测试课程，按照国际上惯用的PTES标准，对渗透测试的流程、步骤、方法和技术逐步展开讲重点突出，针对性强，培训效果好还可提供
          渗透测试课程，按照国际上惯用的PTES标准，对渗透测试的流程、步骤、方法和技术逐步展开讲
        </p>
        <div class="decoration"></div>
      </div>
      <div class="can_do">
        <div class="bottom_background">
          <section>
            <i class="iconfont icon-yunzhujisaomiao"></i>
            <h3 :class="$store.state.$fontClass + '-title-h3'">扫描与爆破</h3>
            <p class="many-ellipsis">
              讲解Nmap、Awvs、Apps- can等系统漏扫和Web漏扫工具的使用，通过学习掌握漏洞扫描的原理及技巧
            </p>
            <div class="number">

            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "resource-skill",
  data(){
    return{
      backgroundPic: require('~/static/images/test_bg_text.png')
    }
  }
}
</script>

<style lang="scss" scoped>
  $contentWidth: 14.6rem;
  .skill_wrap{
    padding-top: 1.1rem;
  }
  .skill{
    width: 14.6rem;
    background: #fff;
    padding: .26rem;
    margin: 0 auto;
    //margin-top: 1.1rem;
    .skill_banner{
      width: 100%;
      margin: 0 auto;
      display: block;
    }
    .banner{
      position: relative;
      .title{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        h1{
          width: 100%;
          font-weight: bold;
          margin-bottom: .2rem;
          color: #cb2525;
        }
      }
    }
    //课程简介
    .summary{
      width: 100%;
      display: flex;
      align-items: center;
      margin: 1rem 0;
      justify-content: space-between;
      flex-wrap: wrap;
      .summary_text{
        width: 4.76rem;
        h2{
          display: flex;
          align-items: center;
          margin-bottom: .4rem;
          span{
            width: 2px;
            display: block;
            height: .26rem;
            margin-right: .14rem;
            //background: red;
            background: #cb2525;
          }
        }
        p{
          color: #666;
          margin-bottom: .8rem;
        }
        .point{
          display: flex;
          text-align: center;
          justify-content: space-between;
          mark{
            background: none;
            color: #cb2525;
            font-weight: bolder;
            font-size: .48rem;
          }
        }
      }
      img{
        width: 8.4rem;
      }
    }
  //  下方圖文
    .pic_and_text{
      display: flex;
      margin-bottom: 1.1rem;
      img{
        width: 6.04rem;
        height: 3.42rem;
      }
      .text{
        text-align: center;
        width: 8rem;
        height: 3.42rem;
        background-size: cover;
        background-position: center;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        h2{
          font-weight: normal;
          width: 6.3rem;
        }
      }
    }
    //教授授课
    .pof_teach{
      text-align: center;
      padding: 0 1rem;
      p{
        color: #666;
        margin: .32rem 0;
      }
    }
    .can_do{
      width: 100%;
      height: 3.08rem;
      background: url("~static/images/bottom_bg.png") no-repeat center;
      background-size: cover;
      margin-top: 2.38rem;
      position: relative;
      .bottom_background{
        display: flex;
        justify-content: space-around;
        section{
          width: 3.2rem;
          height: 3.8rem;
          background: #fff;
          position: absolute;
          top: -1.47rem;
          box-shadow: 0 -10px .3rem #f2efef;
          padding: .6rem .6rem 0 .6rem;
          text-align: center;
          i{
            color: #cb2525;
            font-size: .6rem!important;
          }
          h3{
            margin: .3rem 0;
          }
          p{
            -webkit-line-clamp: 5;
            color: #666;
          }
          .number{
            //font-size: ;
          }
        }
      }
    }
  }

  .decoration{
    width: .2rem;
    height: 3px;
    background: #cb2525;
    margin: 0 auto;
  }
</style>
