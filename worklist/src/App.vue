<template>
  <div>
      <Status />
      <Tab />
      <Group />
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
  }
}
</script>

<style lang="scss">
  .tab {
    border-color:$pointColor
  }
</style>
