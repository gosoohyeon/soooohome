/* eslint-disable */ 
<template>
    <div class="cardList">
        <article 
            v-for="(item, idx) in items" 
            :key="idx"
            v-bind:class="['card']"
            @click.prevent="clickItem(idx)"
        >
            <div class="card__text">
                <div class="card__badgeBox">
                    <i v-bind:class="['badge', item.type]">
                        <span v-if="item.type == 'rwd'">반응형웹</span>
                        <span v-else>{{item.type}}</span>
                    </i>
                </div>
                <h1 class="card__subject"><span>{{item.subject}}</span></h1>
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
    </div>
</template>

<script>
export default {
    props: {
        items: { type: Array, default: () => [] }
    },
    methods: {
        clickItem(idx){
            this.$emit('@click',idx)
        }
    }
};
</script>

