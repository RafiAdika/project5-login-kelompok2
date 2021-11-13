import Vue from "vue";
import Router from "vue-router";
import home from "@/components/home.vue"
import InfoMotor from "@/components/InfoMotor.vue"
import Beli from "@/components/Beli.vue"
import peduli from "@/components/peduli.vue"
import Login from "@/components/login.vue"
import dashboard from "@/components/dashboard.vue"
import InfoMotorAdmin from "@/components/InfoMotorAdmin.vue"
import BeliUser from "@/components/BeliUser.vue"
import homeadmin from "@/components/homeadmin.vue"
Vue.use(Router)

function configRoutes() {
    return [
        {
            path: "/",
            name: "Home",
            component: home
        },
        {
            path: "/InfoMotor",
            name: 'InfoMotor',
            component: InfoMotor
        },
        {
            path: "/Beli",
            name: 'Beli',
            component: Beli
        },
        {
            path: "/peduli",
            name: 'peduli',
            component: peduli
        },
        {
            path: "/login",
            name: 'login',
            component: Login
        },
        {
            path: "/dashboard",
            name: 'dashboard',
            component: dashboard
        },
        {
            path: "/InfoMotorAdmin",
            name: 'InfoMotorAdmin',
            component: InfoMotorAdmin
        },
        {
            path: "/BeliUser",
            name: 'BeliUser',
            component: BeliUser
        },
        {
            path: "/homeadmin",
            name: 'homeadmin',
            component: homeadmin
        },
    ]
}

const router = new Router({
    mode: "history",
    routes: configRoutes(),
    scrollBehavior: () => ({ y: 0 }),
});
export default router;