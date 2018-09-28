<template>
  <div>
    <x-header>科普知识</x-header>
    <h1>4张图片，科普知识卡页面---陈冬冬</h1>
    <XButton text="保存图片" type="primary" @click.native="jump2Save"></XButton>
    <XButton text="结束页" type="primary" @click.native="jump2Next"></XButton>
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
      jump2Save() {
        this.$router.push({path: '/save-img'})
      },
      jump2Next() {
        this.$router.push({path: '/ending'})
      }
    },
    mounted() {
      this.$nextTick(function () {

      })
    }
  }
</script>
