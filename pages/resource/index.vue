<template>
<div class="lecture_wrap">
    <div class="tabs_wrap">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane v-for="lecture in lectureClassList" :key="lecture.id" :label="lecture.title" :name="lecture.title" :class=" $store.state.$fontClass + '-little-h3' ">
                <div class="lecture" v-if="lectureList.length > 0">
                    <dl v-for="item in lectureList" :key="item.id">
                        <dd>
                            <img :src="item.img.url" :alt="item.img.alt">
                            <div class="msg">
                                <h2 :class="[$store.state.$fontClass + '-title2']">{{ item.title }}</h2>
                            </div>
                        </dd>
                        <dt>
                            <h3 :class="[$store.state.$fontClass + '-title-h3', 'one-ellipsis']">{{ item.title }}</h3>
                            <div class="many-ellipsis" v-html="item.desc">
                            </div>
                        </dt>
                        <nuxt-link class="push_pages" :to="{name: 'resource-lecture-id', params: {id: item.id}}"></nuxt-link>
                    </dl>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
    <section class="pagination">
        <el-pagination hide-on-single-page :current-page="currentPage" :class="$store.state.$fontClass + '-footer-text'" background :pager-count="5" :page-size="pszie" layout="prev, pager, next" :total="total" prev-text="上一页" next-text="下一页" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </section>
</div>
</template>

<script>
export default {
    name: "resource-lecture",
    scrollToTop: true,
    async asyncData({
        $axios,
        env
    }) {
        const lectureClass = await $axios.get('/api/resource/chair/class');
        let lectureClassList = lectureClass.data.result.data;
        const activeName = lectureClassList[0].title;
        // 每页显示个数
        const pszie = 9;
        const lectureListRes = await $axios.get(`/api/resource/chair/class/${lectureClassList[0].id}?page=1&pszie=${pszie}`)

        let lectureList = lectureListRes.data.result.data.data;
        lectureList.map(item => {
            item.img.url = env.BASE_URL + item.img.url;
            return item
        })
        const {
            total
        } = lectureListRes.data.result.data
        console.log("lectureList===>>>>>>>", lectureList)
        return {
            activeName,
            lectureClassList,
            total,
            lectureList,
            pszie
        }
    },
    head() {
        return {
            title: '精品课程',
            meta: [

            ],
        }
    },
    async created() {

    },
    data() {
        return {
            tabIndex: 1,
            currentPage: 1
        }
    },
    methods: {
        async handleClick(tab, event) {
            const {
                lectureClassList,
                pszie,
                $axios
            } = this;
            this.tabIndex = lectureClassList[tab.index].id;
            this.activeName = lectureClassList[0].title;

            const lectureListRes = await $axios.get(`/api/resource/chair/class/${this.tabIndex}?page=1&pszie=${pszie}`)

            this.lectureList = lectureListRes.data.result.data.data;
            // 切换分类换到第一页
            this.currentPage = 1;
            // 当前分类的总数
            this.total = lectureListRes.data.result.data.total;
            // console.log('lectureList>>>>>>>>>', lectureListRes)
            // console.log(this.tabIndex, this.activeName)
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        async handleCurrentChange(val) {
            const {
                $axios,
                tabIndex,
                pszie
            } = this;
            console.log(tabIndex)
            const {
                data
            } = await this.$axios.get(`/api/resource/chair/class/${tabIndex}?page=${val}&pszie=${pszie}`);
            this.lectureList = data.result.data.data
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/resource/typical.scss";
</style>
