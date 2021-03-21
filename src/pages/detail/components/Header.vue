<template>
    <div class="detail-header">
        <div class="header" :style="css_header" v-show="!show_btn">
            <span>景点详情</span>
            <span class="back" @click="turnTo">
                <img :src="icon_back" alt="">
            </span>
        </div>
        <div class="btn" v-show="show_btn" @click="turnTo"><img :src="icon_back"></div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                icon_back: require('../../../assets/image/back.png'),
                show_btn: true,
                css_header: {
                    opacity: 0
                }
            }
        },
        methods: {
            scroll () {
                let top = document.body.scrollTop||document.documentElement.scrollTop
                let opacity = top/140
                opacity = opacity>1?1:opacity
                // console.log(top, opacity)
                this.css_header = {opacity}
                if (top>60) {
                    this.show_btn = false
                } else {
                    this.show_btn = true
                }
            },
            turnTo () {
                this.$router.push('/')
            }
        },
        mounted () {
            window.addEventListener('scroll', this.scroll)
        },
        activated () {
            window.addEventListener('scroll', this.scroll)
        },
        deactivated () {
            window.removeEventListener('scroll', this.scroll)
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/style/varibles.styl'

    .detail-header
        position fixed
        top 0
        width 100%
        max-width 750px
        .header
            color #ffffff
            height $header_H
            line-height $header_H
            text-align center
            background $blue
            .back
                position absolute
                width $header_H
                height $header_H
                left 0
                top 0
                text-align left 
                padding-left .28rem
                img
                    width .39rem
        .btn
            border-radius .4rem
            width .8rem
            height .8rem
            display flex
            justify-content center
            align-items center
            background rgba(0,0,0,.7)
            position absolute
            color #fff
            top .3rem
            left .3rem
            img
                width .39rem
</style>
