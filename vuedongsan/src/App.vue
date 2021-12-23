<template>
  <div>
    <nav class="menu">
      <a>products</a>
      <a>About</a>
    </nav>

    <article v-for="(item, idx) in products" :key="item.id">
      <a @click.prevent="isModal=true; selected = idx">
        <img :src="item.image" class="room-img">
        <h3>{{ item.title }}</h3>
        <p>{{ item.price }} 원</p>
      </a>
    </article>


    <article class="black-bg" v-if="isModal">
      <div class="white-bg">
        <h4>{{ products[selected].title }}</h4>
        <img :src="products[selected].image" class="room-img">
        <p>{{ products[selected].price }} 원</p>
        <p>{{ products[selected].content }}</p>
        <button @click.prevent="isModal=false">닫기</button>
      </div>
    </article>


  </div>
</template>

<script>
import data from './assets/oneroom.js';
export default {
  name: 'App',
  data(){
    return {
      isModal : false,
      selected : 0,
      products : data
    }
  },
  components: {
  },
  methods : {
    increase (idx) {
      this.products[idx].notify++;
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
