<template>
<!-- 搜索结果 -->
<div class="search-result-container">
    <!-- 左侧 -->
    <div class="left">
        <div class="list-wrapper">
            <ul class="list-wrap" v-if="activeIndex === 0 || activeIndex === 2">
                <li class="list-item" v-for="(item, index) in ArrList" :key="index">
                    <nuxt-link class="list-item-link" :to="{name: activeIndex === 0 ? 'news-detail-id' : 'teacher-info-id', params:{ id : item.id} }">
                        <span class="list-item-title ellipsis-1">{{item.title}}</span>
                        <span class="list-item-date">{{timestampToYear(item.created_at)}}</span>
                    </nuxt-link>
                </li>
            </ul>
            <ul v-if="activeIndex === 1" class="list-wrap">
                <div v-if="resourceList[0]">
                    <li class="list-item" v-for="(item, index) in resourceList[0]" :key="'0'+index">
                        <nuxt-link class="list-item-link" :to="{ name: 'resource-lecture-id', params:{ id : item.id} }">
                            <span class="list-item-title ellipsis-1">{{item.title}}</span>
                            <span class="list-item-date">{{timestampToYear(item.created_at)}}{{item.id}}</span>
                        </nuxt-link>
                    </li>
                </div>
                <div v-if="resourceList[1]">
                    <li class="list-item" v-for="(item, index) in resourceList[1]" :key="'1'+index">
                        <nuxt-link class="list-item-link" :to="{ name: 'resource-classes-id', params:{ id : item.id} }">
                            <span class="list-item-title ellipsis-1">{{item.title}}</span>
                            <span class="list-item-date">{{timestampToYear(item.created_at)}}</span>
                        </nuxt-link>
                    </li>
                </div>
            </ul>
        </div>
    </div>
    <!-- 中间 -->
    <div class="center"></div>
    <!-- 右侧 -->
    <div class="right">
        <div class="title-wrapper">
            <i class="search-icon iconfont iconsousuo"></i>
            <span class="title-text">搜索结果</span>
        </div>
        <div :class="['item-wrapper', {'active': activeIndex === 0}]" @click="changeSearchList(0)">
            <span class="radio">● </span>
            <span class="item-name">咨询中心</span>
            <span class="number-count"> （{{newsLen || 0}}）</span>
        </div>
        <div :class="['item-wrapper', {'active': activeIndex === 1}]" @click="changeSearchList(1)">
            <span class="radio">● </span>
            <span class="item-name">课程资源</span>
            <span class="number-count"> （{{resourceLen || 0}}）</span>
        </div>
        <div :class="['item-wrapper', {'active': activeIndex === 2}]" @click="changeSearchList(2)">
            <span class="radio">● </span>
            <span class="item-name">师资队伍</span>
            <span class="number-count"> （{{teachersLen || 0}}）</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "search-id",
    transition: 'search',
    async asyncData({
        $axios,
        env,
        params
    }) {
        const {
            data
        } = await $axios.post('/api/search', {
            keywords: params.id
        });
      console.log(data)

      const {
            news,
            resource,
            teachers
        } = data.result;
        console.log('搜索页面', data)

        const newsLen = news.length;
        const resourceLen = resource.chair.length + resource.classes.length;
        const teachersLen = teachers.team.length;
        const newsList = news;

        const teachersList = teachers.team
        let resourceList = {
            0: resource.chair,
            1: resource.classes
        };

        // console.log('resourcelist--===>>>>>', data)
        return {
            newsList,
            resourceList,
            teachersList,
            teachersLen,
            resourceLen,
            newsLen,
            activeIndex: 0,
            showList: newsList,
            ArrList: newsList,
            id: params.id
        }
    },
    data(){
        return{
          ArrList:[]
        }
    },
    methods: {
        changeSearchList(index) {
            const {
                newsList,
                resourceList,
                teachersList
            } = this;

            this.activeIndex = index;

            this.ArrList = index === 0 ? newsList : index === 1 ? resourceList : teachersList;
        },
        timestampToYear(timestamp) {
            let date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
            let Y = date.getFullYear() + '-';
            let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
            let D = date.getDate() + ' ';
            let h = date.getHours() + ':';
            let m = date.getMinutes() + ':';
            let s = date.getSeconds();
            Y = Y < 10 ? '0' + Y : Y;
            M = M < 10 ? '0' + M : M;
            D = D < 10 ? '0' + D : D;

            return Y + M + D;
        },
    },
}
</script>

<style lang="scss" scoped>
html {
    background: #F1F1F1;
}

.search-result-container {
    padding-top: 1rem;
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
