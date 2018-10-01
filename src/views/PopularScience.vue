<template>
  <div class="popular-science">
    <save-img class="save-html" v-if="!dataUrl"></save-img>
    <img v-if="dataUrl" :src="dataUrl" class="save-image"/>
    <div class="content">
      <div class="title">爱自己 更要分享给你爱的人</div>
    </div>
    <div class="arrow-top"  @click="jump2Next"></div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import {XButton, XHeader} from 'vux'
  import SaveImg from './SaveImg.vue'
  import html2canvas from 'html2canvas'
  export default {
    components: {
      XButton, XHeader, SaveImg
    },
    computed: {
      ...mapGetters([
        'userInfo'
      ])
    },
    data() {
      return {
        dataUrl: null
      }
    },
    methods: {
      jump2Next() {
        this.$router.push({path: '/ending'})
      }
    },
    mounted() {
      this.$nextTick(function () {
        html2canvas(document.querySelector('#captureId')).then(canvas => {
          let imgUrl = canvas.toDataURL('image/png')
          this.dataUrl = imgUrl
          console.log('生成图片成功')
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
    text-align: center;

    .content{
      position: fixed;
      width: 100vw;
      background: red;
      bottom: 180px;
      top: 0;
      text-align: center;
      .title{
        margin-top: 20px;
        font-size: 20px;
      }
    }

    .arrow-top{
      position: fixed;
      z-index: 1;
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

    .save-html{
      position: fixed;
      top: 0;
    }
    .save-image{
      position: fixed;
      width: 100vw;
      height: 100vh;
      left: 0;
      top: 0;
      opacity: 0;
    }
  }
</style>
