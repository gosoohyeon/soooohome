<template>
    <ul id="tabs" class="tabs">
        <li 
            v-for="(item, index) in tabList" 
            :key="index"
        >
        <button type="button" class="tabs__btn" 
            v-on:click="clickTab(item)"
            v-bind:class="{active : sel === item}">{{item}}</button>
        </li>
    </ul>
</template>

<script>
export default {
    props:['tabList','sel'],
    methods : {
        clickTab(item){
            this.$emit('@change', item)
        }
    }
}
</script>

<style lang="scss">

ul.tabs {
  display: flex;
}
.tabs {
    li {
        display: inline-block;
        width: 50%;
        box-sizing: border-box;
        border-bottom: 1px solid #ccc; 
    }

  &__btn {
      display: block;
      width: 100%;
        padding: 15px;
        text-align: center;
      color: #999;
      background-color: #eee;
      &:hover {
          color: #000;
      }
      &.active {
          background-color: #2ac1bc;
          color: #fff;
      }
  }
}
</style>