<template>
  <div>
    <article class="card" v-for="(product, idx) in products" :key="product.id">
      <a @click.prevent="handleDetail(idx)">
        <img :src="product.image" alt="" class="room-img">
        <h1>{{ product.title }}</h1>
        <p>{{ product.price }}</p>
      </a>
    </article>

    <article class="popup black-bg" v-if="isPopup">
      <div class="popup__inr white-bg">
        <img :src="products[selected].image" alt="" class="room-img">
        <h1>{{ products[selected].title }}</h1>
        <p>{{ products[selected].price }}</p>
        <p>{{ products[selected].content }}</p>
        <button @click.prevent="()=>{isPopup = false}">닫기</button>
      </div>
    </article>
  </div>
</template>

<script>
import data from './assets/oneroom.js';
export default {
  name : 'App',
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
.black-bg {
  width: 100%; height: 100%;
  background: rgba(0,0,0,.5);
  position: fixed; padding: 20px;
  top:0; left:0;
}
.white-bg {
  width: 100%; background: #fff;
  border-radius: 8px;
  padding: 20px;
}
</style>
