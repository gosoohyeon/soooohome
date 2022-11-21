<template>
  <div class="group">
      <h2 :id="`groupTitle__${idx}`" class="groupTitle">{{Object.keys(iaList)[0]}}</h2>

      <table>
        <colgroup>
            <col v-for="(iaKey) in iaKeys" :class="`col__${iaKey.replace(/\s/g, '-')}`" />
        </colgroup>
        <thead>
          <tr>
            <th v-for="(iaKey) in iaKeys" :class="`col__${iaKey.replace(/\s/g, '-')}`">
              <span v-if="iaKey == 'worklist-status'">상태</span>
              <span v-else-if="iaKey == 'worklist-path'">path</span>
              <span v-else-if="iaKey == 'worklist-note'">비고</span>
              <span v-else>{{ iaKey }}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(iaValList) in iaGroup" 
            :class="`status--${iaValList['worklist-status']}`"
            v-show="iaValList['worklist-status'] == this.sort || this.sort=='total'">
            <td 
              v-for="(iaVal, title) in iaValList" 
              :class="`col__${title.replace(/\s/g, '-')}`"
            >
              <div v-if="title == 'worklist-status'">
                <select name="" id="" class="group__select" @change="updateStatus(iaValList,$event.target)" v-if="isModify">
                  <option value="stay" :selected="iaValList['worklist-status'] == 'stay'">대기</option>
                  <option value="ing" :selected="iaValList['worklist-status'] == 'ing'">진행중</option>
                  <option value="equal" :selected="iaValList['worklist-status'] == 'equal'">동일</option>
                  <option value="complete" :selected="iaValList['worklist-status'] == 'complete'">완료</option>
                  <option value="del" :selected="iaValList['worklist-status'] == 'del'">제외</option>
                </select>
                <span v-else class="status__badge">
                  {{this.statusRename(iaVal)}}
                </span>
              </div>
              <div v-else-if="title == 'worklist-path'" class="group__path">
                <!-- '링크수정'버튼 클릭시 input-a toggle -->
                <input type="text" 
                  v-if="isModify" 
                  :value="iaVal"
                  @blur="updatePath(iaValList, $event.target)">
                <a v-else
                  :href="`${commonURL}${iaValList['worklist-path']}`" 
                  target="_blank" 
                  @mouseenter="previewLink(`${commonURL}${iaValList['worklist-path']}`, $event)" 
                  @mouseleave="previewReset($event)">{{iaVal}}</a>
                  <!-- <button type="button" @click.prevent="previewPopup(`${commonURL}${iaValList['worklist-path']}`, iaValList)">미리보기</button> -->
              </div>
              <div v-else-if="title == 'worklist-note'">
                <textarea 
                  v-if="isModify"
                  class="note" 
                  rows="1" 
                  @blur="updateMemo(iaValList,$event.target)" 
                  :value="iaVal">
                </textarea>
                <span v-else>{{iaVal}}</span>
              </div>
              <span v-else>{{iaVal}}</span>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
export default {
  name: 'group',
  props:{
    isModify : Boolean,
    iaList : Object,
    idx: Number,
    commonURL:String,
    sort:String,
  },
  data (){
    return {
      iaGroup : Object.values(this.iaList)[0],
      iaKeys: this.$store.state.iaKeys,
    }
  },
  components: {
  },
  methods: {
    sendNewIA : function(data){
      this.$store.dispatch('modiIA', data)
    },
    previewLink : function (link,event){
      const el = event.target
      const iframe = document.createElement('iframe')
      iframe.src=`${link}`;
      iframe.width=1240;
      iframe.height=1500;
      iframe.setAttribute('class','sitemapIframe');
      el.appendChild(iframe);
    },
    previewReset : function(event){
      let el = event.target;
      el.querySelector('.sitemapIframe').remove();
    },
    updateMemo: function(data,target){
      let list = data;
      list['worklist-note'] = target.value;
      this.sendNewIA(list);
    },
    updatePath: function(data,target){
      let row = data;
      row['worklist-path'] = target.value;
      this.sendNewIA(row);
    },
    deleteIA : function(IAID){
      this.$store.dispatch('delIA',IAID)   
    },
    updateStatus : function(data,target){
      let row = data;
      row['worklist-status'] = target.value;
      this.sendNewIA(row);
    },
    statusRename : function(status){
      switch(status){
        case 'stay' : return "대기";
        break;
        case 'ing' : return "진행중";
        break;
        case 'complete' : return "완료";
        break;
        case 'del' : return "제외";
        break;
        case 'equal' : return "동일";
        break;
        default : return '대기'
      }
    },
    previewPopup : function(link, list){
      this.$emit('setPreview',{list, link});
    }
  }
}
</script>

<style lang="scss">
</style>