import Vuex from 'vuex';

import IA from './assets/ia-json.json';

const store = new Vuex.Store({
    state: {
        iaKeys : [],
        iaData : []
    },
    mutations: {
        SET_IA(state,lists){
            state.iaData = lists;
        },
        SET_KEYS(state,keys){
            state.iaKeys = keys;
        },
        MODI_IA(state,{newIA,id}){
            const list = state.iaData.filter ((ia)=>{
                if(ia[id] == newIA[id]) {
                    ia = newIA
                }
            })
            state.iaData = list;
        }
    },
    actions: {
        FETCH_IA({commit}){
            commit('SET_KEYS',IA.keys);
            commit('SET_IA',IA.lists);
        },
        modiIA ({commit},newIA) {
            const id = newIA['SCREEN ID']
            commit('MODI_IA',{newIA,id});
        }
    }
})

export default store;