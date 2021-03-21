<template>
    <div class="weekend-card">
        <img :src="itemData.imgUrl" alt="">
        <h1 class="title">{{itemData.title}}</h1>
        <h1 class="description">{{itemData.desc}}</h1>
    </div>
</template>

<script>
    export default {
        name: 'weekend_card',
        props: {
            itemData: {
                type: Object,
                default: null
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .weekend-card
        // height 53.97vw
        // max-height 404.775px
        height 0
        padding-bottom 53.97%
        img
            width 100%
        h1
            color #000
            margin-left .24rem
            margin-top .26rem
            &:last-child
                color gray
</style>
