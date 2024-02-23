// Vue
import { createApp } from "vue";
import AppVue from "./App.vue";
import "./global.css";

// Router
import router from "./router";

// Vuetify
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "dark",
  },
});

createApp(AppVue).use(router).use(vuetify).mount("#app");
