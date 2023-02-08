import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Pets from '../views/Pets.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/pets',
            component: Pets
        },
        {
            path: '/contact',
            component: Contact
        }
    ]
})

export default router