import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 职责 依赖项目需要的资源(js模块  css资源)
// 实例化根实例 render() 渲染APP组件 然后挂载到#app的容器内容
new Vue({
  render: h => h(App)
}).$mount('#app')
