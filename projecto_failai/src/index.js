import { createApp } from 'vue';
import App from './App.vue';
import './css/layout.css';
global.jQuery   = require('jquery');
global.$        = global.jQuery;
window.$        = window.jQuery = require('jquery');
createApp(App).mount("#app");