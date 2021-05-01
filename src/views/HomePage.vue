<template>
    <div class="wrapper">
        <nav
            class="main-header navbar navbar-expand navbar-white navbar-light"
            style="z-index: 2"
        >
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" data-widget="pushmenu" href="#">
                        <i class="fas fa-bars"></i>
                    </a>
                </li>
            </ul>

            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a href="#" class="nav-link btn" @click.prevent="logout">
                        <i class="fas fa-power-off"></i> Odjavi se
                    </a>
                </li>
            </ul>
        </nav>

        <sidebar-menu :logo="logo"></sidebar-menu>

        <router-view></router-view>

        <footer class="main-footer" style="padding-left: 50px">
            Copyright &copy; {{ year }}.
            <strong
            >Powered by
                <a href="https://amplitudo.me/" target="_blank">Amplitudo</a>.
            </strong>
        </footer>
    </div>
</template>

<script>
import SidebarMenu from "@/components/layouts/SidebarMenu";
import {LOGOUT} from "@/store/action.types";

export default {
    name: "HomePage",
    props: {
        logo: {
            type: String,
        },
    },
    components: {
        SidebarMenu,
    },
    computed: {
        year() {
            return new Date().getFullYear();
        },
    },
    methods: {
        logout() {
            console.log("kUrac")
            this.$store.dispatch(LOGOUT);
        },
    },
};
</script>