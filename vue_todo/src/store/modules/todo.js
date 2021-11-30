export default {
    namespaced:true,
    state : {
        todos: [
            {id: 1, text:'밥먹기', checked:false},
            {id: 2, text:'공부', checked:false},
            {id: 3, text:'자기', checked:false},
          ],
    },
	mutations: {
        ADD_TODO(state, value){
            state.todos.push({
              id: Math.random(),
              text: value,
              checked:false
            })
        },
        TOGGLE_TODO(state,{id,checked}){

            const idx = state.todos.findIndex(el => {
                return el.id === id
            })
            state.todos[idx].checked = checked;
        },
        DELETE_TODO(state,todoId){
            state.todos = state.todos.filter(todo => todo.id !== todoId );
        }
    },
	actions: {
        addTodo({commit}, value) {
            setTimeout(function(){
                commit('ADD_TODO',value)
            },500)
        },
        toggleTodo({ commit }, payload){
            setTimeout(function(){
                commit('TOGGLE_TODO',payload)
            },500)
        },
        deleteTodo({ commit }, todoId){
            setTimeout(function(){
                commit('DELETE_TODO',todoId)
            },500)
        },
    },
	getters: {
        numberOfCompletedTodo: state => {
            return state.todos.filter(todo => todo.checked).length;
        }
    }
}