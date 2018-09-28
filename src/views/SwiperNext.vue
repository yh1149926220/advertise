<template>
  <div>
    <x-header>轮播图下一页</x-header>
    <h1>了解更多---陈冬冬</h1>
    <XButton text="了解它" type="primary" @click.native="jump2Next"></XButton>
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
      jump2Next() {
        this.$router.push({path: '/popular-science'})
      }
    },
    mounted() {
      this.$nextTick(function () {

      })
    }
  }
</script>
