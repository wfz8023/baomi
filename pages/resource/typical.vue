<template>
<div class="lecture_wrap">
    <div class="tabs_wrap">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane v-for="lecture in lectureClassList" :key="lecture.id" :label="lecture.title" :name="lecture.title">
                <div class="lecture">
                    <dl v-for="item in lectureList" :key="item.id">
                        <dd>
                            <img :src="item.img.url" :alt="item.img.alt">
                            <div class="msg">
                                <h2 :class="[$store.state.$fontClass + '-title2']">{{ item.title }}</h2>
                                <!--                  <p>了解信息安全的基础理论解析管理要求</p>-->
                            </div>
                        </dd>
                        <dt>
                            <h3 :class="[$store.state.$fontClass + '-title-h3', 'one-ellipsis']">{{ item.title }}</h3>
                            <div class="many-ellipsis" v-html="item.desc">
                            </div>
                        </dt>
                        <nuxt-link class="push_pages" :to="{name: 'resource-classes-id', params:{id: item.id}}"></nuxt-link>
                    </dl>

                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
    <section class="pagination">
        <el-pagination hide-on-single-page :class="$store.state.$fontClass + '-footer-text'" background :pager-count="5" layout="prev, pager, next" :page-size="pszie" :total="total" prev-text="上一页" next-text="下一页" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </section>
</div>
</template>

<script>
export default {
    name: "resource-typical",
    async asyncData({
        $axios,
        env
    }) {
        const lectureClass = await $axios.get('/api/resource/classes/class');
        // 典型班次 分类列表
        let lectureClassList = lectureClass.data.result.data;
        const activeName = lectureClassList[0].title;
        // 每页页数
        const pszie = 9;
        console.log('典型班次 分类列表', lectureClassList)
        const lectureListRes = await $axios.get(`/api/resource/classes/class/${lectureClassList[0].id}?page=1&pszie=${pszie}`)
        // 典型分类 默认第一类别列表
        let lectureList = lectureListRes.data.result.data.data;
        console.log('lectureList', lectureList)
        const {
            total
        } = lectureListRes.data.result.data
        // 宗页数
        const pages = Math.ceil(total / pszie)
        lectureList.map(item => {
            item.img.url = env.BASE_URL + item.img.url;
            return item
        })

        return {
            activeName,
            lectureClassList,
            pages,
            lectureList,
            pszie,
            total
        }
    },
    data() {
        return {
            tabIndex: 1
        }
    },
    methods: {
        async handleClick(tab, event) {
            // this.tabIndex = this.lectureClassList[tab.index].id;
            // this.activeName = this.lectureClassList[0].title;
            const {
                lectureClassList,
                pszie,
                $axios
            } = this;
            this.tabIndex = lectureClassList[tab.index].id;
            this.activeName = lectureClassList[0].title;

            const lectureListRes = await $axios.get(`/api/resource/classes/class/${this.tabIndex}?page=1&pszie=${pszie}`)

            this.lectureList = lectureListRes.data.result.data.data;
            // 切换分类换到第一页
            this.currentPage = 1;
            // 当前分类的总数
            this.total = lectureListRes.data.result.data.total;
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        // async handleCurrentChange(val) {
        //     const {
        //         $axios,
        //         pszie
        //     } = this;
        //     const {
        //         data
        //     } = await $axios.get(`/api/resource/classes/class/${this.tabIndex}?page=${val}&pszie=${pszie}`);
        //     this.lectureList = data.result.data.data
        // }
        async handleCurrentChange(val) {
            const {
                $axios,
                tabIndex,
                pszie
            } = this;
            console.log(tabIndex)
            const {
                data
            } = await this.$axios.get(`/api/resource/classes/class/${tabIndex}?page=${val}&pszie=${pszie}`);
            this.lectureList = data.result.data.data
        }
    }
}
</script>

<style lang="scss" scoped>
@import "assets/css/resource/typical.scss";

@media only screen and (max-width : 1024px) and (min-width: 300px) {
    .lecture {
        width: 6.9rem;
        display: flex;
        justify-content: center;

        dl {
            width: 100%;
            margin-right: 0;
        }
    }

    .pagination {
        width: 100%;

        .el-pagination {
            display: flex;
            justify-content: center;

            .number {
                min-width: .2rem !important;
                margin: 0 2px;
                //height: 100%;
                height: .6rem !important;
            }
        }

        .el-pagination.is-background .btn-next,
        .el-pagination.is-background .btn-prev,
        .el-pagination.is-background .el-pager li {
            margin: 0 2px !important;
            height: .6rem !important;
        }
    }
}
</style>
