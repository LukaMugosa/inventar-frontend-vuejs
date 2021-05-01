import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from "@/views/example/Dashboard";
import Error404 from "@/views/error-pages/Error404";

Vue.use(VueRouter);

export  default new VueRouter({
    routes: [
        {
            path: "/",
            component: Dashboard,
            name: "Dashboard",
        },
        {
            path: "*",
            component: Error404,
            name: 'Error404'
        }
    ],
    mode: 'history'
})