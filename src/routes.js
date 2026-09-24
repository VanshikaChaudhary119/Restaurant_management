import {createRouter, createWebHistory} from 'vue-router'
import Home from './components/Home.vue'
import Signup from './components/Signup.vue'

const routes =[
    {
        name:'Home',
        component:Home,
        path:'/'
    },
    {
        name:'Signup',
        component:Signup,
        path:'/sign-up'
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router