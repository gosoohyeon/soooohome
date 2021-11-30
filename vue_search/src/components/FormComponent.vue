<template>
  <form v-on:submit.prevent="onSubmit">
      <input v-model="inputValue" type="text" placeholder="검색어를 입력하세요" autofocus>
      <button 
          v-if="inputValue.length" 
          v-on:click="onResetBtn"
          type="button" class="btn-reset"
      ></button>
  </form>
</template>
<script>
export default {
  props : ['value'],
  data(){
      return {
          inputValue : this.value
      }
  },
  watch : {
      value(newVal, oldVal) {
          this.inputValue = newVal
      }
  },
  methods : {
      onResetBtn(){ 
        this.inputValue='';
        this.$emit('@reset')
      },
      onSubmit(){
        this.$emit('@submit', this.inputValue)
      }
  }
}
</script>

<style lang="scss">
form {
  position: relative;
}
input[type=text] {
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin: 15px 0 15px 0;
  padding: 10px 15px;
  font-size: 14px;
  line-height: 1.5;
  border: 1px solid #cccccc;
 
}

.btn-reset{
  border-radius: 50%;
  background-color: #ccc;
  color: white;
  border: none;
  padding: 2px 5px;
  transition: background .3s;
  &:hover {
      background: #aaa;
  }
}
.btn-reset {
  position: absolute;
  top: 12px;
  right: 10px;
}
.btn-reset::before, 
.btn-remove::before {
  content: 'X'
}
</style>