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
      const pos = document.getElementById(item).offsetTop;
      const headerHeight = document.getElementsByTagName('header')[0].offsetHeight;
      window.scrollTo(0,pos-headerHeight)
    }
  }
}
</script>

<style lang="scss">
</style>