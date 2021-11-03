<template>
  <div>
    <Header/>
    <Content/>
  </div>
</template>




<script>
import Header from "./components/Header";
import Content from "@/components/Content";

document.title="UI developer :: 고수현"

export default {
  name: "app",
  components: {
    Header,
    Content
  }
};
</script>


<style lang="scss">
@import './assets/sass/style';
</style>