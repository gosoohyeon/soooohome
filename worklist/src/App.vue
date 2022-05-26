<template>
  <div>
      <Status />
      <Tab/>
      <Group :ia="iaList" :iaKeys="iaKeys"/>

  </div>
</template>

<script>
import Status from './components/Status.vue'
import Group from './components/Group.vue'
import Tab from './components/Tab.vue'

// import iaData from './assets/IA-csv.js'
import iaData from './assets/IA-json.js'

      const fs = require('fs');
export default {
  name: 'App',
  components: {
    Status,
    Group,
    Tab
  },
  data(){
    return{
      iaList : iaData,
      iaKeys : [],
    }
  },
  mounted(){
    this.iaKeys = Object.keys(this.iaList[0]);
  },
  methods : {
    handleiaKey(){
      console.log(iaList.keys())
      return iaKey
    },

    // fs모듈로 IA-json.js 파일 생성 미적용 추후작업예쩡
    csvConvert(){      
      const iaResult = [];
      let iaArray = this.iaList.split('\n');
      const iaKey = iaArray[0].split(',');

      for (var k=1; k<iaArray.length; k++) {
        const iaObj = new Object;
        const iaVal = iaArray[k].split(',');

        // 각 배열의 요소를 매치하여 object로 변환 key:value
        for (var i=0; i<iaKey.length; i++) {
          iaObj[iaKey[i]] = iaVal[i];
        }
          iaResult.push(iaObj)
      }
      const iaJson = JSON.stringify(iaResult);
      this.iaJson = iaJson;
      console.log(iaJson)

      // fs.writeFileSync('IA-json.js', iaJson, 'utf8');
    }
  }
}
</script>

<style lang="scss">
  .tab {
    border-color:$pointColor
  }
</style>
