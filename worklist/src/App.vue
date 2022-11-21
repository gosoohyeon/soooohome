<template>
  <div>
      <header>
        <Status @updateList="updateList"/>
        <Tab :tabLists="groupTitles"/>

        공통경로 : <input type="text" v-model="this.commonURL">
      </header>

      <article class="content">
        <Group v-for="(group, idx) in groups" 
          :iaList="group" 
          :idx="idx" 
          :commonURL="commonURL"
          :sort="this.sort"/>
      </article>
  </div>
</template>

<script>
import Status from './components/Status.vue'
import Group from './components/Group.vue'
import Tab from './components/Tab.vue'

export default {
  name: 'App',
  components: {
    Status,
    Group,
    Tab
  },
  data(){
    return{
      iaKeys: this.$store.state.iaKeys,
      iaList : this.$store.state.iaData,
      groupTarget:'1depth',
      test:'',
      groupTitles: [],
      groups : [],
      sort:'total',
      commonURL: '/publish/html/',
    }
  },
  beforeCreate(){
    console.log('!!')
    this.$store.dispatch('FETCH_IA');
  },
  created () {
    this.setGroupTitles();
    this.setGroups(this.iaList);
  },
  mounted(){
  },
  updated(){
  },
  watch :{
  },
  methods : {
    setGroupTitles(){
      // tab category
      let tabList = [];
      console.log(this.iaList)
      this.iaList.filter((item)=>{
        const curItem = item[this.groupTarget];
        if (curItem.length > 0){
          tabList.push(curItem)
        }
      })
      this.groupTitles = [...new Set(tabList)];
    },

    setGroups(list){
      // group별 분리
      let iaGroup = [];
      for(let i=0; i<this.groupTitles.length; i++){
        let obj = {};
        let g = list.filter(item=>{
          return item[this.groupTarget] == this.groupTitles[i]
        })
        obj[this.groupTitles[i]] = g;
        iaGroup.push(obj);
      }
      this.groups = iaGroup;
    },
    updateList(status){
      this.sort = status;
    },
  }
}
</script>

<style lang="scss">
  .tab {
    border-color:$pointColor
  }
</style>
