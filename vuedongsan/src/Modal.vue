<template>
    
    <article class="popup black-bg">
      <div class="popup__inr white-bg">
        <img :src="prods.image" alt="" class="room-img">
        <h1>{{ prods.title }}</h1>
        <p>{{ prods.price }}</p>
        <p>{{ prods.content }}</p>
        <button @click.prevent="closed">닫기</button>
      </div>
    </article>
</template>
<script>
export default {
    name : 'Modal',
    props : {
        prods : Object
    },
    methods: {
        closed(){
            this.$emit('@close')
        }
    },
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