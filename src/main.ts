import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import { createPinia } from 'pinia'
import { createVueless } from "vueless";

const app = createApp(App);

const vueless = createVueless();
app.use(router);
app.use(createPinia());
app.use(vueless)
app.mount('#app');