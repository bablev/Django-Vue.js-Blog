import VueRouter from 'vue-router'
import Home from "../views/Home";
import SignUp from "../views/SignUp";


export default new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/',
            component: Home
        },
        {
            path: '/auth/signup',
            component: SignUp
        }
    ]
})