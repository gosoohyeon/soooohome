<template>
    
    <article class="popup black-bg" :style="{ top : $store.state.modalPos + 'px' }">
      <button type="button" @click.prevent="closeModal()" class="popup-close" aria-label="닫기">&lt;</button>
      <div class="popup__inr white-bg">
        <span class="popup-room-img" :style="{ backgroundImage: `url( ${require('@/assets/' + prod.image)} )` }"></span>
        <div class="popup-cont">
          <h1>{{ prod.title }}</h1>
          <p>{{ prod.price }}</p>
          <p>{{ prod.content }} {{ prod.content }} {{ prod.content }} {{ prod.content }}</p>
        </div>
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
      closeModal(){
        this.$router.push('/list');
        window.scrollTo(this.$store.state.modalPos, 0);
      }
    },
}
</script>
<style lang="scss">
.popup {
  width: 100%; height: 100%;
  position: fixed;
  top:0;
  bottom:0;left:0;
  overflow: auto;
  background: #fff;
  transition: top 1s;
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
}
.popup-room-img {
  position: fixed;
  z-index: 1;

  display: block;
  margin: 0 auto;
  height:0;
  width:300px; padding-bottom: 40%;
  left:50%; margin-left:-150px;

  background-color: #eee;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  
  .transition &{
    animation: popupTopMotion2 .5s forwards;
  }
  @at-root{
    @keyframes popupTopMotion2 {
      from {
        width:300px; padding-bottom: 40%;
        left:50%; margin-left:-150px;
        top:20vw;
      }
      to {
        width:100%; padding-bottom:60%;
        left:0%; margin-left:0;
        top:0;
      }
    }
  }
}
.popup-cont {
  position: relative;
  z-index: 10;
  overflow: hidden;
  margin-top: calc(60vw - 30px);
  padding: 50px 5%;
  width: 100vw;
  min-height: calc(100vh - 60vw + 30px);
  border-radius: 30px 30px 0 0;
  background: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,.3);

  .transition & {
    animation: popupTopMotion3 .5s;
    animation-fill-mode: forwards;
  }
  @at-root{
    @keyframes popupTopMotion3 {
      from {opacity:0}
      to {opacity:1}
    }
  }
  p {
    font-size: 30px;
  }
  p + p {
    margin-top: 50px;
  }
}
.popup-close {
  position: fixed;
  top:20px; left:10px;
  z-index: 10;
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0,0,0,.3);
  border: none;
  .transition & {
    animation: popupTopMotion3 .5s;
    animation-fill-mode: forwards;
  }
  @at-root{
    @keyframes popupTopMotion3 {
      from {opacity:0}
      to {opacity:1}
    }
  }
}
</style>