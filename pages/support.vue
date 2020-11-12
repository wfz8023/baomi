<<<<<<< .mine
<template>
  <div class="support">
    <page-nav
      :nav-list="supportLinkNav"
      :title = 'title'
      :background-path = 'bannerImg'
      :en-title = "enTitle"
    ></page-nav>
  </div>
</template>

<script>
import PageNav from "@/components/PageNav";
export default {
  name: "support",
  components:{
    PageNav
  },
  async asyncData({ $axios, env }){
    const { data } = await $axios.get('/api/support/location');
    const banner = data.result.index;
    const { banner_img, banner_title_cn, banner_title_en } = banner;

    return {
      bannerImg: env.BASE_URL + banner_img.url,
      title: banner_title_cn,
      enTitle: banner_title_en
    }
  },
  data(){
    return{
      supportLinkNav:[
        {
          name: '地理位置',
          childName: 'support'
        },
        {
          name: '教学条件',
          childName: 'support-condition'
        },
        {
          name: '食宿环境',
          childName: 'support-environment'
        },
        {
          name: '体育运动',
          childName: 'support-sports'
        }
      ]
    }
  },
}
</script>
