import Vue from 'vue'

import 'normalize.css/normalize.css'
import 'vux/src/styles/index.less'

import '@/styles/index.scss' // global css
import * as filters from './filters' // global filters

import App from './App'
import router from './router'
import store from './store'

import VueVideoPlayer from 'vue-video-player'

import { AlertPlugin, ToastPlugin, ConfirmPlugin, ConfigPlugin, LoadingPlugin, WechatPlugin, AjaxPlugin } from 'vux'

Vue.use(VueVideoPlayer)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin, {position: 'bottom'})
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
Vue.use(ConfigPlugin, {
  $layout: 'VIEW_BOX'
})

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
