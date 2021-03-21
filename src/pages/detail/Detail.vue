<template>
    <div class="detail">
        <m-banner :data="data" class="banner" v-if="data"></m-banner>
        <m-header class="header"></m-header>
        <m-score class="score" v-if="data"></m-score>
        <m-comment :list="data.user_comment" class="comment" v-if="data"></m-comment>
        <m-loading v-if="is_loading"></m-loading>
    </div>
</template>

<script>
    import mBanner from './components/banner.vue'
    import mHeader from './components/header.vue'
    import mScore from './components/score.vue'
    import mComment from './components/comment.vue'
    import mLoading from "@/components/base/loading.vue"
    import axios from 'axios'

    export default {
        name: 'detail',
        components: {mBanner, mHeader, mScore, mComment, mLoading},
        data () {
            return {
                data: null,
                is_show: true,
                is_loading: true
            }
        },
        methods: {
            getData () {
                axios.get('https://www.easy-mock.com/mock/5ae977ce0d65f051a34af2ca/travle/detail')
                    .then(res => {
                        let data = res.data
                        if (data.ret&&data.data) {
                            this.data = data.data
                            this.is_loading = false
                        }
                    })
            }
        },
        mounted () {
            this.getData()
        }
    }
</script>

<style lang="stylus" scoped>
    .detail
        position relative
        .header
            z-index 1
        .score
            margin-bottom .21rem
            z-index 0

</style>
