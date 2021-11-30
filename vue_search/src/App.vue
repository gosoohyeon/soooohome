<template>
  <div>
    <header>
      <h2 class="container">검색</h2>
    </header>

    <section class="container">

      <search-form 
        v-bind:value="query"
        v-on:@reset="onReset"
        v-on:@submit="onSubmit"
      ></search-form>
      
      <div class="content">
        <article v-if="submitted">
          <search-result v-bind:data="searchResults" v-bind:query="query"></search-result>
        </article>
        <aside v-else>
          <tab v-bind:tabList="tabs" v-bind:sel="selectedTab" v-on:@change="onClickTab"></tab>
          <div v-if="selectedTab===tabs[0]">
            <list v-bind:data="keywords" type="keyword" v-on:@click="onClickKeyword"></list>
          </div>
          <div v-else>
            <list v-bind:data="historys" type="history" v-on:@click="onClickKeyword" v-on:@remove="onRemoveKeyword"></list>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>
<script>
import SearchModel from './models/SearchModel.js'
import KeywordModel from './models/KeywordModel.js'
import HistoryModel from './models/HistoryModel.js'

import FormComponent from './components/FormComponent.vue'
import ResultComponent from './components/ResultComponent.vue'
import TabComponent from './components/TabComponent.vue'
import ListComponent from './components/ListComponent.vue'

export default {
  components: {
    'search-form' : FormComponent,
    'search-result' : ResultComponent,
    'tab' : TabComponent,
    'list' : ListComponent
  },
  data () {
    return {
      query : '',
      keywords : [],
      historys : [],
      searchResults : [],
      submitted : false,
      tabs : ['추천 검색어', '최근 검색어'],
      selectedTab : '',
    }
  },
  created() {
    this.selectedTab = this.tabs[0] 
    this.fetchKeyword()
    this.fetchHistory()
  },
  methods : {
    onReset () {
      this.query = ''
      this.submitted = false
    },
    onSubmit(keyword){
      this.query = keyword;
      this.search()
    },
    onClickTab(item) {
      this.selectedTab = item;
    },
    onClickKeyword(keyword){
      this.onSubmit(keyword);
      this.onAddKeyword(keyword)
    },
    onRemoveKeyword(keyword){
      HistoryModel.remove(keyword);
      this.fetchHistory();
    },
    onAddKeyword(keyword){
      HistoryModel.add(keyword);
      this.fetchHistory();
    },
    search(){
      this.submitted = true
      SearchModel.list().then(data=>{
        this.searchResults = data
      })
      this.onAddKeyword(this.query)
    },
    fetchKeyword(){
      KeywordModel.list().then(data=>{
        this.keywords=data
      })
    },
    fetchHistory(){
      HistoryModel.list().then(data=>{
        this.historys=data
      })
    },
  }
}
</script>

<style lang="scss">

</style>
