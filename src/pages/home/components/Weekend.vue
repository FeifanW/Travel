<template>
    <div class="weekend" v-if="list.length">
        <h1>周末去哪儿</h1>
        <m-card v-for="(item, index) in list" :key="index" :itemData="item"></m-card>
    </div>
</template>

<script>
    import mCard from './weekend_card.vue'

    export default {
        name: 'weekend',
        components: {mCard},
        data () {
            return {
                
            }
        },
        props: {
            list: {
                type: Array,
                default: null
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .weekend
        h1
            height .8rem
            padding-left .24rem
            line-height .8rem
            color #000000
            font-weight bold

</style>
