<template>
<div class="lecture_id">
    <div class="classroom">
        <div class="classroom_top">
            <div class="class_pic" :style="{ backgroundImage: `url(${img.url})`}">
                <h1 :class="$store.state.$fontClass + '-title-h2'">{{ title }}</h1>
            </div>
            <section class="class_name">
                <h1 :class="$store.state.$fontClass + '-title-h2'">{{ title }}</h1>
                <p class="one-ellipsis">
                    <i class="iconfont icon-yonghu" />
                    面向对象：{{ object }}
                </p>
                <p class="one-ellipsis">
                    <i class="iconfont icon-shijian" />
                    培训时间：{{ training_time }}
                </p>
                <p class="one-ellipsis">
                    <i class="iconfont icon-yonghu" />
                    说明：{{ explain }}
                </p>
            </section>
        </div>
        <div class="introduce_wrap">
            <div class="introduce">
                <h3 :class="$store.state.$fontClass + '-title2'">课程介绍</h3>
            </div>
            <p>
                {{desc}}
            </p>
        </div>
        <div class="recommend">
            <div class="introduce">
                <h3 :class="$store.state.$fontClass + '-title2'">课程推荐</h3>
            </div>
            <nav class="recommends">
                <li v-for="(item, index) in recommend" :key="index">
                    {{ index + 1 }}、{{ item.title }}
                </li>
            </nav>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "resource-classes-id",
    scrollToTop: true,
    async asyncData({
        $axios,
        env,
        params
    }) {
        const {
            data
        } = await $axios.get(`/api/resource/classes/info/${params.id}`);

        const {
            desc,
            explain,
            id,
            img,
            object,
            recommend,
            title,
            training_time
        } = data.result.data

        return {
            desc,
            explain,
            id,
            img,
            object,
            recommend,
            title,
            training_time
        }
    },
}
</script>

<style lang="scss" scoped>
$contentWidth: 14.6rem;

.lecture_id {
    //overflow: hidden;
    background: #eef1f4;
    //padding-top: 1rem;
}

.pages_background {
    background: #eef1f4;
}

.banner {
    height: 4.84rem;
    margin-top: 1rem;
    position: relative;

    .banner_bg {
        width: 100%;
    }

    .banner_text {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-align: center;

        h1 {
            color: #fff;
            margin: .16rem;
        }

        .text_en p {
            color: #e3dfdd;
            margin: 0 .14rem;
        }
    }
}

.classroom {
    width: $contentWidth;
    margin: 0 auto;
    position: relative;
    top: -2rem;
    z-index: 999;

    //height: 100px;
    .classroom_top {
        padding: .6rem;
        background: #fff;
        display: flex;
        margin-bottom: .4rem;

        .class_pic {
            width: 6rem;
            height: 3.46rem;
            margin-right: .3rem;
            background-size: contain;
            color: #fff;

            h1 {
                text-align: center;
                line-height: 3.46rem;
            }
        }

        .class_name {
            width: 6.4rem;

            h1 {
                margin: .2rem 0 .4rem 0;
            }

            p {
                color: #333;
            }
        }

    }

    .introduce_wrap {
        background: #fff;
        margin-bottom: .4rem;

        p {
            width: 100%;
            padding: .5rem .6rem;
            color: #666;
        }
    }

    /*
  .introduce{
    height: 1rem;
    padding: 0 .6rem;
    border-bottom: 1px solid #ccc;
    width: 100%;
    display: flex;
    align-items: center;
    h3{
      position: relative;
    }
    h3::before {
      content: '';
      display: block;
      width: .48rem;
      height: .48rem;
      //width: 331rpx;
      //height: 208rpx;
      background-image: url('~static/images/circle.png');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      position: absolute;
      left: -.24rem;
      top: -.2rem;
    }
  }
*/
    .recommend {
        background: #fff;
    }
}

.introduce {
    height: 1rem;
    padding: 0 .6rem;
    border-bottom: 1px solid #ccc;
    width: 100%;
    display: flex;
    align-items: center;

    h3 {
        position: relative;
    }

    h3::before {
        content: '';
        display: block;
        width: .48rem;
        height: .48rem;
        //width: 331rpx;
        //height: 208rpx;
        background-image: url('~static/images/circle.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        position: absolute;
        left: -.24rem;
        top: -.2rem;
    }
}

.recommend {
    overflow: hidden;
}

.recommend .recommends {
    padding: 0 .6rem;
    margin: .24rem 0;
    color: #666;

    li {
        padding: .28rem 0;
        border-bottom: 1px dashed #d7d7d7;
    }
}

@media only screen and (max-width : 1024px) and (min-width: 300px) {
    .classroom {
        width: 6.9rem;

        .classroom_top {
            flex-wrap: wrap;
            justify-content: center;

            .class_pic {
                margin-right: 0;
            }

            h1 {
                text-align: center;
            }
        }
    }
}
</style>
