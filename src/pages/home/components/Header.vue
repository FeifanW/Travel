<template>
    <div class="home-header">
        <!-- left -->
        <div class="left">
            <img :src="icon_back" alt="" >
        </div>
        <!-- center -->
        <div class="center">
            <img :src="icon_search" alt=""></i>输入城市/景点/游玩主题
        </div>
        <!-- right -->
        <router-link to="/city">
            <div class="right">
                {{city}}<img :src="icon_down">
            </div>
        </router-link>
    </div>
</template>

<script>
    import store from '@/vuex/index.js'
    import {mapState} from 'vuex'

    export default {
        store,
        data () {
            return {
                icon_back: require('../../../assets/image/back.png'),
                icon_search: require('../../../assets/image/search.png'),
                icon_down: require('../../../assets/image/down.png')
            }
        },
        computed: {
            ...mapState(['city'])
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/style/varibles.styl'

    .home-header
        height $city_H
        background $blue
        display flex
        align-items center
        color #ffffff
        .left
            height .86rem
            width .86rem
            background $backgroundColor 
            text-align center
            line-height .86rem
            img
                width .39rem
        .center
            height .59rem
            flex auto
            padding 0 .12rem
            background #ffffff
            border-radius .12rem
            line-height .59rem
            color #aea7a7
            img
                width .39rem
        .right
            color #ffffff
            height .86rem
            mini-width 1.5rem
            background $backgroundColor 
            display flex
            justify-content center
            align-items center
            padding-left .16rem
            img
                width .39rem    
                margin-left .18rem            
                margin-right .18rem
</style>
