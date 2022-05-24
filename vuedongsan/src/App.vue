<template>
  <div>
    
      <router-view :products="products" class="transition" />
    
  </div>
</template>

<script>
import data from './assets/oneroom.js';
export default {
  name : 'App',
  components : {},
  data () {
    return {
      products : data,
    }
  },
  methods : {
    afterEnter(){
      var list = document.querySelector('.page-list')
      // list.scrollTop = this.$store.state.listBefPos;
    },
    afterLeave(){
    }
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
