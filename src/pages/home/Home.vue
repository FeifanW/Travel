<template>
    <div>
        <m-header></m-header>
        <m-swiper :list='swiperList'></m-swiper>
        <m-icons :list='iconList'></m-icons>
        <m-recommend :list='recommendList'></m-recommend>
        <m-weekend :list='weekendList'></m-weekend>
        <m-loading v-if="is_loading"></m-loading>
    </div>
</template>

<script>
    import mHeader from "@/pages/Home/components/header.vue"
    import mSwiper from "@/pages/Home/components/swiper.vue"
    import mIcons from "@/pages/Home/components/icons.vue"
    import mRecommend from "@/pages/Home/components/Recommend.vue"
    import mWeekend from "@/pages/Home/components/weekend.vue"
    import mLoading from "@/components/base/loading.vue"
    import axios from 'axios'
    import store from '@/vuex/index.js'

    export default {
        store,
        components: {mHeader, mSwiper, mIcons, mRecommend, mWeekend, mLoading},
        data () {
            return {
                swiperList: [],
                iconList: [],
                recommendList: [],
                weekendList: [],
                old_city: null,
                is_loading: true
            }
        },
        computed: {
            city () {
                return this.$store.state.city
            }
        },
        mounted () {
            this.old_city = this.city
            // this.getDate()
            this.getDate02()
        },
        activated () {
            if (this.old_city !== this.city) {
                this.old_city = this.city
                this.getDate()
            }
        },
        methods: {
            getDate () {
                axios.get('/api/index.json')
                    .then(res => {
                        let data = res.data
                        if (data.ret&&data.data) {
                            this.swiperList = data.data.swiperList
                            this.iconList = data.data.iconList
                            this.recommendList = data.data.recommendList
                            this.weekendList = data.data.weekendList
                        }
                    })
            },
            getDate02 () {
                axios({
                    url: 'https://www.easy-mock.com/mock/5ae977ce0d65f051a34af2ca/travle/home',
                    method: 'get'
                })
                .then(res => {
                     let data = res.data
                        if (data.ret&&data.data) {
                            this.swiperList = data.data.swiperList
                            this.iconList = data.data.iconList
                            this.recommendList = data.data.recommendList
                            this.weekendList = data.data.weekendList
                            this.is_loading = false
                        }
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .box
        width 1rem
        height 1rem
        background pink 
</style>
