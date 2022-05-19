<template>
  <div>
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

<style>
html, body {margin:0;padding:0;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {box-sizing: border-box;}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: #fff;
  padding: 10px;
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
