<template>
  <div class="tab">
    <button type="button" 
      class="tab__item" 
      v-for="(item,idx) in tabLists"
      :key="item" 
      @click="quickMove(`groupTitle__${idx}`)"
    >{{item}}</button>
  </div> 
</template>

<script>

export default {
  name: 'tab',
  props:{
    tabLists : Array
  },
  data(){
    return{
    }
  },
  created(){
  },
  components: {},
  computed:{
  },
  methods:{
    quickMove : function(item){
      const pos = document.getElementById(item).offsetTop - 80;
      window.scrollTo(0,pos)
    }
  }
}
</script>

<style lang="scss">
  .tab {
    display: flex;
    width:100%;

    &__item {
      position: relative;
      padding: 10px;
      box-sizing: border-box;
      border:none;
      white-space: nowrap;
      cursor: pointer;

      &:hover {
        background: pink;
      }

      &:not(:first-child){
        &:after {
          content:'';
          display: block;
          position: absolute;
          top:calc(50% - 5px);
          left:0;
          width: 1px;
          height: 10px;
          background: #555;
        }
      }
    }
  }
</style>