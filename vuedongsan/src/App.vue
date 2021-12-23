<template>
  <div>

    <Discount />

    <article class="card" v-for="(product, idx) in products" :key="product.id">
      <a @click.prevent="handleDetail(idx)">
        <img :src="product.image" alt="" class="room-img">
        <h1>{{ product.title }}</h1>
        <p>{{ product.price }}</p>
      </a>
    </article>

    <Modal />
  </div>
</template>

<script>
import data from './assets/oneroom.js';
import Discount from './discount.vue';
import Modal from './Modal.vue';
export default {
  name : 'App',
  components : {
    Discount,
    Modal : Modal,
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
