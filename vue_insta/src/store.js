import {createStore} from 'vuex';

import axios from 'axios';
const store = createStore({
    state(){
        return {
            name:'kim',
            age:35,
            like:0,
            islike:false,
            more : {},
            moreCount : 0,
        }
    },
    mutations:{
        rename(state, newName){
            state.name = newName
        },
        addAge(state){
            state.age++
        },
        like(state){
            state.islike = !state.islike;
            if(state.islike) {
                state.like++;
            }else {
                state.like--;
            }
        },
        setMore(state, data){
            state.more = data
        },
    },
    actions : {
        getData(context){

            axios.get(`https://codingapple1.github.io/vue/more0.json`)
            .then((data)=>{
                context.commit('setMore',data)
            })
            .catch((error)=>{
                console.log(error + '요청실패')
            })
        }
    },
})

export default store;