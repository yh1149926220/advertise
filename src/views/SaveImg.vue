<template>
  <div>
    <x-header>科普知识保存图</x-header>
    <h1>保存后的页面---陈冬冬</h1>
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
