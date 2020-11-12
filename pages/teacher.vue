<template>
  <div class="support">
    <page-nav
      :nav-list="teacherLinkNav"
      :title="banner_title_cn"
      :background-path="bannerImg"
      :en-title="banner_title_en"
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
    const { data } = await $axios.get('/api/teachers/elegant?page=1&pszie=15');
    const { banner_img, banner_title_cn, banner_title_en } = data.result.index;
    // console.log(banner_img)
    return {
      bannerImg: env.BASE_URL + banner_img.url,
      banner_title_cn,
      banner_title_en
    }
  },
  data(){
    return{
      teacherLinkNav:[
        {
          name: '专家风采',
          childName: 'teacher'
        },
        {
          name: '教学团队',
          childName: 'teacher-team'
        },
        {
          name: '招贤纳士',
          childName: 'teacher-recruitment'
        }
      ]
    }
  }
}
</script>
