<template>
    
    <article class="popup black-bg">
      <div class="popup__inr white-bg">
          
        <article>
            <span class="card__img"  :style="{ backgroundImage: `url(${require('@/assets/images/' + item.imgsrc)})` }"></span>
            <div class="card__text">
                <div class="card__badgeBox">
                    <i v-bind:class="['badge', item.type]">
                        <span v-if="item.type == 'rwd'">반응형웹</span>
                        <span v-else>{{item.type}}</span>
                    </i>
                </div>
                <h1 class="card__subject"><span>{{item.subject}}</span></h1>
                <p class="card__desc">{{item.desc}}</p>
                <p class="card__desc">{{item.skill}}</p>
                <div class="card__subinfo">
                    <span class="card__part">참여도 <b>{{item.part}}%</b></span>
                    <span class="card__date">{{item.date}}</span>
                </div>
            </div>
            <a :href="item.url" v-if="item.link" target="_blank" class="card__link">
                <span class="card__btn" v-if="item.link">Link</span>
            </a>
            <span class="card__link card__textNolink" v-else-if="item.link == false">no link</span>
        </article>
        <button @click.prevent="closed">닫기</button>
      </div>
    </article>
</template>
<script>
export default {
    name : 'Modal',
    props : {
        item : Object
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
  box-sizing: border-box;
}
.white-bg {
    margin-top:20%;
  width: 100%; 
  box-sizing: border-box;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
}
</style>