<template>
    <div id="app">
        <home-page v-if="isAuthenticated"/>
        <login v-if="!isAuthenticated"/>
    </div>
</template>

<script>
import HomePage from "@/views/HomePage";
import Login from "@/views/Login";

export default {
    name: 'App',
    components: {Login, HomePage},
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    }
}
</script>

<style>
@import "~admin-lte/dist/css/adminlte.css";
@import "~admin-lte/plugins/fontawesome-free/css/all.min.css";
</style>
