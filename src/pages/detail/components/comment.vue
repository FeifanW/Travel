<template>
    <div class="comment">
        <h1><span></span>用户评论</h1>
        <m-card v-for="(item, index) in list" :data="item" :key="index"></m-card>
    </div>
</template>

<script>
    import mCard from './comment_card.vue'

    export default {
        components: {mCard},
        props: {
            list: {
                type: Array,
                default: null
            }
        }

    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/style/varibles.styl'

    .comment
        padding 0 .39rem
        background #ffffff
        h1
            border-bottom 1px solid #cccccc
            height .9rem
            line-height .9rem 
            span 
                display inline-block
                width .1rem
                height .3rem
                background $blue
                margin-right .3rem
                transform translate(0, .05rem)
</style>
