<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class='item border-bottom' v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/2005/30/307fa37039eab5cba3.water.jpg_200x200_39faf9c6.jpg',
        title: '颐和园',
        desc: '中国现存最大的皇家园林'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/2005/30/307fa37039eab5cba3.water.jpg_200x200_39faf9c6.jpg',
        title: '颐和园',
        desc: '中国现存最大的皇家园林'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/2005/30/307fa37039eab5cba3.water.jpg_200x200_39faf9c6.jpg',
        title: '颐和园',
        desc: '中国现存最大的皇家园林'
      }]
    }
  }
}

</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl';
  .title
    margin-top: .2rem
    padding-left: .2rem
    line-height: .8rem
    background: #eee
    rext-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
  .item-img
    width: 100%
  .item-info
    padding: .1rem
  .item-title
    line-height: .54rem
    font-size: .32rem
    ellipsis()
  .item-desc
    lint-height: .4rem
    color:#ccc
    ellipsis()
</style>
