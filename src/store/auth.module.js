import ApiService from "@/common/api.service";
import JwtService from "@/common/jwt.service";

import {
    LOGIN,
    LOGOUT,
    CHECK_AUTH
} from "@/store/action.types";
import {SET_AUTH,SET_ERROR,PURGE_AUTH} from "@/store/mutations.type";

const state = {
    errors: null,
    user: {},
    isAuthenticated: !!JwtService.getToken()
};

const getters = {
    currentUser(state) {
        return state.user;
    },
    isAuthenticated(state) {
        return state.isAuthenticated
    }
};

const actions = {
    [LOGIN](context, credentials) {
        return new Promise((resolve) => {
            ApiService.post("authenticate", {
                'username' : credentials.username,
                'password' : credentials.password,
                'rememberMe' : credentials.rememberMe
            })
            .then(({ data }) => {
                context.commit(SET_AUTH, data);
                resolve(data);
            })
            .catch(({ response }) => {
                context.commit(SET_ERROR, response.data.detail);
            });
        });
    },
    [LOGOUT](context){
        context.commit(PURGE_AUTH);
    },
    [CHECK_AUTH](context) {
        if(JwtService.getToken()){
            ApiService.setHeader();
            ApiService.get("user")
                .then(({ data }) => {
                    context.commit(SET_AUTH, data.id_token);
                })
                .catch(({ response }) => {
                    context.commit(SET_ERROR, response.data.errors);
                })
        }else{
            context.commit(PURGE_AUTH);
        }
    }
};

const mutations = {
    [SET_ERROR](state, error){
        state.errors = error;
    },
    [SET_AUTH](state, data){
        state.isAuthenticated = true;
        state.user = data.user;
        state.errors = {};
        JwtService.saveToken(data.id_token);
    },
    [PURGE_AUTH](state) {
        state.isAuthenticated = false;
        state.user = {};
        state.errors = {};
        JwtService.destroyToken();
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}