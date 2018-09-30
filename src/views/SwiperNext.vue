<template>
  <div class="swiper-next">
    <div class="text">
      <transition-group name="fade">
        <p :key="1" v-show="showIndex >= 1">{{text[0]}}</p >
        <p :key="2" v-show="showIndex >= 2">{{text[1]}}</p>
        <a  :key="3" v-show="showIndex >= 3" class="btn-more" @click.prevent="jump2Next">{{text[2]}}</a>
      </transition-group>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import {XButton} from 'vux'
  export default {
    components: {
      XButton
    },
    computed: {
      ...mapGetters([
        'sidebar',
        'language'
      ])
    },
    data() {
      return {
        showIndex: 0,
        text: ['看似美好的事物', '都隐藏着你不知道的另一面', '了解更多']
      }
    },
    methods: {
      jump2Next() {
        this.$router.push({path: '/popular-science'})
      },
      addText(timer=1000) {
        setTimeout(() => {
          if (this.showIndex < this.text.length) {
            this.showIndex++
            this.addText(2000)
          }
        }, timer)
      },
    },
    mounted() {
      this.$nextTick(function () {
        this.addText()
      })
    }
  }
</script>
<style lang="scss">
  @import "style/common";
  .swiper-next{
    background: #000;
    width: 100vw;
    height: 100vh;
    position: relative;
    .btn-more{
      background: #FFFFFF;
      box-shadow: 0 0 12px 0 rgba(255,255,255,0.80);
      border-radius: 35px;
      font-size: 11px;
      color: #000000;
      letter-spacing: 2.38px;
      text-align: center;
      margin-top: 30px;
      width: 110px;
      height: 40px;
      line-height: 40px;
      display: inline-block;
    }
    .text{
      font-size: 18px;
      height: calc(4em + 70px);
    }
  }
</style>
