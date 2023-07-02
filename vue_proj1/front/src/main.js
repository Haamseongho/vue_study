import Vue from 'vue'
import App from './App.vue'
// router/index.js > views에 vue파일 설정을 관리하는 곳으로 routing 역할을 하기 때문에 router로 뽑고 이를 Vue 생성에 넣어주기 
import router from './router/index.js'  
Vue.config.productionTip = false


// router > index.js를 넘기는 작업 > router로 연동해줘야함
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
