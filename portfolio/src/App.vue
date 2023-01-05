<template>
  <div>
    <Header/>
    <Content/>
  </div>
</template>




<script>
import Header from "./components/Header";
import Content from "@/components/Content";
import './styles/style.scss';

document.title="UI developer :: 고수현"

export default {
  name: "app",
  components: {
    Header,
    Content
  }
};
</script>
