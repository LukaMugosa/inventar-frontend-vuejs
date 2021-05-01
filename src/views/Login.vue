<template>
    <div class="hold-transition login-page">
        <div class="login-box">
            <!-- /.login-logo -->
            <div class="card card-outline card-primary">
                <div class="card-header text-center">
                    <router-link :to="{name:'Login'}" class="h1"><b>Moj</b>Inventar</router-link>
                </div>
                <div class="card-body">
                    <p class="login-box-msg">Prijava</p>

                    <form @submit.prevent="login()" method="post">
                        <div class="input-group mb-3">
                            <input type="text" v-model="username" class="form-control" placeholder="Korisničko ime">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <span v-if="errors">
                            <span v-for="error in errors" :key="error">{{ error }}</span>
                        </span>
                        <div class="input-group mb-3">
                            <input type="password" v-model="password" class="form-control" placeholder="Lozinka">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-8">
                                <div class="icheck-primary" >
                                    <input type="checkbox" v-model="rememberMe" id="remember">
                                    <label for="remember">
                                        Zapamti me
                                    </label>
                                </div>
                            </div>
                            <!-- /.col -->
                            <div class="col-4">
                                <button type="submit" class="btn btn-primary btn-block">Prijavi se</button>
                            </div>
                            <!-- /.col -->
                        </div>
                    </form>
                    <p class="mb-1">
                        <a href="#">Zaboravio/la sam lozinku</a>
                    </p>
                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import {LOGIN} from "@/store/action.types";

export default {
    name: "Login",
    data() {
        return {
            username: null,
            password: null,
            rememberMe: false
        }
    },
    methods: {
        login() {
            const credentials = {
                username: this.username,
                password: this.password,
                rememberMe: this.rememberMe
            }
            this.$store
                .dispatch(LOGIN, credentials)
                .then(() => this.$router.push({ name: 'Dashboard' }))
        }
    },
    computed: {
        ...mapState({
            errors: state => state.auth.errors
        })
    }
}
</script>

<style scoped>
@import "~admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css";
</style>