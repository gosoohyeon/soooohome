<template>
    
    <article class="popup black-bg" :style="{ top : $store.state.modalPos + 'px' }">
      <div class="popup__inr white-bg">
        <span class="room-img" :style="{ backgroundImage: `url( ${require('@/assets/' + prod.image)} )` }"></span>
        <div class="popup-cont">
          <h1>{{ prod.title }}</h1>
          <p>{{ prod.price }}</p>
          <p>{{ prod.content }}</p>
        </div>
        <button @click.prevent="$router.push('/list')" class="popup-close">&lt;</button>
      </div>
    </article>
</template>
<script>
export default {
    name : 'Modal',
    props: {
      products : Array
    },
    data(){
      return {
        prod : this.products[this.$route.params.id]
      }
    },
    methods: {
    },
}
</script>
<style lang="scss">
.popup {
  width: 100%; height: 100%;
  position: fixed;
  bottom:0;left:0;
  background: #fff;
  transition: top 1s;
  top:0;
  &.transition {
    animation: popupTopMotion .5s;
    animation-fill-mode: forwards;
  }
  @at-root{
    @keyframes popupTopMotion {
      to {top:0}
    }
  }
}
.white-bg {
  width: 100%;
  border-radius: 8px;
  margin: 0 auto;
  
  .transition &{
    animation: popupTopMotion2 .5s forwards;
  }
  @at-root{
    @keyframes popupTopMotion2 {
      from {max-width:300px}
      to {max-width:100%}
    }
  }
}
.popup .room-img {
  width: 100%;
  max-width: 100%;
  padding-bottom: 60%;
}
.popup-cont {
  overflow: hidden;
  margin-top: -30px;
  min-height: calc(100vh - 60vw + 30px);
  border-radius: 30px 30px 0 0;
  background: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,.3);
}
.popup-close {
  position: absolute;
  top:20px;
  left:10px;
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0,0,0,.3);
  border: none;
}
</style>