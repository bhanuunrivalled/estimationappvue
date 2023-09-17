import { createApp } from 'vue';
import Home from './components/Home.vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Player from './components/Player.vue';
import Userlist from './components/UserList.vue';


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})


const routes = [
    { path: '/', component: Home }, // Add this line
    { path: '/player/:roomName', component: Player },
    { path: '/userlist/:roomName', component: Userlist },
    // Add other routes as needed
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.mount('#app');
