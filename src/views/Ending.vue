<template>
  <div>
    <x-header>最后一个页面</x-header>
    <h1>视频---杨欢</h1>
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
    },
    mounted() {
      this.$nextTick(function () {

      })
    }
  }
</script>
