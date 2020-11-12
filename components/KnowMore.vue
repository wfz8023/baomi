<template>
  <nuxt-link
    :class="[className]"
    :to="{name, params}"
  >
    {{ title }}
  </nuxt-link>
</template>

<script>
export default {
  name: "KnowMore",
  props:['href', 'title', 'className', 'name', 'params'],
}
</script>

<style lang="scss" scoped>
$linkHeight: .48rem;
$linkWidth: 1.38rem;
a{
  display: block;
  width: $linkWidth;
  height: $linkHeight;
  color: #fff;
  text-align: center;
  border: 1px solid #fff;
  border-radius: $linkHeight;
  line-height: $linkHeight;
}
</style>

