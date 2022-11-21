<template>
  <div class="status">
    <div class="status__btnBox">
      <button type="button" 
        :class="{'is-active':activeStatusBtn == 'complete'}" 
        @click="sortList('complete')"
        >완료 : {{countComplete}}</button>
  
      <button type="button" 
        :class="{'is-active':activeStatusBtn == 'del'}" 
        @click="sortList('del')"
        > 제외 : {{countDel}}</button>

      <button type="button" 
        :class="{'is-active':activeStatusBtn == 'equal'}" 
        @click="sortList('equal')"
        > 동일 : {{countEqual}}</button>
  
      <button type="button" 
        :class="{'is-active':activeStatusBtn == 'total'}" 
        @click="sortList('total')"
        > total : {{total}}</button>
    </div>
    
      

    <div class="progressBar">
      <span class="progressBar__text">진행률 {{percent}}%</span>
      <span class="progressBar__visual" :style="`width:${Math.floor(percent)}%`"></span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'status',
  props: {
    activeStatusBtn:String
  },
  data(){
    return {
      iaList:this.$store.state.iaData,
    }
  },
  created() {
  },
  updated(){
    this.$nextTick(function () {
    })
  },
  computed:{
    total: function(){
      return this.iaList.length;
    },
    countComplete: function(){
      const list = this.iaList.filter((item)=>{
        return item['worklist-status']=='complete'
      })
      return list.length;
    },
    countDel:function(){
      const list = this.iaList.filter((item)=>{
        return item['worklist-status']=='del'
      })
      return list.length;
    },
    countEqual:function(){
      const list = this.iaList.filter((item)=>{
        return item['worklist-status']=='equal'
      })
      return list.length;
    },
    percent: function(){
      const calc = (this.countComplete*100) / (this.total - this.countDel);
      return calc.toFixed(2);
    }
  },
  methods:{
    sortList : function(sort){
      this.$emit('updateList',sort);
    },
  },
  components: {}
}
</script>

<style>
</style>