<template>
    <scroll class="city-list" ref="scroll">
        <div class="container">
            <city-card01 :title="'当前城市'" :hotCities='current_city'></city-card01>
            <city-card01 :title="'热门城市'" :hotCities="data.hotCities"></city-card01>
            <city-card02 v-for="(v, k) in data.cities" :key="k" :cities="v" :abc="k" :id="k"></city-card02>
        </div>
    </scroll>
</template>

<script>
    import cityCard01 from './city_list_card01'
    import cityCard02 from './city_list_card02'
    import scroll from '@/components/base/scroll.vue'
    import store from '@/vuex/index.js'
    import {mapState} from 'vuex'

    export default {
        store,
        components: {cityCard01, cityCard02, scroll},
        props: {
            data: {
                type: Object,
                default: null
            },
            scrollTo: {
                type: String,
                default: 'A'
            }
        },
        computed: {
            ...mapState(['city']),
            current_city () {
                return [{'name': this.city}]
            }
        },
        watch: {
            scrollTo () {
                let e = document.getElementById(this.scrollTo)
                // console.log(e)
                this.$refs.scroll.scrollTo(e)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .city-list
        position absolute
        top 1.72rem
        bottom 0
        width 100%
        max-width 750px
        background #ffffff
        overflow hidden
</style>
