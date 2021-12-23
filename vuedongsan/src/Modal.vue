<template>
    
    <article class="popup black-bg" v-if="isPopup">
      <div class="popup__inr white-bg">
        <img :src="products[selected].image" alt="" class="room-img">
        <h1>{{ products[selected].title }}</h1>
        <p>{{ products[selected].price }}</p>
        <p>{{ products[selected].content }}</p>
        <button @click.prevent="()=>{isPopup = false}">닫기</button>
      </div>
    </article>
</template>
<script>
export default {
    name : 'Modal'
}
</script>
<style>

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