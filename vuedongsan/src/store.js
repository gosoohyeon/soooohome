import { createStore } from 'vuex';

const store = createStore({
    state(){
        return {
            modalPos : 0,
            listBefPos : 0
        }
    },
    mutations :{
        setModalPos(state, pos){
            state.modalPos = pos
        },
        setListBefPos(state, pos){
            state.listBefPos = pos
        }
    },
    actions :{}
})

export default store;