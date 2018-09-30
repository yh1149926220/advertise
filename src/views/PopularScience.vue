<template>
  <div class="popular-science">
    <div  class="save-content" id="captureId" v-if="!dataUrl">
      <div class="name">蓝天白云</div>
      <div class="img"></div>
      <div class="text1">世界爱乳日，关爱你的乳房</div>
      <div class="text1">世界爱乳日，关爱你的乳房</div>
      <div class="text1">世界爱乳日，关爱你的乳房</div>
    </div>
    <img v-if="dataUrl" :src="dataUrl" class="save-image"/>
    <div class="arrow-top"  @click="jump2Next"></div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import {XButton, XHeader} from 'vux'
  import html2canvas from 'html2canvas'
  export default {
    components: {
      XButton, XHeader
    },
    computed: {
      ...mapGetters([
        'sidebar',
        'language'
      ])
    },
    data() {
      return {
        dataUrl: null
      }
    },
    methods: {
      jump2Save() {
        this.$router.push({path: '/save-img'})
      },
      jump2Next() {
        this.$router.push({path: '/ending'})
      }
    },
    mounted() {
      this.$nextTick(function () {
        html2canvas(document.querySelector('#captureId')).then(canvas => {
          let imgUrl = canvas.toDataURL('image/png')
          console.log('imgUrl=', imgUrl)
          this.dataUrl = imgUrl
        })
      })
    }
  }
</script>
<style lang="scss">
  .popular-science{
    background: url("../assets/icon_1.jpg") no-repeat center;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    position: relative;
    .arrow-top{
      position: fixed;
      bottom: 20px;
      background: #FFFFFF;
      background: url("../assets/icon_up.png") no-repeat center;
      background-size: 100%;
      width: 46px;
      height: 45px;
      left: 50%;
      transform: translateX(-50%);
      box-shadow: 0 0 16px 0 rgba(0,0,0,0.50);
    }
    .save-content{
      position: fixed;
      background: white;
      width: 100vw;
      height: 100vh;
      overflow-y: scroll;
      text-align: center;
      .img{
        background: url("../assets/icon_1.jpg") no-repeat center;
        background-size: cover;
        width: 260px;
        height: 370px;
        margin: 0 auto;
      }
      .name{
        font-size: 24px;
        margin: 20px 0;
      }
      .text1{
        margin: 20px 0;
        font-size: 25px;
      }
    }
    .save-image{
      position: fixed;
      overflow-y: scroll;
      width: 100%;
    }
  }
</style>
