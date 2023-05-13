import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// element plus
import ElementPlus from "element-plus";
// element icons
import * as Icons from "@element-plus/icons-vue";
// element css
// import "element-plus/dist/index.css";

const app = createApp(App)
// 注册element Icons组件
Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key as keyof typeof Icons]);
});
app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')
