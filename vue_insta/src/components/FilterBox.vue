<template>
        <div :class="filter + ' filter-item'" 
            :style="{backgroundImage:`url(${thumb})`}"
            @click="fire(filter)"
            ><slot></slot>
        </div>
</template>

<script>
export default {
    name:'filterBox',
    props:{
        thumb:String,
        filter:String,
    },
    data(){
        return {
        }
    },
    methods: {
        fire(filter){
            this.emitter.emit('filter',filter)
        }
    },
}
</script>

<style scoped>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>