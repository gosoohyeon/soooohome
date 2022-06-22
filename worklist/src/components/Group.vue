<template>
  <div class="group">
      <h2>1depth Title</h2>

      <div>{{ iaKeys[0] }}</div>
      <table>
        <colgroup>
            <col v-for="(iaKey) in iaKeys" :key="iaKey" :class="`col-${iaKey}`" />
        </colgroup>
        <thead>
          <tr>
            <th v-for="(iaKey) in iaKeys" :key="iaKey" :class="`col-${iaKey}`">{{ iaKey }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(iaValList, idx) in ia" :key="idx">
            <td 
              v-for="(iaVal, title) in iaValList" 
              :key="`${iaVal}-${idx}`" 
              :class="`col-${title}`"
            >
              <!-- ID -->
              <a 
                v-if="title == 'ID'" 
                :href="`${iaValList.path}${iaVal}`" 
                target="_blank" 
                @mouseenter="previewLink(`${iaValList.path}${iaVal}`, $event)" 
                @mouseleave="previewReset($event)"
              >{{ iaVal }}</a>
              
              <!-- memo textarea -->
              <textarea 
                v-else-if="title == 'info'" 
                class="memo" 
                rows="1" 
                @keyup="updateMemo(iaValList,$event.target.value)" 
                :value="iaVal"
              ></textarea>
              
              <!-- else -->
              <span v-else> {{ iaVal }}</span>
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
    ia : Array,
    iaKeys: Array
  },
  data (){
    return {
      selectedIA : {
        "lvl1":"",
        "lvl2":"",
        "lvl3":"",
        "lvl4":"",
        "description":"",
        "path":"",
        "ID":"",
        "released":"",
        "modified":"",
        "info":""
      }
    }
  },
  components: {},
  methods: {
    previewLink : function (link,event){
      let el = event.target
      const node = document.createElement('iframe')
      node.src=`${link}.html`;
      node.width=1240;
      node.height=1500;
      node.setAttribute('class','sitemapIframe');
      el.appendChild(node);
    },
    previewReset : function(event){
      let el = event.target;
      el.querySelector('.sitemapIframe').remove();
    },
    updateMemo: function(data,val){
        this.selectedIA.lvl1 = data.lvl1;
        this.selectedIA.lvl2 = data.lvl2;
        this.selectedIA.lvl3 = data.lvl3;
        this.selectedIA.lvl4 = data.lvl4;
        this.selectedIA.description = data.description;
        this.selectedIA.path = data.path;
        this.selectedIA.ID = data.ID;
        this.selectedIA.released = data.released;
        this.selectedIA.modified = data.modified;
        this.selectedIA.info = val;
      
      console.log(this.selectedIA)
      
      this.$store.dispatch('modiIA',this.selectedIA)
    },
    deleteIA : function(IAID){
      this.$store.dispatch('delIA',IAID)   
    }
  }
}
</script>

<style lang="scss">
    .col-no {}
    .col-lvl1 ,
    .col-lvl2 ,
    .col-lvl3 ,
    .col-lvl4 {width:10%}
    .col-description {width:20%}
    .col-folder {width:150px}
    .col-ID {width:150px}
    .col-released {width:60px}
    .col-modified {width:60px}
    .col-info {}
</style>
