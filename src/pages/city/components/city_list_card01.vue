<template>
    <div class="card">
        <h1>{{title}}</h1>
        <div class="container">
            <div class="item" v-for="(item, index) in hotCities" :key="index">
                <div class="btn" @click="change(item.name)">{{item.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import store from '@/vuex/index.js'
    import {mapActions} from 'vuex'

    export default {
        props: {
            title: {
                type: String,
                default: ''
            },
            hotCities: {
                tyep: Array,
                default: function () {
                    return [{name: '北京'}]
                }
            }
        },
        methods: {
            ...mapActions(['change_city']),
            change (city_name) {
                this.change_city(city_name)
                this.$router.push('/')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .card
        border-bottom 1px solid #ccc
        h1
            height .5rem
            line-height .5rem
            padding-left .24rem
            border-bottom 1px solid #cccccc
            background #eee
        .container
            padding 0rem .6rem 0rem .24rem
            display flex
            flex-flow row wrap 
            background #ffffff
            .item
                width 33.333%
                height .9rem
                display flex
                justify-content center
                align-items center
                .btn
                    width 1.8rem
                    height .5rem
                    line-height .5rem
                    text-align center 
                    border 1px solid #ccc
                    border-radius 9px
</style>
