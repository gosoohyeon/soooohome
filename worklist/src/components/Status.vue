<template>
  <div class="status">
      진행률 {{percent}}%
      <button type="button" @click="sortList('complete')">완료 : {{countComplete}}</button>
      <button type="button" @click="sortList('del')"> 제외 : {{countDel}}</button>
      <button type="button" @click="sortList('total')"> total : {{total}}</button>

      <div class="progressBar"><span :style="`width:${Math.floor(percent)}%`"></span></div>
  </div>
</template>

<script>

export default {
  name: 'status',
  props: {
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
    percent: function(){
      console.log(this.total , this.countDel)
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