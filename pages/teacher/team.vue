<template>
<div class="team_list">
    <div class="team">
        <news-item
          :link-msg="{name: 'teacher-info-id'}"
          :id="item.id" v-for="item in list"
          :key="item.id" link_title="查看详情"
          class-name="item_style"
          :pic-path="item.img"
          :title="item.title"
          :summary="item.desc"
          pic-height="2.7rem"
        ></news-item>
    </div>
    <section class="pagination">
        <el-pagination hide-on-single-page :class="$store.state.$fontClass + '-footer-text'" background :pager-count="5" layout="prev, pager, next" :total="total" :page-size="psize" prev-text="上一页" next-text="下一页" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </section>
</div>
</template>

<script>
import NewsItem from "@/components/NewsItem";
export default {
    name: "teacher-team",
    scrollToTop: true,
    components: {
        NewsItem
    },
    //  teachers/team?page=1&pszie=15
    async asyncData({
        $axios,
        env
    }) {
        const psize = 6;
        const {
            data
        } = await $axios.get(`/api/teachers/team?page=1&pszie=${psize}`);
        console.log(data)
        const {
            total
        } = data.result;
        let list = data.result.data.data;

        console.log('===>>>>>>>>>', list)

        // list.map(item => {
        //     item.img = typeof item.img === "string" && JSON.parse(item.img);
        //     item.img.url = env.BASE_URL + item.img.url;
        //     return item
        // })
        return {
            psize,
            total,
            list
        }
    },
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        async handleCurrentChange(val) {
            // console.log(`当前页: ${val}`);
            const {
                data
            } = await this.$axios.get(`/api/teachers/team?page=${val}&pszie=${psize}`);
            // console.log(data)
            this.list = data.result.data.data
        }
    }
}
</script>

<style lang="scss" scoped>
.team {
    width: 14.6rem;
    padding-top: 1.1rem;
    display: flex;
    flex-wrap: wrap;

    dl {
        margin-right: .2rem;
    }

    dl:nth-of-type(3n) {
        margin-right: 0;
    }

    // justify-content: space-between;
    margin: 0 auto;
}

.item_style {
    width: 4.7rem;

    dt {
        img {
            height: 2.7rem;
        }
    }
}

.pagination {
    width: 14.66rem;
    margin: 0 auto;
    padding: .86rem 0 0 0;

    // 修改element样式
    /deep/ .el-pagination {
        text-align: center;
        font-size: .16rem;

        @mixin common() {
            height: .4rem;
            border: 1px solid #d1d1d1;
            //display: flex;
            //align-items: center;
            line-height: .4rem;
            border-radius: 0;
            font-weight: normal;
            background: #fff;
        }

        .more {
            @include common;
            color: #666;
        }

        .more:hover {
            border: 1px solid #cb2525;
            color: #cb2525;
        }

        .el-pager .more::before {
            line-height: .4rem;
        }

        .number {
            @include common;
            color: #666;
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }

        .number:hover {
            border: 1px solid #cb2525;
            color: #cb2525;
        }

        .active {
            background: #cb2525 !important;
            color: #fff !important;
            border: 0;
        }

        .btn-next,
        .btn-prev {
            //color: #666;
            min-width: .4rem;
            padding: 0 .1rem;
            overflow: hidden;
            @include common;

            span {
                line-height: .4rem;
                height: .4rem;
            }
        }
    }
}

@media only screen and (max-width : 1024px) and (min-width: 300px) {
    .team {
        width: 6.9rem;

        dl {
            margin-right: 0;
            width: 100%;

            dt img {
                height: 3.7rem;
            }
        }
    }

    .pagination {
        width: 100%;

        .el-pagination {
            display: flex;
            justify-content: center;

            .number {
                min-width: .2rem !important;
                margin: 0 3px;
            }
        }
    }

}
</style>
