import { createApp } from 'vue';
import Home from './components/Home.vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Player from './components/Player.vue';

const routes = [
    { path: '/', component: Home }, // Add this line
    { path: '/player/:roomName', component: Player },
    // Add other routes as needed
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
