
<template>
  <div class="group">
      <h2>1depth Title</h2>

      공통경로 : <input type="text" v-model="this.commonURL">
      <table>
        <colgroup>
            <col v-for="(iaKey) in iaKeys" :key="iaKey" :class="`col__${iaKey.replace(/\s/g, '-')}`" />
        </colgroup>
        <thead>
          <tr>
            <th v-for="(iaKey) in iaKeys" :key="iaKey" :class="`col__${iaKey.replace(/\s/g, '-')}`">
              <span v-if="iaKey == 'worklist-path'">path</span>
              <span v-else-if="iaKey == 'worklist-note'">비고</span>
              <span v-else>{{ iaKey }}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(iaValList, i) in iaList" :key="`${iaValList}-${i}`">
            <td 
              v-for="(iaVal, title, idx) in iaValList" 
              :key="`${title}-${iaVal}`" 
              :class="`col__${title.replace(/\s/g, '-')}`"
            >
              <div v-if="title == 'worklist-path'"
                @mouseenter="previewLink(`${this.commonURL}${iaValList['worklist-path']}`, $event)" 
                @mouseleave="previewReset($event)"
              >
                <!-- '링크수정'버튼 클릭시 input-a toggle -->
                <input type="text" 
                  v-if="iaValList['state']=='modi'" 
                  :value="iaVal"
                  @blur="updatePath(iaValList, $event.target)">
                <a
                  v-else
                  :href="`${this.commonURL}${iaValList['worklist-path']}`" 
                  target="_blank" 
                >{{iaVal}}</a>
                <button type="button" 
                  v-if="iaValList['state']!='modi'" 
                  @click="pathModi(iaValList)"
                  >링크수정</button>
              </div>
              <textarea 
                v-else-if="title == 'worklist-note'"
                class="note" 
                rows="1" 
                @focus="activeMemo($event.target)"
                @blur="updateMemo(iaValList,$event.target)" 
                :value="iaVal"></textarea>
              <span v-else>{{iaVal}}</span>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>

const fs = require('fs');
export default {
  name: 'group',
  props:{
    iaList : Array,
  },
  data (){
    return {
      iaKeys: Object.keys(this.iaList[0]),
      commonURL:'localhost:8080/html'
    }
  },
  components: {},
  methods: {
    previewLink : function (link,event){
      let el = event.target
      const iframe = document.createElement('iframe')
      iframe.src=`${link}.html`;
      iframe.width=1240;
      iframe.height=1500;
      iframe.setAttribute('class','sitemapIframe');
      el.appendChild(iframe);
    },
    previewReset : function(event){
      let el = event.target;
      el.querySelector('.sitemapIframe').remove();
    },
    activeMemo: function(target){
    },
    updateMemo: function(data,target){
      this.iaList.filter(id => {
        if(id["SCREEN ID"]==data["SCREEN ID"]) {
          id['worklist-note'] = target.value;
        }
      });
      // fs.writeFileSync('./src/assets/ia-json.json',this.iaList)
    },
    updatePath: function(data,target){
      this.iaList.filter(id => {
        if(id["SCREEN ID"]==data["SCREEN ID"]) {
          id['worklist-path'] = target.value;
          id['state'] = '';
        }
      });
      // fs.writeFileSync('./src/assets/ia-json.json',this.iaList)
    },
    deleteIA : function(IAID){
      this.$store.dispatch('delIA',IAID)   
    },
    pathModi : function(row){
      row['state'] = 'modi';
    }
  }
}
</script>

<style lang="scss">
  .col__worklist-path {
    div {
      display: flex;
    }
    input {
      flex:1
    }
  }
  .note {
    border:none
  }
</style>