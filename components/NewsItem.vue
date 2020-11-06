<template>
  <dl :class="[$store.state.$fontClass + '-content', className]">
    <dt>
      <img :style="{'height': picHeight}" src="~/static/images/teacher_569.png" alt="">
      <span v-if="date">
      {{ date }}
    </span>
    </dt>
    <dd>
      <h3 :class="[$store.state.$fontClass + '-title-h3', 'one-ellipsis']">{{ title }} </h3>
      <p class="many-ellipsis">{{ summary }}</p>
      <know-more
        href="/"
        :title="link_title"
        class-name="white"
      ></know-more>
    </dd>
  </dl>
</template>

<script>
import KnowMore from "~/components/KnowMore";
export default {
  name: "news-item",
  components:{KnowMore},
  props: [
    'date',
    'link_title',
    'title',
    'summary',
    'active',
    'className',
    'picPath',
    'picHeight'
  ],
  created() {
    console.log(this.picHeight)
  }
}
</script>

<style lang="scss" scoped>
$width: 7.18rem;
dl {
  cursor: pointer;
  width: $width;
  margin-bottom: .2rem;
  dt{
    width: 100%;
    position: relative;
    img {
      width: 100%;
      height: 3.5rem;
      display: block;
    }
    span{
      position: absolute;
      left: 0;
      bottom: 0;
      width: 1.8rem;
      height: .74rem;
      line-height: .74rem;
      text-align: center;
      color: #fff;
      font-family: "宋体",serif;
      font-weight: bold;
      background: rgba(203, 37, 37, .8) ;
    }
  }
  dd{
    width: 100%;
    padding: 0 .3rem .2rem .3rem;
    background: #fff;
    border: 1px solid #e2e2e2;
    border-top: 0;
    overflow: hidden;
    h3{
      margin-top: .24rem;
      color: #333;
    }
    p{
      margin: .2rem 0 .3rem;
      color: #666;
    }
  }
  .white{
    background: #fff;
    color: #cb2525;
    border: 1px solid #cb2525;
  }
}
dl:hover{
  box-shadow: 0 0 .6rem #f0f0f0;
  dd{
    border-bottom: 1px solid #cb2525;
    a{
      background: #cb2525;
      border: 0;
      color: #fff;
    }
  }
}
</style>
