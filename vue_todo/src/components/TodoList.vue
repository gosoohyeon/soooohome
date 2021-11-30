<template>
    <div>
        <Todo 
        v-for="todo in todos" 
        :key="todo.id" 
        :todo="todo"
        @toggle-checkbox="toggleCheckbox"
        @click-delete="clickDelete"
        />
    </div>
</template>

<script>
import Todo from '@/components/Todo.vue';

export default {
    components: {
        Todo
    },
    methods: {
        toggleCheckbox(value){
            this.$emit('toggle-checkbox', value)
        },
        clickDelete(todoId){
            this.$emit('click-delete', todoId)
        }
    },
    computed:{
        todos() {
            return this.$store.state.todo.todos;
        },
    },
}
</script>

<style>

</style>