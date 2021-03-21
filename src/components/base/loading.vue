<template>
    <div class="loading">
        <img :src="gif" alt="">
    </div>
</template>

<script>
    export default {
        data () {
            return {
                gif: require('../../../static/image/loading.gif')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .loading
        position fixed
        top 0
        bottom 0
        left 0
        right 0
        display flex
        justify-content center
        align-items center

</style>
