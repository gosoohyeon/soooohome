<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link  class="nav-link active" aria-current="page" to="/">Home</router-link >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/list">List</router-link>
        </li>
      </ul>
    </nav>
    <router-view :blogList="blogList"></router-view>
  </div>
</template>

<script>
import BlogList from './assets/blogList.js'
export default {
  name: 'App',
  components: {
  },
  data(){
    return {
      blogList : BlogList
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
</style>
