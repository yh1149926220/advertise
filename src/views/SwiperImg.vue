<template>
  <div>
    <x-header>第二个页面</x-header>
    <h1>长按查看作者---杨欢</h1>
    <div>
      4张图片，左右滑动
    </div>
    <XButton text="转场滚动" type="primary" @click.native="jump2Animation"></XButton>
    <XButton text="下一页" type="primary" @click.native="jump2Next"></XButton>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import {XButton, XHeader} from 'vux'
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
      return {}
    },
    methods: {
      jump2Animation() {
        this.$router.push({path: '/swiper-animation'})
      },
      jump2Next() {
        this.$router.push({path: '/swiper-next'})
      }
    },
    mounted() {
      this.$nextTick(function () {

      })
    }
  }
</script>
