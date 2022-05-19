import { createStore } from 'vuex';

const store = createStore({
    state(){
        return {
            modalPos : 0
        }
    },
    mutations :{
        setModalPos(state, pos){
            state.modalPos = pos
        }
    },
    actions :{}
})

export default store;