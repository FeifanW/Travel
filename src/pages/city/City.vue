<template>
    <div class="city">
        <city-header @click="test"></city-header>
        <city-search :cities="data.cities" v-if="data"></city-search>
        <city-list :data="data" :scrollTo="scrollTo" v-if="data"></city-list>
        <a-z :cities="data.cities" @change="change" v-if="data"></a-z>
        <m-loading v-if="is_loading"></m-loading>
    </div>
</template>

<script>
    import cityHeader from './components/city_header.vue'
    import citySearch from './components/city_search.vue'
    import cityList from './components/city_list.vue'
    import aZ from './components/nav_abc.vue'
    import mLoading from "@/components/base/loading.vue"
    import axios from 'axios'

    export default {
        components: {cityHeader, citySearch, cityList, aZ, mLoading},
        data () {
            return {
                data: null,
                scrollTo: 'A',
                is_loading: true
            }
        },
        methods: {
            change (data) {
                // console.log(data)
                this.scrollTo = data
            },
            test () {
                console.log(333333333333333333)
            }
        },
        mounted () {
            axios.get('https://www.easy-mock.com/mock/5ae977ce0d65f051a34af2ca/travle/city')
                .then(res => {
                    let data = res.data
                    if (data.ret&&data.data) {
                        this.data = data.data
                        this.is_loading = false
                    }
                })
        }
    }
</script>

<style lang="stylus" scoped>
    .city
        position relative
        width 100%
        height 100vh
        max-width 750px
</style>
