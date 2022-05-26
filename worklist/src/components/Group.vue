<template>
  <div class="group">
      <h2>1depth Title</h2>

      <div>{{ iaKeys[0] }}</div>
      <table>
        <colgroup>
          <col class="col-no" />
          <col class="col-lv1" />
          <col class="col-lv2" />
          <col class="col-lv3" />
          <col class="col-lv4" />
          <col class="col-desc" />
          <col class="col-path" />
          <col class="col-rdate" />
          <col class="col-mdate" />
          <col class="col-info" />
        </colgroup>
        <thead>
          <!-- <tr v-for="(iaKey, index) in iaKeys" :key="index"> -->
          <tr>
            <th v-for="(iaKey, keyidx) in iaKeys" :key="keyidx" :class="`col-${iaKey}`">{{ iaKey }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(iaValList, idx) in ia" :key="idx">
            <td v-for="(iaVal, title) in iaValList" :key="`${iaVal}-${idx}`" :class="`col-${title}`">{{ iaVal }}</td>
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
    return {}
  },
  components: {}
}
</script>

<style lang="scss">
table {
  // table-layout: fixed;
  width: 100%;

  th, td {
    border:1px solid #aaa;
  }
}
</style>
