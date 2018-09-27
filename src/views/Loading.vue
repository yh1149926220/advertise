<template>
  <div>
    <h1>我是loading页面</h1>
    <div>
      我的语言是{{language}}
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'sidebar',
        'language'
      ])
    }
  }
</script>
