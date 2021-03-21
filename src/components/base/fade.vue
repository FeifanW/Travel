<template>
    <transition name="fade" class="fade">
        <slot></slot>
    </transition>
</template>

<script>
    // import mFade from '@/components/base/fade.vue' ----==========>>>绝对路径
    export default {
        
    }
</script>

<style lang="stylus" scoped>
    .fade-enter, .fade-leave-to{
       opacity: 0;
    }
    .fade-enter-active, .fade-leave-active{
        transition: opacity .5s
    }
</style>
