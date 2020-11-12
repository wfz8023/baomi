<template>
<!-- 搜索结果 -->
<div class="search-result-container">
    <!-- 左侧 -->
    <div class="left">
        <div class="list-wrapper">
            <ul class="list-wrap">
                <li class="list-item">
                    <a class="list-item-link" href="#">
                        <span class="list-item-title ellipsis-1">用爱心点燃梦想 让梦想照进现实北汽集团获助残公益荣誉证书</span>
                        <span class="list-item-date">2020-02-05</span>
                    </a>
                </li>
                <li class="list-item">
                    <a class="list-item-link" href="#">
                        <span class="list-item-title ellipsis-1">用爱心点燃梦想 让梦想照进现实北汽集团获助残公益荣誉证书</span>
                        <span class="list-item-date">2020-02-05</span>
                    </a>
                </li>
                <li class="list-item">
                    <a class="list-item-link" href="#">
                        <span class="list-item-title ellipsis-1">用爱心点燃梦想 让梦想照进现实北汽集团获助残公益荣誉证书</span>
                        <span class="list-item-date">2020-02-05</span>
                    </a>
                </li>
                <li class="list-item">
                    <a class="list-item-link" href="#">
                        <span class="list-item-title ellipsis-1">用爱心点燃梦想 让梦想照进现实北汽集团获助残公益荣誉证书</span>
                        <span class="list-item-date">2020-02-05</span>
                    </a>
                </li>
                <li class="list-item">
                    <a class="list-item-link" href="#">
                        <span class="list-item-title ellipsis-1">用爱心点燃梦想 让梦想照进现实北汽集团获助残公益荣誉证书</span>
                        <span class="list-item-date">2020-02-05</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <!-- 中间 -->
    <div class="center"></div>
    <!-- 右侧 -->
    <!--<div class="right">
        <div class="title-wrapper">
            <i class="search-icon iconfont iconsousuo"></i>
            <span class="title-text">搜索结果</span>
        </div>
        <div class="item-wrapper">
            <span class="radio">● </span>
            <span class="item-name">集团新闻</span>
            <span class="number-count"> （1）</span>
        </div>
        <div class="item-wrapper active">
            <span class="radio">● </span>
            <span class="item-name">产业新闻</span>
            <span class="number-count"> （4）</span>
        </div>
        <div class="item-wrapper">
            <span class="radio">● </span>
            <span class="item-name">人才培养</span>
            <span class="number-count"> （1）</span>
        </div>
    </div>-->
</div>
</template>

<script>
export default {
    name: "search",
    transition: 'search',
    async asyncData({
        $axios,
        env
    }) {

    },
    data() {
        return {

        }
    },
}
</script>

<style lang="scss" scoped>
html {
    background: #F1F1F1;
}

.search-result-container {
    padding-top: 80px;
    max-width: 1300px;
    // margin: 80px auto;
    margin: 0 auto;
    display: flex;
}

.left {
    background: #FFFFFF;
    flex: 1;
    padding: 40px 90px;
}

.list-item {
    border-bottom: 1px solid #e9e9e9;
}

.list-item-title {
    flex: 1;
}

.list-item-link {
    color: #333333;
    display: flex;
    align-items: center;
    font-size: 14px;
    height: 70px;
}

.list-item-link:hover {
    color: #D3291A;
    transition: color 0.5s;
    opacity: 1;
}

.list-item-date {
    color: #999999;
    flex-shrink: 0;
    padding-left: 50px;
}

.list-item-link:hover .list-item-date {
    color: #D3291A;
    transition: color 0.5s;
    opacity: 1;
}

.center {
    flex: 0.06;
}

.right {
    flex-shrink: 0;
    width: 312px;
}

.title-wrapper {
    height: 66px;
    display: flex;
    align-items: center;
    padding: 0 24px;
    background: #D3291A;
    color: #FFFFFF;
    font-size: 18px;
}

.search-icon {
    margin-right: 12px;
}

.item-wrapper {
    height: 66px;
    display: flex;
    align-items: center;
    padding: 0 24px;
    background: #FFFFFF;
    color: #999999;
    font-size: 14px;
    margin-top: 10px;
    cursor: pointer;
    transition: color 0.6s;
}

.item-wrapper.active {
    color: #D3291A;
}

.item-wrapper:hover {
    color: #D3291A;
}

.radio {
    margin-right: 10px;
}

/**
 * 媒体查询
 */
@media screen and (max-width: 800px) {
    .search-result-container {
        flex-direction: column-reverse;
    }

    .left {
        padding: 0 25px;
    }

    .center {
        flex: 0;
        display: none;
    }

    .title-wrapper {
        display: none;
    }

    .right {
        flex-direction: row;
        display: flex;
        width: 100%;
        border-bottom: 1px double #F1F1F1;
    }

    .item-wrapper {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 10px;
        border-left: 1px solid #C1C1C1;
    }

    .item-wrapper:first-child {
        border-left: none;
    }

    .item-wrapper.active {
        color: #FFFFFF;
        background: #D3291A;
    }

    .item-wrapper:hover {
        color: #FFFFFF;
        background: #D3291A;
    }

    .radio {
        display: none;
        margin: 0;
    }

    .number-count {
        display: none;
        margin: 0;
    }
}
</style>
