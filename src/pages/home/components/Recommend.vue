<template>
    <div class="recommend" v-if="list">
        <h1><img :src="icon_love"> 猜你喜欢</h1>
        <m-card v-for="(item, index) in list" :key="index" :itemData="item"></m-card>
        <h1>查看更多</h1>
    </div>
</template>

<script>
    import mCard from './Recommend_card.vue'
    export default {
        components: {mCard},
        data () {
            return {
                icon_love: require('../../../assets/image/love.png')
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
    .recommend
        margin-top .21rem
        h1
            height .7rem
            line-height .7rem
            background #fff
            &:last-child
                text-align center 
            img
                width .39rem
                margin-left .3rem
                margin-right .1rem
</style>
