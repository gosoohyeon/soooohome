<template>
  <section>
    <div class="header">
      <ul class="header-button-left" v-if="step != 0" @click="step = 0">
        <li>Cancel</li>
      </ul>
      <div class="header-button-right">
        <button type="button" v-if="step == 1" @click="step = 2">Next</button>
        <button type="button" v-if="step == 2" @click="publish">발행</button>
      </div>
      <img src="./assets/logo.png" class="logo" />
    </div>

    <Container :posts="posts" :step="step" :setNewPost="newPost" @newPostWrite="newPostWrite"/>

    <button @click="more" v-if="step == 0">more</button>

    <button @click="$store.dispatch('getData')">store 로 더보기</button>
    {{ $store.state.more }}



    <div class="footer" v-if="step == 0">
      <ul class="footer-button-plus">
        <input type="file" id="file" class="inputfile" @change="upload" />
        <label for="file" class="input-plus">+</label>
      </ul>
  </div>
  </section>
</template>

<script>
import Container from './components/Container.vue';
import instaData from './assets/postList.js';

import axios from 'axios';

export default {
  name: 'App',
  components: {
    Container
  },
  data(){
    return {
      posts : instaData,
      moreCount : 0,
      step : 0,
      newPost : {
        name: "Soooo",
        userImage: "https://placeimg.com/100/100/animals",
        postImage: '',
        likes: 0,
        date: '',
        liked: false,
        content: '',
        filter: ''
      }
    }
  },
  mounted(){
    this.emitter.on('filter', (filter)=>{
      this.newPost.filter = filter
    })
  },
  methods: {
    more(){
      axios.get(`https://codingapple1.github.io/vue/more${this.moreCount}.json`)
      .then((data)=>{
        // 성공시 실행
        this.posts.push(data.data);
        this.moreCount++;
      })
      .catch((error)=>{
        console.log(error + '요청실패')
      })
    },
    upload(e){
      let file = e.target.files;
      const url =  URL.createObjectURL(file[0]);
      this.newPost.postImage = url;
      this.step = 1;
    },
    publish(){
      const day = new Date()
      this.newPost.date = `${day.getFullYear()}.${day.getMonth()+1}.${day.getDate()}`;

      this.posts.unshift(this.newPost)
      this.step = 0;
      console.log('발행!')
    },
    newPostWrite(newPost){
      this.newPost.content = newPost.content;
    }
  },
}
</script>

<style>

body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 150px;
  padding-left: 20px;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
