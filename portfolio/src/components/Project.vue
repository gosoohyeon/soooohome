/* eslint-disable */ 
<template>
    <div class="cardList">
        <article 
            v-for="(item, idx) in items" 
            :key="idx"
            v-bind:class="['card']"
        >
            <div class="card__badgeBox">
                <i v-for="type in item.type" v-bind:class="['badge', type == 'back office' ? 'back-office' : type]">
                    <span v-if="type == 'rwd'">반응형웹</span>
                    <span v-else>{{type}}</span>
                </i>
            </div>
            <h1 class="card__subject"><span>{{item.subject}}</span></h1>
            <p class="card__desc">{{item.desc}}</p>
            <span class="card__skill">{{item.skill}}</span>
            <div class="card__subinfo">
                <span class="card__part">참여도 <b>{{item.part}}%</b></span>
                <span class="card__date">{{item.date}}</span>
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
    }
};
</script>

