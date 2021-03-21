<template>
    <div class="home-swiper">
        <swiper :options="swiperOption" class="swiper">
            <swiper-slide class="swiper-slider" v-for="item in list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: 'HomeSwiper',
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    loop: true,
                    autoplay: 3000      // 这是__swiper3__的写法,和版本4不同
                }
            }
        },
        props: {
            list: {
                type: Array,
                default: null
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .swiper-pagination >>> .swiper-pagination-bullet-active
        background #fff !important 
        width .3rem
        border-radius .1rem
        transition width .8s ease
        opacity .8
    .swiper-pagination >>> .swiper-pagination-bullet
        background #fff
        opacity .8
    .home-swiper
        width 100%
        height 31.2vw
        max-height 234px
        overflow hidden    
        background #eeeeee
        .swiper
            .swiper-slide
                .swiper-img
                    width 100%
</style>