<template>
    <div class="recommend-card" @click="turnTo(itemData.id)">
        <div class="left">
            <img v-lazy="itemData.imgUrl" alt="">
        </div>
        <div class="right">
            <h1 class="label1">{{itemData.title}}</h1>
            <h1 class="label2">{{itemData.desc}}</h1>
            <h1 class="label3">查看详情</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'recommend_card',
        props: {
            itemData: {
                type: Object,
                default: null
            }
        },
        methods: {
            turnTo (id) {
                this.$router.push(`/detail/${id}`)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/style/mixins.styl'
    .recommend-card
        height 2.4rem
        overflow hidden
        display flex
        align-items center
        background #ffffff
        .left
            width 2rem
            height 2rem
            margin-left .21rem
            margin-right .5rem
            flex none
            img 
                width 100%
                height 100%
        .right
            display flex
            flex-flow column nowrap
            height 80%
            justify-content space-around
            h1
                font-size .35rem
                width 3.9rem
                ellipsis()
            .label1
                font-weight bold
            .label2
                color #999999
                font-size .3rem
            .label3
                width 1.5rem
                height .39rem
                background orange
                border-radius .1rem
                font-size .24rem
                font-weight bold
                color #ffffff
                line-height .39rem
                text-align center
</style>
