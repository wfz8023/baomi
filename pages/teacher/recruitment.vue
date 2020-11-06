<template>
  <div class="teacher_recruitment">
    <section class="letter">
      <img src="~static/images/letter.png" alt="">
      <section class="invite">
        <h2>邀请书</h2>
        <article class="rich_content">
          为了满足日益增长的保密人才培训需求，杭州电子科技大学和中孚信息联合共建浙江保密学院培训中心，面向广大涉密人员提供精品讲座和保密
          为了满足日益增长的保密人才培训需求，杭州电子科技大学和中孚信息联合共建浙江保密学院培训中心，面向广大涉密人员提供精品讲座和保密
          为了满足日益增长的保密人才培训需求，杭州电子科技大学和中孚信息联合共建浙江保密学院培训中心，面向广大涉密人员提供精品讲座和保密
          为了满足日益增长的保密人才培训需求，杭州电子科技大学和中孚信息联合共建浙江保密学院培训中心，面向广大涉密人员提供精品讲座和保密
          为了满足日益增长的保密人才培训需求，杭州电子科技大学和中孚信息联合共建浙江保密学院培训中心，面向广大涉密人员提供精品讲座和保密
          为了满足日益增长的保密人才培训需求，杭州电子科技大学和中孚信息联合共建浙江保密学院培训中心，面向广大涉密人员提供精品讲座和保密
          为了满足日益增长的保密人才培训需求，杭州电子科技大学和中孚信息联合共建浙江保密学院培训中心，面向广大涉密人员提供精品讲座和保密
          为了满足日益增长的保密人才培训需求，杭州电子科技大学和中孚信息联合共建浙江保密学院培训中心，面向广大涉密人员提供精品讲座和保密
          为了满足日益增长的保密人才培训需求，杭州电子科技大学和中孚信息联合共建浙江保密学院培训中心，面向广大涉密人员提供精品讲座和保密
          为了满足日益增长的保密人才培训需求，杭州电子科技大学和中孚信息联合共建浙江保密学院培训中心，面向广大涉密人员提供精品讲座和保密
          为了满足日益增长的保密人才培训需求，杭州电子科技大学和中孚信息联合共建浙江保密学院培训中心，面向广大涉密人员提供精品讲座和保密
          为了满足日益增长的保密人才培训需求，杭州电子科技大学和中孚信息联合共建浙江保密学院培训中心，面向广大涉密人员提供精品讲座和保密
          为了满足日益增长的保密人才培训需求，杭州电子科技大学和中孚信息联合共建浙江保密学院培训中心，面向广大涉密人员提供精品讲座和保密
          为了满足日益增长的保密人才培训需求，杭州电子科技大学和中孚信息联合共建浙江保密学院培训中心，面向广大涉密人员提供精品讲座和保密
        </article>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: "teacher-recruitment"
}
</script>

<style lang="scss" scoped>
$contentWidth: 14.6rem;
.teacher_recruitment{
  background: url("~static/images/envelope.png") no-repeat center;
  background-size: cover;
  height: 11.8rem;
  width: 100%;
  overflow: hidden;
  padding-top: 1rem;
  .letter{
    width: $contentWidth;
    margin: 0 auto;
    height: 9.23rem;
    padding-top: 1.1rem;
    position: relative;
    box-shadow: 0 0 .4rem+ #f1f1f1;
    .invite{
      width: 11.76rem;
      height: 4rem;
      position: relative;
      z-index: 999;
      margin: 0 auto;
      overflow: scroll;
      h2{
        text-align: center;
        color: #cb2525;
        line-height: 1;
        margin-bottom: .6rem;
      }
      .rich_content{
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
      background: rgba(0,0,0, .3);
      -webkit-box-shadow: none;
    }

    ::-webkit-scrollbar-track {
      border-radius: 10px;
      background: rgba(0, 0, 0, 0);
      -webkit-box-shadow: none;
    }

    img{
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  img{
    width: 100%;
    height: 9.23rem;
  }
}
</style>
