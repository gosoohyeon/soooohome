<template>
  <div>
      <header class="header">
        <Status @updateList="updateList" :activeStatusBtn="this.sort"/>

        <div class="header__function">
          <div class="header__toggleMode">
            <label>
              <input type="radio" name="isModify" id="" value="false" v-model="this.isModify" @change="this.isModify=false">
              <span class="header__toggleModeText">읽기모드</span>
            </label>
            <label>
              <input type="radio" name="isModify" id="" value="true" v-model="this.isModify" @change="this.isModify=true">
              <span class="header__toggleModeText">수정모드</span>
            </label>
          </div>
          <div class="header__commPath">
            공통경로 : <input type="text" v-model="this.commonURL">
          </div>
        </div>
        <Tab :tabLists="groupTitles"/>
      </header>


      <article class="content">
        <Group v-for="(group, idx) in groups" 
          :iaList="group" 
          :idx="idx" 
          :commonURL="commonURL"
          :sort="this.sort" 
          :isModify="isModify"
          @setPreview="setPreview"/>
      </article>

      <!-- <Preview 
        v-show="isPreviewPopup" 
        :list="PreviewItem" 
        :commLink="commonURL"
        :idx="PreviewCurrIdx"
        @closePreiview="closePreiview" /> -->
  </div>
</template>

<script>
import Status from './components/Status.vue'
import Group from './components/Group.vue'
import Tab from './components/Tab.vue'
import Preview from './components/Preview.vue'

export default {
  name: 'App',
  components: {
    Status,
    Group,
    Tab,
    Preview
  },
  data(){
    return{
      isModify: true,
      iaList : this.$store.state.iaData,
      groupTarget:'1depth',
      groupTitles: [],
      groups : [],
      sort:'total',
      commonURL: 'https://www.zeropay.or.kr/',
      isPreviewPopup:false,
      PreviewItem:'',
      PreviewCurrIdx:0,
    }
  },
  beforeCreate(){
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
    modifyStatus(e){
      this.isModify = e.target.checked;
    },
    setGroupTitles(){
      // tab category
      let tabList = [];
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
      for(let i=0; i<this.groupTitles.length; i++){
        let obj = {};
        let g = list.filter(item=>{
          return item[this.groupTarget] == this.groupTitles[i]
        })
        obj[this.groupTitles[i]] = g;
        this.groups.push(obj);
      }
    },
    updateList(status){
      this.sort = status;
    },
    setPreview({list}){
      this.isPreviewPopup=true;
      const lists = [];
      this.iaList.filter((el)=>{
        if (el['worklist-path'] != '') {
          lists.push(el)
        }
      });
      this.PreviewItem=lists;
      this.PreviewCurrIdx= this.PreviewItem.indexOf(list);
    },
    closePreiview(){
      this.isPreviewPopup=false;
      this.PreviewItem=[];
      this.PreviewCurrIdx=0;
    }
  }
}
</script>

<style lang="scss">
  .tab {
    border-color:$pointColor
  }
</style>