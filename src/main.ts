import Vue from "vue";
import App from "./App.vue";
import './svg-sprite';
import './directives';
import "@lottiefiles/lottie-player";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
