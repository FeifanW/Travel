<template>
    <div class="card" :style="css_card()">
        <!-- 头部 -->
        <h1>
            <div class="left">
                <img :src="icon_start01" v-for="item in start" :key="item">
                <img :src="icon_start02" v-if="has_half">
            </div>
            <div class="right">
                <span class="name">{{name}}</span>
                <span class="date">{{date}}</span>
            </div>
        </h1>
        <!-- 评论内容 -->
        <p :style="css_p()">{{data.p}}</p>
        <div class="for-more">
            <span @click="show" :style="css_btn()"><img :src="icon_down"></span>
        </div>
        <!-- 图片 -->
        <div class="pics" @click.prevent="close" v-if="pic_list.length">
            <div class="pic" v-for="(item, index) in pic_list">
                <img :src="item" alt="">
            </div>
        </div>
        <m-pics :list="this.data.pic" @close="close" v-if="is_show"></m-pics>
    </div>
</template>

<script>
    import mPics from '@/components/base/swiper.vue'

    export default {
        components: {mPics},
        data () {
            return {
                is_show: false,
                show_all: false,
                pic: require('../../../../static/image/highQualityComment1.png'),
                icon_start01: require('../../../assets/image/start.png'),
                icon_start02: require('../../../assets/image/半颗星.png'),
                icon_down: require('../../../assets/image/向下 (1).png')
            }
        },
        props: {
            data: {
                type: Object,
                default: null
            }
        },
        computed: {
            start () {
                return Math.floor(this.data.score/2)
            },
            has_half () {
                let a = this.data.score%2
                return a>1?true:false
            },
            name () {
                let list = [...this.data.name]
                let n = list.length-1
                return `${list[0]}*${list[n]}`
            },
            date () {
                let d = this.data.date
                let year = d.substr(0, 4)
                let month = d.substr(4, 2)
                let date = d.substr(6, 2)
                return `${year}-${month}-${date}`
            },
            pic_list () {
                return this.data.pic.filter((item, index) => index<6)
            }
        },
        methods: {
            close () {
                this.is_show = !this.is_show
            },
            css_p () {
                if (this.show_all) return 
                return {height: "2.1rem"}
            },
            css_btn () {
                if (this.show_all) return {"transform": "rotate(180deg)"}
                return {"transform": "rotate(0deg)"}
            },
            css_card () {
                return {'background-image': `url(${this.pic})`}
            },
            show () {
                this.show_all = !this.show_all
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .card
        // background-image url('/static/image/highQualityComment1.png')
        background-position right top 
        background-repeat no-repeat
        background-size 1.8rem
        h1
            display flex
            justify-content space-between
            height .8rem
            align-items center
            .left
                img
                    width .3rem
            .right
                span 
                    padding-left .12rem
        p
            transition all 2s ease 
            line-height .42rem
            overflow hidden
        .for-more
            height .9rem
            line-height .9rem
            text-align center
            span
                width .9rem
                height .9rem
                display inline-block
                img
                    width .39rem
        .pics
            height 3.48rem
            display flex
            flex-flow row wrap
            justify-content space-between
            align-content space-between
            overflow hidden
            padding-bottom .5rem
            border-bottom 1px solid #cccccc
            .pic
                width 32%
                height 48%
                overflow hidden
                background #eeeeee
                img
                    height 100%
            
</style>
