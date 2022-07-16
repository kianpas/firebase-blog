import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index.js";
import router from "./router";
import BaseIcon from "./components/ui/BaseIcon";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("BaseIcon", BaseIcon);

app.mount("#app");
