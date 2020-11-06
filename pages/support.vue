<template>
  <div class="support">
    <page-nav
      :nav-list="supportLinkNav"
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
          name: '招贤纳士',
          childName: 'support-environment'
        },
        {
          name: '体育运动',
          childName: 'support-sports'
        }
      ]
    }
  }
}
</script>
