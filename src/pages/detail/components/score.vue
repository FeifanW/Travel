<template>
    <div class="score">
        <div class="top">
            <div class="left">
                <h1><span>4.9分</span><span>很棒</span></h1>
                <h2><span>2634条评论</span><span>3 条攻略</span></h2>
                <img :src="icon_enter" alt="">
            </div>
            <div class="right">
                <h1><span>景点简介</span></h1>
                <h2><span>开放时间 . 贴士</span></h2>
                <img :src="icon_enter" alt="">
            </div>
        </div>
        <div class="bottom">
            <img :src="icon_position" alt="">
            <p>四川省成都市武侯区天府大道北段1700号环球中心（地铁1号线锦城广场站）</p>
            <img :src="icon_enter" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                icon_position: require('../../../assets/image/定位.png'),
                icon_enter: require('../../../assets/image/进入箭头.png')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    card()
        

    .score
        width 100%
        height 2.34rem
        position relative
        background #ffffff
        top -.15rem
        border-top-left-radius .8em
        border-top-right-radius .8em
        overflow hidden
        .bottom
            display flex
            justify-content space-between
            align-items center
            height 50%
            margin 0 .25rem
            border-top 1px solid #cccccc
            p
                padding 0 .2rem
            img
                width .5rem
                &:nth-child(3)
                    margin-right .3rem
        .top
            width 100%
            height 50%
            display flex
            .left
                width 50%
                height 100%
                position relative
                img
                    position absolute
                    top .3rem
                    right .5rem
                    width .5rem
                h1
                    height 50%
                    display flex
                    align-items flex-end
                    span 
                        color orange
                        &:nth-child(1)
                            font-size .39rem
                            padding-left .3rem
                        &:nth-child(2)
                            font-size .28rem
                            padding-left .3rem
                h2
                    height 50%
                    display flex
                    align-items flex-start
                    margin-top .1rem
                    span 
                        color gray
                        font-size .15rem
                        padding-left .21rem
            .right
                width 50%
                height 100%
                position relative
                img 
                    position absolute
                    top .3rem
                    right .5rem
                    width .5rem
                h1
                    height 50%
                    display flex
                    align-items flex-end
                    span 
                        color #000
                        padding-left .3rem
                        
                h2
                    height 50%
                    display flex
                    align-items flex-start
                    margin-top .1rem
                    span 
                        color gray
                        font-size .15rem
                        padding-left .3rem
</style>
