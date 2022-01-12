<template>
  <div>

    <Discount />

    <Card :products="products" v-on:@click="handleDetail" />

    <Modal :prods="products[selected]" v-on:@close="closed" v-if="isPopup"/>
  </div>
</template>

<script>
import data from './assets/oneroom.js';
import Discount from './discount.vue';
import Modal from './Modal.vue';
import Card from './Card.vue';
export default {
  name : 'App',
  components : {
    Discount,
    Modal : Modal,
    Card,
  },
  data () {
    return {
      selected : 0,
      isPopup : false,
      products : data
    }
  },
  methods : {
    handleDetail(i){
      this.isPopup = true;
      this.selected = i;
    },
    closed(){
      this.isPopup = false;
    }
  }
}
</script>

<style>
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
  margin: 0 auto;
  width: 100%;
  max-width: 300px;
}
</style>
