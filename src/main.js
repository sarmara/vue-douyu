// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FontAwesome from './assets/Font-Awesome/css/font-awesome.css'
import animate from "animate.css";
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.config.productionTip = false

// 过滤器
Vue.filter('formatNumber',function(num){
return num<1000?num:(num/1000).toFixed(2)+'万';
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

function fontSize(){
  var deviceWidth=document.documentElement.clienWidth || document.body.clientWidth;
  if(deviceWidth>640){
    deviceWidth=640;
  }
  var fontSize=deviceWidth/6.4;
  document.getElementsByTagName('html')[0].style.fontSize=fontSize;
}
fontSize();
window.onresize=function(){
  fontSize();
}