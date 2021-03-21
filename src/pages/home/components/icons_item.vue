<template>
    <div class="icons">
        <div class="icon" v-for="(item, index) in data" :key="index">
            <img v-lazy="item.imgUrl" alt="">
            <h3>{{item.desc}}</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'icons',
        props: {
            data: {
                type: Array,
                default: null
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/style/mixins.styl'

    .icons
        width 100%
        height 100%
        background #ffffff 
        display flex
        flex-flow row wrap
        .icon
            flex none
            width 25%
            height 50%
            background #ffffff
            overflow hidden
            display flex
            flex-flow column nowrap
            justify-content center
            align-items center
            img 
                width 1.1rem
            h3
                margin-top .12rem        
                width 1.1rem
                ellipsis()     
                text-align center     


</style>