<template>
    <div class="header">
        <router-link to="/">
            <div class="link">
                <img :src="icon_back" alt="">
            </div>
        </router-link>
        选择城市
    </div>
</template>

<script>
    export default {
        name: 'cityHeader',
        data () {
            return {
                icon_back: require('../../../assets/image/back.png')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/style/varibles.styl'

    .header
        height $header_H
        background $blue
        line-height $header_H
        text-align center
        position relative
        width 100%
        color #ffffff
        .link
            height $header_H
            width $header_H*1.5
            position absolute
            top 0
            left 0
            img
                width .39rem
                transform translate(-.2rem, 0)
</style>
