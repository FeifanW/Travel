<template>
    <div class="banner" @click.prevent="show">
        <img :src="data.bannerImg" alt="">
        <h3>
            <span>{{data.sightName}}</span>
            <span><img :src="icon_pic">{{data.gallaryImgs.length}}</span>
        </h3>
        <m-fade>
            <m-swiper @close="show" v-show="is_show" :list="data.gallaryImgs"></m-swiper>
        </m-fade>
    </div>
</template>

<script>
    import mSwiper from '@/components/base/swiper.vue'
    import mFade from '@/components/base/fade.vue'

    export default {
        components: {mSwiper, mFade},
        data () {
            return {
                is_show: false,
                animation: null,
                icon_pic: require('../../../assets/image/pic.png')
            }
        },
        props: {
            data: {
                type: Object,
                default: null
            }
        },
        methods: {
            show () {
                this.is_show = !this.is_show
            }
        }
    }
</script>

<style lang="stylus" scoped>
    
    .banner
        width 100%
        height 0
        padding-bottom 54.99%
        overflow hidden
        position relative
        img
            width 100%
        h3
            height .5rem
            width 100%
            position absolute
            bottom 0
            color #ffffff
            background linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,1))
            left 0
            display flex
            justify-content space-between
            padding 0 .3rem
            box-sizing border-box
            font-size: .3rem
            span
                &:nth-child(2)
                    min-width 1rem
                    height .3rem
                    padding 0 .16rem
                    background #000    
                    border-radius .5rem
                    font-size .2rem
                    opacity .8
                    display flex
                    justify-content center
                    align-items center
                img
                    width .24rem
                    margin-right .12rem
</style>
