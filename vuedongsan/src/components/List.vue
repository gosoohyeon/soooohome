<template>
  <div class="page-list">
List
    <Discount />
    <Card 
      :products="products" 
    />
  </div>
</template>

<script>
import Discount from './discount.vue';
import Card from './Card.vue';
export default {
  name : 'List',
  components : {
    Discount,
    Card,
  },
  props:{
      products:Array
  },
  data () {
    return {
    }
  },
  methods : {
  }
}
</script>

<style lang="scss">
.page-list {
    overflow: auto;
    height: 100vh;
    &.transition {
    }
}
 .room-img {
   display: block;
   margin: 0 auto;
   max-width: 300px;
     width: 100%; height:0;
     padding-bottom: 40%;
     background-color: #eee;
     background-repeat: no-repeat;
     background-size: cover;
     background-position: 50%;
 }
</style>
