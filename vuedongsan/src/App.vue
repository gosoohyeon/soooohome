<template>
  <div>
    <nav class="menu">
      <a>products</a>
      <a>About</a>
    </nav>

    <article v-for="(item, idx) in products" :key="idx">
      <a @click.prevent="isModal=true">
        <img :src="item.img" class="room-img">
        <h3>{{ item.title }}</h3>
        <p>{{ item.price }} 만원</p>
        <button  @click="increase(idx)">허위매물 신고</button>
        <span>신고수 : {{item.notify}} 건</span>
      </a>
    </article>


    <article class="black-bg" v-if="isModal">
      <div class="white-bg">
        <h4>상세페이지</h4>
        <p>상세페이지 내용</p>
        <button @click.prevent="isModal=false">닫기</button>
      </div>
    </article>


  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      isModal : false,
      products : [
        {
          title : '역삼동원룸',
          price : 60,
          notify : 0,
          img : './assets/room0.jpg'
        },
        {
          title : '천호동원룸',
          price : 70,
          notify : 0,
          img : './assets/room1.jpg'
        },
        {
          title : '마포구원룸',
          price : 40,
          notify : 0,
          img : './assets/room2.jpg'
        },
      ]
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
