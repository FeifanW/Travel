<template>
    <div class="city-search">
        <input type="text" placeholder="输入城市名或拼音" v-model="value" class="search-input">
        <scroll class="scroll" v-show="is_list_show" v-if="cities">
            <ul class="search-list">
                <li v-show="is_title_show">没有搜索到内容</li>
                <li v-for="(item, index) in cities_list" :key="index" @click="change(item)">{{item}}</li>
            </ul>
        </scroll>
    </div>
</template>

<script>
    import scroll from '@/components/base/scroll.vue'
    import store from '@/vuex/index.js'
    import {mapActions} from 'vuex'

    export default {
        name: 'citySearch',
        store,
        data () {
            return {
                value: '',
                timer: null,
                cities_list: [],
                list_show: false
            }
        },
        props: {
            cities: {
                type: Object,
                default: null
            }
        },
        computed: {
            is_title_show () {
                if (this.cities_list.length===0) return true
                return false
            },
            is_list_show () {
                if (this.value) return true
                return false
            }
        },
        watch: {
            value () {
                this.cities_list = []
                if (!this.value) return
                if (this.timer) clearTimeout(this.timer)
                this.timer = setTimeout(() => {
                    for (let key in this.cities) {
                        this.cities[key].map(item => {
                            if (item.name.indexOf(this.value)>-1||item.spell.indexOf(this.value)>-1) {
                                this.cities_list.push(item.name)
                            }
                        })
                    }
                }, 100)
            }
        },
        methods: {
            ...mapActions(['change_city']),
            change (city_name) {
                this.change_city(city_name)
                this.$router.push('/')
            } 
        },
        components: {scroll}
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/style/varibles.styl'
    
    .city-search
        background $blue
        height $header_H
        line-height $header_H
        padding 0 .24rem
        .search-input
            width 100%
            height .6rem
            border-radius .12rem
            padding 0 .24rem
            box-sizing border-box
            color #666
            text-align center
        .scroll
            width 100%
            height 100%
            position absolute   // 相对于city组件
            top $header_H*2
            z-index 1
            left 0
            right 0
            bottom 0
            background #eee
            overflow hidden
            .search-list
                padding .39rem
                li
                    height .7rem
                    line-height .8rem
</style>
