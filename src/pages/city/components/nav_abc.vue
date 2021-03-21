<template>
    <ul class="a-z" :style="cssABC()">
        <li v-for="(v, k) in cities" :key="k"
            @click="click"
            @touchstart.stop.prevent="touchstart"
            @touchmove="touchmove"
            @touchend="touchend" 
            class="list">{{k}}</li>
        <div class="alert" v-show="is_touching">
            <h1>{{current_abc}}</h1>
        </div>
    </ul>
</template>

<script>
    export default {
        data () {
            return {
                is_touching: false,
                element_a: null,
                timer: null,
                current_abc: 'A'
            }
        },
        props: {
            cities: {
                type: Object,
                default: null
            }
        },
        methods: {
            cssABC () {
                if (this.is_touching) return {'background': 'rgba(0,0,0,.5)'}
            },
            click (e) {
                this.$emit('change', e.target.innerText)
            },
            touchstart () {
                console.log('touchstart,--->>>start')
                this.is_touching = true
            },
            touchmove (e) {
                if (this.is_touching) {
                    if (this.timer) clearTimeout(this.timer)
                    this.timer = setTimeout(() => {
                        let a = this.element_a
                        let top = a.top                     // A 的top在屏幕中的y坐标
                        let height = a.height                   // A 的高度
                        let y = e.touches[0].clientY        // 手指在屏幕中的y坐标
                        let s = y - top                     // 手指距离 A 的距离
                        let index = parseInt(s/height)      // 手指在第几个list上面--->>A:0, B:1, C:2....
                        let list_length = document.getElementsByClassName('list').length
                        if (0<=index&&index<list_length) {  // 如果 index -->> 0 <= index < list.length
                            this.current_abc = document.getElementsByClassName('list')[index].innerText
                            this.$emit('change', this.current_abc)
                            console.log(`touchmove,--->>>ing--->>>`, this.current_abc)
                        }
                    }, 16)
                }
            },
            touchend () {
                this.is_touching = false
                console.log('touchend, --->>>over')
            }
        },
        mounted () {
            this.element_a = document.getElementsByClassName('list')[0].getBoundingClientRect()
            console.log(this.element_a.top)
        }        
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/style/varibles.styl'

    .a-z
        position absolute
        top 0
        bottom 0
        right 0
        width .5rem
        display flex
        flex-flow column nowrap
        justify-content center
        align-items center
        li
            color $blue
            width 100%
            height .39rem
            line-height .39rem
            text-align center
        .alert
            position fixed
            top 0
            bottom 0
            left 0
            right 0
            display flex
            justify-content center
            align-items center
            font-size 1rem
            h1
                border-radius .5rem
                width 2rem
                height 2rem
                line-height 2rem
                text-align center
                color #fff
                background rgba(0,0,0,.5)
                overflow hidden
</style>
