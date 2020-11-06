<template>
  <div class="team_list">
    <div class="team">
      <news-item
        link_title="查看详情"
        class-name="item_style"
        picPath="~/static/images/teacher_569.png"
        title="教学团队青龙队"
        summary="9月18日至20日，第十六届全国敏感元件与传感器学术会议在辽宁沈阳隆重召开，我校和杭州师范我校和杭州师范"
        pic-height="2.7rem"
      ></news-item>
      <news-item
        link_title="查看详情"
        class-name="item_style"
        picPath="~/static/images/teacher_569.png"
        title="教学团队青龙队"
        summary="9月18日至20日，第十六届全国敏感元件与传感器学术会议在辽宁沈阳隆重召开，我校和杭州师范我校和杭州师范"
        pic-height="2.7rem"
      ></news-item>
      <news-item
        link_title="查看详情"
        class-name="item_style"
        picPath="~/static/images/teacher_569.png"
        title="教学团队青龙队"
        summary="9月18日至20日，第十六届全国敏感元件与传感器学术会议在辽宁沈阳隆重召开，我校和杭州师范我校和杭州师范"
        pic-height="2.7rem"
      ></news-item>
      <news-item
        link_title="查看详情"
        class-name="item_style"
        picPath="~/static/images/teacher_569.png"
        title="教学团队青龙队"
        summary="9月18日至20日，第十六届全国敏感元件与传感器学术会议在辽宁沈阳隆重召开，我校和杭州师范我校和杭州师范"
        pic-height="2.7rem"
      ></news-item>
    </div>
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
</template>

<script>
import NewsItem from "@/components/NewsItem";
export default {
  name: "teacher-team",
  components:{ NewsItem },
}
</script>

<style lang="scss" scoped>
.team{
  width: 14.6rem;
  padding-top: 1.1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
}
.item_style{
  width: 4.7rem;
  dt{
    img{
      height: 2.7rem;
    }
  }
}

.pagination{
  width: 14.66rem;
  margin: 0 auto;
  padding: .86rem 0 0 0;
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

</style>
