<template>
<div class="wrap">
    <section class="teacher_msg">
        <div class="pic_wrap">
            <img :src="showObj.portrait" alt="">
        </div>
        <div class="teacher_name">
            <h3 :class="$store.state.$fontClass + '-title2'">{{ showObj.name }}</h3>
            <p class="teacher_level">{{ showObj.job }}</p>
            <div class="teacher_summary" v-html="showObj.desc"></div>
        </div>
    </section>
    <div class="select_teacher">
        <div class="teacher_item" v-for="teacher in list" :key="teacher.id" @click="showThisTeacher(teacher)">
            <div class="teacher_img_wrap">
                <img :src="teacher.portrait" alt="">
            </div>
            <div class="teacher_selected">
                <h3 :class="$store.state.$fontClass + 'littleFont-title-h3' ">{{ teacher.name }}</h3>
                <div class="job one-ellipsis">{{ teacher.job }}</div>
                <div class="many-ellipsis" v-html="teacher.desc"></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "teacher-expertStyle",
    scrollToTop: true,
    async asyncData({
        $axios,
        env
    }) {
        const {
            data
        } = await $axios.get('/api/teachers/elegant?page=1&pszie=15');
        const {
            total
        } = data.result.data;
        let teacherList = data.result.data.data;

        const list = teacherList.map(item => {
            const pic = env.BASE_URL + item.portrait;

            const obj = {
                ...item,
                portrait: pic
            }
            // console.log(obj)
            return obj
        })

        return {
            total,
            list,
            showObj: list[0]
        }
    },
    methods: {
        showThisTeacher(teacher) {
            this.showObj = teacher
        }
    }
}
</script>

<style lang="scss" scoped>
$contentWidth: 14.6rem;

.wrap {
    width: $contentWidth;
    margin: 0 auto;
}

.teacher_msg {
    $picWidth: 5.4rem;
    padding-top: 1.56rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .pic_wrap {
        width: $picWidth;
        height: $picWidth;
        //background: #363638;
        margin-right: 1.1rem;

        img {
            display: block;
            margin: 0 auto;
            height: $picWidth;
            max-width: $picWidth;
        }
    }

    .teacher_name {
        flex: 1;
        padding-top: .54rem;

        h3 {
            font-weight: normal;
            line-height: 1;
            margin-bottom: .08rem;
        }

        .teacher_level {
            color: #a8a8a8;
            padding-bottom: .36rem;
            border-bottom: 1px solid #a8a8a8;
            margin-bottom: .4rem;
        }

        .teacher_summary {
            color: #666;
        }
    }
}

.select_teacher {
    width: $contentWidth;
    margin: 0 auto;
    padding-top: .8rem;
    display: flex;
    //justify-content: space-between;
    flex-wrap: wrap;

    .teacher_item {
        padding: .08rem;
        margin-bottom: .1rem;
        margin-right: .24rem;
        display: flex;
        align-items: center;
        border: 1px solid #d1d1d1;

        .teacher_img_wrap {
            width: 1.1rem;
            height: 1.45rem;
            margin-right: .14rem;
            display: block;
            position: relative;
            overflow: hidden;
        }

        .teacher_img_wrap img {
            height: 100%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }

        .teacher_selected {
            width: 1.9rem;

            .job {
                color: #a8a8a8;
                padding-bottom: .1rem;
                margin-bottom: .1rem;
                border-bottom: 1px dashed #a8a8a8;
            }

            .many-ellipsis {
                color: #666;
                -webkit-line-clamp: 2;
                padding: 0;
                margin: 0;
                border: 0;
                height: .6rem;
                //height: .7rem;
                overflow: hidden;
            }
        }
    }

    .teacher_item:nth-of-type(4n) {
        margin-right: 0;
    }

    .teacher_item:hover {
        border: 1px solid #cb2525;
    }
}

@media only screen and (max-width : 1024px) and (min-width: 300px) {
    $phoneWidth: 6.9rem;

    .wrap {
        width: $phoneWidth;
        margin: 0 auto;

        .teacher_msg {
            //flex-wrap: wrap;

            justify-content: center;
            align-items: center;
            flex-direction: column;

            .pic_wrap {
                margin: 0;
            }
        }
    }

    .select_teacher {
        width: 100%;

        .teacher_item {
            margin-right: .2rem;
          height: 2.4rem;
            .teacher_selected{
              .many-ellipsis{
                height: auto;
                //height: .7rem!important;
                //padding-bottom: .2rem;
                -webkit-line-clamp: 2!important;
              }
            }

        }

        .teacher_item:nth-of-type(2n) {
            margin-right: 0;
        }
    }

}
</style>
