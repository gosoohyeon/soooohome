<template>
  <div>
      <Status />
      <Tab/>
      <Group :iaList="IA"/>
  </div>
</template>

<script>
import Status from './components/Status.vue'
import Group from './components/Group.vue'
import Tab from './components/Tab.vue'

import iaData from './assets/ia-json.json'

export default {
  name: 'App',
  components: {
    Status,
    Group,
    Tab
  },
  data(){
    return{
      IA : iaData,
    }
  },
  computed :{
  },
  methods : {
  }
}
</script>

<style lang="scss">
  .tab {
    border-color:$pointColor
  }
</style>
