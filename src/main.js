import Vue from "vue";
import App from "./App.vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "./router";
import '@/styles/style.css'
import vant from 'vant'; //引入vant
import 'vant/lib/index.css' //引入vant样式
Vue.config.productionTip = false
if (process.env.NODE_ENV === 'development') {
    require("./mock/index.js")
}
Vue.use(vant)
Vue.use(ElementUI)

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");