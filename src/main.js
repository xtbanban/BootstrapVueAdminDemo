// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import store from './store'

Vue.use(VueResource)

//App框架
import './assets/app/css/bootstrap.css'
import './assets/app/css/animate.css'
import './assets/app/css//font-awesome.min.css'
import './assets/app/css/simple-line-icons.css'
import './assets/app/css/font.css'
import './assets/app/css/app.css'

Vue.config.productionTip = false

/*Ajax 拦截器*/
Vue.http.interceptors.push(function(request, next) {
    this.showLoading = true
    next((response) => {
        this.showLoading = false;
        return response
    })
})

// 注册一个全局自定义指令 v-toggle
Vue.directive('toggleClass', {
    bind: function(el, binding) {
        el.onclick = function(e) {
        	// e.preventDefault();
            	e.stopPropagation();
            if (el.className.indexOf(binding.value.class) < 0) {
                el.className = el.className + ' ' + binding.value.class
            } else {
                el.className = el.className.replace(' ' + binding.value.class, '');
            }
        }
        if(binding.value.close){
	        var doc=document;
	        if (doc.addEventListener) { //所有主流浏览器，除了 IE 8 及更早 IE版本
	              doc.addEventListener("click", function(){
	              	 el.className = el.className.replace(' ' + binding.value.class, '');
	              });
	          } else if (doc.attachEvent) { // IE 8 及更早 IE 版本
	              doc.attachEvent("onclick", function(){
	              	 el.className = el.className.replace(' ' + binding.value.class, '');
	              });
	          }
          }
    }
})

// 实例化
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
