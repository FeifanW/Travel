<template>
    <div class="container" @click.stop="close">
        <swiper :options="swiperOption" class="swiper">
            <swiper-slide class="swiper-slider" v-for="(item, index) in list" :key="index">
                <img :src="item" alt="" width="100%">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    paginationType: 'fraction',
                    observeParents: true,
                    observer: true
                }
            }
        },
        props: {
            list: {
                type: Array,
                default: null
            }
        },
        methods: {
            close () {
                console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')
                this.$emit('close')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .container
        z-index 3
        position fixed
        top 0
        left 0
        background #000
        right 0
        bottom 0
        .swiper
            width 100%
            height 100%
            .swiper-slider
                display flex
                align-items center
            .swiper-pagination
                color #ffffff
</style>
