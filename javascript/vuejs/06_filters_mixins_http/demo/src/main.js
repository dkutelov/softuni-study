import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en";

Vue.config.productionTip = false;

Vue.use(ElementUI, { locale });
// Vue.directive("highlight", function(el, binding) {
//   el.style.backgroundColor = binding.value;
// });

// Vue.directive("event", function(el, binding) {
//   console.log(el, binding);
// });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
