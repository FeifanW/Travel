<template>
    <div class="card">
        <h3>{{abc}}</h3>
        <p v-for="(item, index) in cities" @click="change(item.name)">{{item.name}}</p>
    </div>
</template>

<script>
    import store from '@/vuex/index.js'
    import {mapActions} from 'vuex'

    export default {
        props: {
            cities: {
                type: Array,
                default: null
            },
            abc: {
                type: String,
                default: "C"
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
        h3
            height .5rem
            line-height .5rem
            padding-left .24rem
            background #eeeeee
            border-bottom 1px solid #ccc
        p
            height .6rem
            line-height .6rem
            padding-left .24rem
            background #ffffff
            border-bottom 1px solid #ccc
</style>
