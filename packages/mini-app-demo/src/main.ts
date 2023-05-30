import { createSSRApp } from "vue";
import App from "./App.vue";
import { createStore } from '../../model/src/index';
export function createApp() {
  const app = createSSRApp(App);
  const store = createStore();

  app.use(store);
  return {
    app,
  };
}
