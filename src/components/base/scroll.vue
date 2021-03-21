<template>
    <div class="scroll" ref="scroll">
        <slot></slot>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    // import BScroll from '@/src/components/base/scroll.vue' --->>> 引用地址

    export default {
        data () {
            return {
                scroll: null
            }
        },
        props: {
            click: {
                type: Boolean,
                default: true
            }
        },
        mounted () {
            setTimeout(() => {
                this.init()
            }, 1000)
        },
        methods: {
            init () {
                this.scroll = new BScroll(this.$refs.scroll, {
                    click: this.click
                })
            },
            scrollTo (e) {
                this.scroll.scrollToElement(e)
            }
        }
    }
</script>

<style scoped>

</style>