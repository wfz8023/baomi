<template>
<div class="address">
    <h1 :class="$store.state.$fontClass + '-title-h2'">{{ title || '地理位置' }}</h1>
    <p class="summary">{{ desc || '浙江保密学院培训中心位于杭电东岳校区，与西溪国家湿地公园相邻，茶山竹海环绕，青山绿水相伴，是自然与文化的完美结合。' }}</p>
    <div class="decoration"></div>
    <section class="attractions">
        <div class="item_wrap" v-for="address in addressList" :key="address.id" :style="{background: `url(${address.picture}) no-repeat center`}">
            <div class="item_text_wrap">
                <section :class="['item_text', $store.state.$fontClass + '-title2']">
                    {{ address.title }}
                </section>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    name: "support-address",
    scrollToTop: true,
    async asyncData({
        $axios,
        env
    }) {
        const {
            data
        } = await $axios.get('/api/support/location');
        console.log('addressss', data)
        const {
            title,
            list,
            desc,
            keyword
        } = data.result.data;
        // let addressList = list.map(item => {
        //     item.picture.url = env.BASE_URL + item.picture.url
        //     return item
        // })
        return {
            title,
            desc,
            addressList: list
        }
    },
    data() {
        return {
            backgroundPic: require('~/static/images/site.png')
        }
    }
}
</script>

<style lang="scss" scoped>
$contentWidth: 14.6rem;

.address {
    width: $contentWidth;
    margin: 0 auto;
    padding-top: 1.1rem;
    text-align: center;

    .summary {
        width: 8.1rem;
        color: #666;
        margin: 0 auto;
        padding-top: .44rem;
        padding-bottom: .5rem;
    }

    .decoration {
        width: .2rem;
        height: 2px;
        background: #cb2525;
        margin: 0 auto;
    }

    .attractions {
        margin-top: .5rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        color: #fff;
        text-align: center;

        .item_wrap {
            width: 7.18rem;
            height: 2.78rem;
            overflow: hidden;
            background-size: cover;
            margin-bottom: .3rem;
            position: relative;

            .item_text {
                width: 100%;
                height: 100%;
                border: 0;
                line-height: 2.38rem;
                position: relative;
                z-index: 5;
                transition: border 1000ms ease-in-out;
            }

            .item_text_wrap {
                position: absolute;
                padding: .2rem;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                background: #0004;
                z-index: 1;
                width: 0;
                height: 0;
                opacity: 0;
                transition: all 500ms ease-in-out;
            }
        }

        .item_wrap:hover {
            .item_text_wrap {
                width: 100%;
                height: 100%;
                opacity: 1;

                .item_text {
                    border: 1px solid #cbd6de;
                }
            }
        }
    }
}

@media only screen and (max-width : 1024px) and (min-width: 300px) {
    .address {
        width: 100vw;

        .summary {
            width: 6rem;
        }

        .attractions {
            justify-content: center;

            .item_wrap {
                width: 6.9rem;
            }
        }
    }
}
</style>
