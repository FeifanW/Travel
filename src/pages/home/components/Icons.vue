<template>
    <div class="slider-icons" v-if="list.length">
        <swiper class="swiper" :options="options">
            <swiper-slide class="swiper-slider" v-for="(item, index) in page" :key="index">
                <icons-page :data='item'></icons-page>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    import iconsPage from '@/pages/Home/components/icons_item.vue'
    import index from 'vue';

    export default {
        data () {
            return {
                options: {
                    autoplay: false
                }
            }
        },
        props: {
            list: {
                type: Array,
                default: null
            }
        },
        computed: {
            page () {
                let page = []
                this.list.map((item, index) => {
                    let number = parseInt(index/8)
                    if (!page[number]) page[number]=[]
                    page[number].push(item)
                })
                return page
            }
        },
        components:　{iconsPage}
    }
</script>

<style lang="stylus" scoped>
    .slider-icons
        width 100%
        height 50vw
        max-height 375px
        background #ffffff
        overflow hidden
        .swiper
            width 100%
            height 100%
</style>