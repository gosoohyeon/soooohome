<template>
  <div class="preview">
      <iframe :src="`${commLink}${this.thisItem}`" frameborder="0"></iframe>
      <div class="preview__info">
        <button type="button">이전</button>
        <br/>
        {{thisItem}}
        <br/>
        <button type="button" @click="previewNext">다음</button>
      </div>

      <button type="button" @click="closePreiview">닫기</button>
  </div>
</template>

<script>

export default {
  name: 'preview',
  components: {},
  props:{
    commLink:String,
    list: Array,
    idx:Number,
  },
  data(){
    return {
      thisItem : this.list[this.idx]['worklist-path'],
      currIdx : this.idx,
    }
  },
  updated () {
  },
  methods:{
    closePreiview : function(){
      this.$emit('closePreiview');
      this.src = '';
      this.desc = '';
      this.currIdx = 0;
    },
    previewNext:function(){
      let nextIdx = this.currIdx == this.list.length-1 ? 0 : this.currIdx++;
      console.log(this.list.length,nextIdx)
      this.src = this.list[nextIdx]['worklist-path'];
      this.desc = this.list[nextIdx]['SCREEN ID'];
      this.currIdx = nextIdx;
    },
    previewPrev:function(){
      let prevIdx = this.currIdx == 0 ? this.list.length-1 : this.currIdx--;
      this.src = this.list[prevIdx]['worklist-path'];
      this.desc = this.list[prevIdx]['SCREEN ID'];
      this.currIdx = prevIdx;
    }
    
  }
}
// this.$store.state.iaData,
</script>

<style>
</style>