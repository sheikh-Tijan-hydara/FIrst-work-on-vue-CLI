import { createApp } from 'vue'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue';

 const app = createApp(App);

 app.component('Hello-world', HelloWorld);
 
 app.mount('#app');
 