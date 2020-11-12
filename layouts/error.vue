<template>
<div>
    404
</div>
</template>

<script>
export default {
    name: "error",
    created() {
        this.$router.push('/404.html')
        // console.log()
    }
}
</script>

<style lang="scss" scoped>
div {
    padding-top: 1rem;
    background: red;
}
</style>
