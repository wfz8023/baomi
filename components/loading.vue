<template>
<div class="c-first-loading">
    <div class="#nuxt-loading">
        <div></div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {}
    },
}
</script>

<style lang="scss">
#nuxt-loading>div {
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border: .5rem solid #F5F5F5;
    border-left: .5rem solid #25a665;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: nuxtLoading 1.1s infinite linear;
    animation: nuxtLoading 1.1s infinite linear;
}

.c-first-loading {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    background-color: #fff;
    animation: firstLoading 2s ease 2s forwards;

    img {
        width: 8%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 100;
    }

    .progress {
        width: 100%;
        height: 8px;
        position: absolute;
        top: 0;
        left: 0;

        div {
            height: 100%;
            background: #00663a;
            animation: loading 2s linear forwards;
        }
    }

    .green {
        width: 100%;
        height: 50%;
        background: #00663a;
        position: absolute;
        top: -50%;
        left: 0;
        animation: green 1.5s ease 2s forwards;
    }
}

@media screen and(max-width: 1024px) {
    .c-first-loading img {
        width: 20%;
    }
}

@keyframes loading {
    0% {
        width: 0;
    }

    15% {
        width: 30%;
    }

    40% {
        width: 45%;
    }

    50% {
        width: 60%;
    }

    60% {
        width: 65%;
    }

    85% {
        width: 90%;
        opacity: 1;
    }

    100% {
        width: 100%;
        opacity: 0;
    }
}

@keyframes green {
    0% {
        top: 0;
    }

    80% {
        opacity: 1;
    }

    100% {
        top: 130%;
        opacity: 0;
    }
}

@keyframes firstLoading {
    0% {
        top: 0;
    }

    80% {
        opacity: 1;
    }

    100% {
        top: 130%;
        opacity: 0;
    }
}
</style>
