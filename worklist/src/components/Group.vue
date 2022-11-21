<template>
  <div class="group">
      <h2 :id="`groupTitle__${idx}`" class="groupTitle">{{Object.keys(iaList)[0]}}</h2>

      <table>
        <colgroup>
            <col v-for="(iaKey) in iaKeys" :key="iaKey" :class="`col__${iaKey.replace(/\s/g, '-')}`" />
        </colgroup>
        <thead>
          <tr>
            <th v-for="(iaKey) in iaKeys" :key="iaKey" :class="`col__${iaKey.replace(/\s/g, '-')}`">
              <span v-if="iaKey == 'worklist-status'">상태</span>
              <span v-else-if="iaKey == 'worklist-path'">path</span>
              <span v-else-if="iaKey == 'worklist-note'">비고</span>
              <span v-else>{{ iaKey }}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(iaValList, i) in iaGroup" 
            :key="`${iaValList}-${i}`" 
            :class="`status__badge status__badge--${iaValList['worklist-status']}`"
            v-show="iaValList['worklist-status'] == this.sort || this.sort=='total'">
            <td 
              v-for="(iaVal, title, idx) in iaValList" 
              :key="`${title}-${iaVal}`" 
              :class="`col__${title.replace(/\s/g, '-')}`"
            >
              <div v-if="title == 'worklist-status'">
                <select name="" id="" @change="updateStatus(iaValList,$event.target)">
                  <option value="stay" :selected="iaValList['worklist-status'] == 'stay'">대기</option>
                  <option value="ing" :selected="iaValList['worklist-status'] == 'ing'">진행중</option>
                  <option value="complete" :selected="iaValList['worklist-status'] == 'complete'">완료</option>
                  <option value="del" :selected="iaValList['worklist-status'] == 'del'">제외</option>
                </select>
              </div>
              <div v-else-if="title == 'worklist-path'">
                <!-- '링크수정'버튼 클릭시 input-a toggle -->
                <input type="text" 
                  v-if="iaValList['mode']=='modi'" 
                  :value="iaVal"
                  @blur="updatePath(iaValList, $event.target)">
                <a v-else
                  :href="`${commonURL}${iaValList['worklist-path']}`" 
                  target="_blank" 
                  @mouseenter="previewLink(`${commonURL}${iaValList['worklist-path']}`, $event)" 
                  @mouseleave="previewReset($event)">{{iaVal}}</a>
                <button type="button" 
                  v-if="iaValList['mode']!='modi'" 
                  @click="pathModi(iaValList)"
                  >링크수정</button>
              </div>
              <textarea 
                v-else-if="title == 'worklist-note'"
                class="note" 
                rows="1" 
                @focus="activeMemo($event.target)"
                @blur="updateMemo(iaValList,$event.target)" 
                :value="iaVal">
              </textarea>
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
  components: {},
  methods: {
    sendNewIA : function(data){
      this.$store.dispatch('modiIA', data)
      // fs.writeFileSync('./src/assets/ia-json.json',this.iaList)
    },
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
      let list = data;
      list['worklist-note'] = target.value;
      this.sendNewIA(list);
    },
    updatePath: function(data,target){
      this.iaGroup.filter(id => {
        if(id["SCREEN ID"]==data["SCREEN ID"]) id['mode'] = '';
      });
      let row = data;
      row['worklist-path'] = target.value;
      this.sendNewIA(row);
    },
    deleteIA : function(IAID){
      this.$store.dispatch('delIA',IAID)   
    },
    pathModi : function(row){
      row['mode'] = 'modi';
    },
    updateStatus : function(data,target){
      let row = data;
      row['worklist-status'] = target.value;
      this.sendNewIA(row);
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
  .group {
      margin-top: 30px;
      
      &Title {
        margin: 50px 0 10px 0;
      }

      table {
          width: 100%;
          th, td {
              padding:3px;
              font-size: 12px;
              line-height:1.3em;
              border:1px solid #d0d0d0;
              vertical-align: middle;
          }
      }
      thead {
          th {
              border-color:#aaa;
              background: #e5e5e5;
          }
      }
      tr {
          &:hover {
            position: relative;
            box-shadow: 0px 0px 8px rgba(#000,.3);
          }
      }
      
  }
  .col__worklist-path {
      position: relative;
      a {
          color: darken($pointColor, 20%);
          text-decoration: none;
          text-underline-position: under;
          &:hover {
              color: darken($color:$pointColor, $amount:0);
              text-decoration: underline;
          }
      }
  }
  .sitemapIframe{
      position: absolute;
      top:-300px - 1px;
      left:calc(50% - 124px);
      z-index: 1;
      transform:scale(0.2);transform-origin: left top;
      background-color: #fff;
      box-shadow: 0 0 30px rgba(0,0,0,.2);
  }
  .memo {
      resize: vertical;
      border:1px solid #eee;
      min-height: 20px;
      box-sizing: border-box;
      vertical-align: top;
      &:focus {
          border-color:$pointColor;
          outline:none;
      }
  }
  .status{
    position: relative;
    &__badge {

      &--stay {}
      &--ing {background: hotpink;}
      &--complete {background: skyblue;}
      &--del {color: #aaa;}
    }
  }
</style>