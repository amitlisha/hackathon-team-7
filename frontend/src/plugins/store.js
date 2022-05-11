import Vue from 'vue'
import Vuex from 'vuex'
// import users from "./modules/users";
// import schedule from "./modules/schedule"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isRightPanelOpen: true,
        currentChildren: {},
        loggedUser: null,
        token: null,
        role: null
    },
    mutations: {
        updateRightPanel(state, value) {
            state.isRightPanelOpen = value
        },
        updateCurrentChildren(state, children) {
            state.currentChildren = children
        }
    },
    actions: { 
        toggleRightPanel({commit, state}) {
            commit("updateRightPanel", !state.isRightPanelOpen)
        },
        updateRightPanel({commit}, value) {
            commit("updateRightPanel", value)
        },
        updateCurrentChildren({commit}, value) {
            console.log(value)
            commit("updateCurrentChildren", value)
        }
    },
    getters: {
 
    }
})
